<script setup>
import { supabase } from '../lib/supabaseClient.js'
import { ref, onMounted } from 'vue'
import { useSupabaseStore } from '../stores/counter'
const store = useSupabaseStore()
async function getCards() {
  const { data } = await supabase.from('character').select()
  store.characters = data
}

async function AddCart(x) {
  store.cartTotal = store.cartTotal + x
}
getCards()
console.log(store.characters)
getCards()
</script>

<template>
  <div>
    <header>
      <div class="container">
        <div class="logo">
          <h2>Honkai</h2>
        </div>

        <div class="li">
          <nav>
            <RouterLink to="/login">Login</RouterLink>

            <RouterLink to="/">Home</RouterLink>

            <RouterLink to="/store">Store</RouterLink>
          </nav>
        </div>
      </div>
    </header>

    <div class="window">
      <h1>${{ store.cartTotal }}</h1>
      <div class="line"></div>
    </div>

    <div class="display">
      <div v-for="character in store.characters">
        <div class="display-card"><img class="display-img" v-bind:src="character.images" /></div>

        <div class="description">
          <h3 class="display-title">{{ character.names }}</h3>
          <h4 class="display-price">${{ character.prices }}</h4>
          <button class="btn" @click="AddCart(character.prices)">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Nunito', sans-serif;
}
.window {
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Nunito', sans-serif;
}

.display {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  height: fit-content;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  box-sizing: border-box;
  align-items: center;
  background-color: #56565636;
  border-radius: 30px;
  padding: 3rem;
  font-family: 'Nunito', sans-serif;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
  font-style: bold;
  border: none;
  border-radius: 30px;

  font-family: 'Nunito', sans-serif;
}

.btn:hover {
  background-color: #bebebe;
}

.line {
  background-color: black;
  margin: 1px;
  width: 60rem;
  height: 6px;
  align-content: center;
}

.logo {
  padding-top: 10px;
  padding-bottom: 20px;
  align-self: center;
}
.li a {
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  position: relative;
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin: 20px 30px;
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
  border-bottom: 1px solid #000;
}

.li a:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  transition: 0.4s ease-in;
  border-bottom: 1px solid #000;
}

.active-link {
  font-weight: 700;
}

.display-card,
.description {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 2rem;
  justify-content: space-around;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}
.display-img {
  width: 19.4rem;
  height: 30rem;
  justify-content: space-around;
  border-radius: 30px;
  transition: all 0.2s;
}
.display-title,
.display-release {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: center;
}

.display-img:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
}
</style>
