<script setup>
import { supabase } from '../lib/supabaseClient.js'
import { ref, onMounted } from 'vue'
import { useSupabaseStore } from '../stores/counter'
const store = useSupabaseStore()
async function getCards() {
  const { data } = await supabase.from('character').select()
  store.characters = data
}

let cartNameArray = []
let cartPriceArray = []
let cartImgArray = []

async function AddCart(x, name, img) {
  console.log(name)
  cartNameArray.push([name])
  cartPriceArray.push([x])
  cartImgArray.push([img])
  store.cartTotal = store.cartTotal + x
  const {
    data: { user }
  } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from('purchases')
    .update({
      character: cartNameArray,
      price: cartPriceArray,
      img: cartImgArray
    })
    .eq('email', user.email)
  console.log(user.email)
  if (error) {
    console.error(error)
  } else {
    console.log('Item added to cart successfully')
  }
}
getCards()
console.log(store.characters)
getCards()
</script>

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

            <router-link :to="{ path: '/cart' }"> CART</router-link>
          </nav>
        </div>
      </div>
    </header>

    <div class="display">
      <div class="window">
        <h2>Total Price: ${{ store.cartTotal }}</h2>
        <div class="line"></div>
      </div>

      <div v-for="character in store.characters" class="card">
        <div class="display-card">
          <img class="display-img" v-bind:src="character.image" />
        </div>
        <div class="line2"></div>
        <div class="description">
          <h3 class="display-title">{{ character.name }}</h3>
          <h4 class="display-price">${{ character.price }}</h4>
          <button class="btn" @click="AddCart(character.price, character.name, character.image)">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

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
