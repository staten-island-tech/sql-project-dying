<template>
  <div>
    <header>
      <div class="logo"></div>
      <h1>Welcome to the Honkai: Star Rail Character Store!</h1>
      <div class="container">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Diphylleia&family=Reggae+One&display=swap"
          rel="stylesheet"
        />
        <div class="li">
          <nav class="routers">
            <RouterLink to="/login">Login</RouterLink>

            <RouterLink to="/">Home</RouterLink>

            <RouterLink to="/store">Store</RouterLink>
          </nav>
        </div>
      </div>
    </header>
    <h1>{{ userEmail }}: Card Purchases</h1>
    <div v-for="(purchase, index) in purchases" class="card">
      <div class="display-card">
        <img class="display-img" v-bind:src="purchase.img" />
      </div>
      <div class="line2"></div>
      <div class="description">
        <h3 class="display-title">{{ purchase.character }}</h3>
        <h4 class="display-price">${{ purchase.price }}</h4>
        <button class="btn" @click="removeCart(index)">REMOVE</button>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from '../lib/supabaseClient.js'

export default {
  data() {
    return {
      userEmail: null,
      purchases: []
    }
  },
  async mounted() {
    await this.getUser()
  },
  methods: {
    async getUser() {
      const {
        data: { user }
      } = await supabase.auth.getUser()
      this.userEmail = user.email

      let { data: purchases, error } = await supabase
        .from('purchases')
        .select('img, price, character')
        .eq('email', user.email)
      if (error) {
        console.error(error)
      } else {
        this.purchases = purchases.reduce((result, purchase) => {
          const characters = purchase.character.flat()
          const prices = purchase.price.flat()
          const images = purchase.img.flat()

          characters.forEach((character, index) => {
            result.push({
              img: images[index],
              character: character,
              price: prices[index]
            })
          })
          return result
        }, [])
        for (const row of purchases) {
          const columnArray = row.character
          for (const subArray of columnArray) {
            for (const element of subArray) {
              console.log(element)
            }
          }
        }
      }
    },
    async removeCart(index) {
      const purchase = this.purchases[index]
      const { character, price, img } = purchase

      this.purchases.splice(index, 1)

      const { data, error } = await supabase
        .from('purchases')
        .select('id, character, price, img')
        .eq('email', this.userEmail)

      if (error) {
        console.error(error)
        return
      }

      const updatedCharacterArray = data[0].character.flat().filter((name) => name !== character)
      const updatedPriceArray = data[0].price.flat().filter((priceValue) => priceValue !== price)
      const updatedImgArray = data[0].img.flat().filter((imageUrl) => imageUrl !== img)

      await supabase
        .from('purchases')
        .update({
          character: [updatedCharacterArray],
          price: [updatedPriceArray],
          img: [updatedImgArray]
        })
        .eq('email', this.userEmail)
    }
  }
}
</script>

<style scoped>
.logo {
  background-image: url(https://upload.wikimedia.org/wikipedia/en/b/b1/Honkai-Star-Rail.png);
  background-size: 550px 450px;
  background-position: center;
  width: 30rem;
  height: 15rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
  padding-bottom: 20px;
  align-self: center;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Nunito', sans-serif;
}

.window {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  font-family: 'Nunito', sans-serif;
  margin-left: 20px;
}

.routers {
  padding: 0px;
  width: 98.5vw;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  color: black;
}

.display {
  display: flex;
  flex-wrap: wrap;
  width: 99.5vw;
  height: fit-content;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  box-sizing: border-box;
  align-items: center;
  padding: 3rem;
  font-family: 'Nunito', sans-serif;
  background: rgb(4, 4, 114);
  background-size: 2500px 10200px;
}

h1 {
  color: rgb(31, 30, 77);
  font-size: 70px;
  font-family: 'Reggae One', cursive;
  text-align: center;
}

h2 {
  color: white;
}

.btn {
  width: 50%;
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
  font-style: bold;
  border: none;
  border-radius: 30px;
}

.btn:hover {
  background-color: #bebebe;
}

.line {
  background-color: rgba(196, 223, 250, 0.928);
  margin: 1px;
  width: 120rem;
  height: 6px;
  align-content: center;
}
.line2 {
  background-color: rgba(196, 223, 250, 0.928);
  margin: 1px;
  width: 20rem;
  height: 3px;
  margin-left: auto;
  margin-right: auto;
}

.li a {
  text-decoration: none;
  padding: 2px 8px;
  position: relative;
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin: 30px 50px;
  color: black;
  margin-bottom: 70px;
}

.li a::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  height: 100%;
  width: 0;
  transition: 0.4s ease-in;
}

.li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100%;
  width: 0;
  transition: 0.4s ease-in;
}

.li a:hover::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  height: 100%;
  width: 50%;
  border-bottom: 1px solid black;
}

.li a:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  transition: 0.4s ease-in;
  border-bottom: 1px solid black;
}

.card {
  border: 3px solid rgba(196, 223, 250, 0.928);
  border-radius: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #1e3a5ccc;
}

.display-card,
.description {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2rem;
  justify-content: space-around;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.display-img {
  background-color: white;
  width: 30rem;
  height: 30rem;
  justify-content: space-around;
  transition: all 0.5s;
  display: block;
  object-fit: cover;
  border-radius: 20px;
}

.display-img:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 8px 16px 0 rgba(3, 6, 53, 0.715), 0 12px 40px 0 rgba(3, 6, 53, 0.715);
}

.display-title,
.display-price {
  color: rgba(196, 223, 250, 0.928);
  font-family: 'Diphylleia', serif;
}

.display-title {
  font-size: 2rem;
  text-decoration: underline;
}

@media screen and (max-width: 600px) {
  .logo {
    background-image: url(https://upload.wikimedia.org/wikipedia/en/b/b1/Honkai-Star-Rail.png);
    background-size: 275px 225px;
    background-position: center;
    width: 20rem;
    height: 10rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    padding-bottom: 20px;
    align-self: center;
  }
  h1 {
    color: rgb(31, 30, 77);
    font-size: 40px;
    font-family: 'Reggae One', cursive;
    text-align: center;
  }

  .line {
    background-color: rgba(196, 223, 250, 0.928);
    margin: 1px;
    width: 20rem;
    height: 6px;
    align-content: center;
  }

  .line2 {
    background-color: rgba(196, 223, 250, 0.928);
    margin: 1px;
    width: 18rem;
    height: 3px;
    margin-left: auto;
    margin-right: auto;
  }

  .routers {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    color: black;
  }

  .card {
    border: 3px solid rgba(196, 223, 250, 0.928);
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    background-color: #1e3a5c76;
  }

  .display-card,
  .description {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2rem;
    justify-content: space-around;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .display-img {
    background-color: white;
    width: 18rem;
    height: 18rem;
    justify-content: space-around;
    transition: all 0.5s;
    display: block;
    object-fit: cover;
    border-radius: 10px;
  }

  .display-title {
    font-size: 1.5rem;
    text-decoration: underline;
  }
}
</style>
