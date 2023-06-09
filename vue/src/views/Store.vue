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
    <section class="absHeader"></section>
    
    <header>
      <div class="container">
        <div class="logo">
          <h1>Welcome to the Honkai: Star Rail Character Store!</h1>
        </div>

        <div class="li">
          <nav class="routers">
            <RouterLink to="/login">Login</RouterLink>

            <RouterLink to="/">Home</RouterLink>

            <RouterLink to="/store">Store</RouterLink>
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
          <button class="btn" @click="AddCart(character.price)">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.absHeader {
  background-image: url(https://gamingonphone.com/wp-content/uploads/2023/05/Honkai-star-rail-Astral-Express-train.jpg);
  background-position: center;
  height: 60vh;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Nunito', sans-serif;
}
h1 {
  font-size: 50px;
}
.window {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  font-family: 'Nunito', sans-serif;
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
  width: 90vw;
  height: fit-content;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  box-sizing: border-box;
  align-items: center;
  padding: 3rem;
  font-family: 'Nunito', sans-serif;
  background-color: rgb(31, 30, 77);
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
  font-family: 'Nunito', sans-serif;
}

.btn:hover {
  background-color: #bebebe;
}

.line {
  background-color: rgba(196, 223, 250, 0.928);
  margin: 1px;
  width: 98.5rem;
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

.logo {
  padding-top: 10px;
  padding-bottom: 20px;
  align-self: center;
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
  border-bottom: 1px solid white;
}

.card {
  border: 2px solid #121849d8;
  border-radius: 30px;
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
  font-size: 20px;
}
.display-img {
  background-color: transparent;
  width: 33rem;
  height: 35rem;
  justify-content: space-around;
  transition: all 0.5s;
  display: block;
  object-fit: cover;
  border-radius: 20px;
}

.display-img:hover {
  background-color: #1e3a5c92;
  transform: translateY(-0.5rem);
  box-shadow: 0 8px 16px 0 rgba(3, 6, 53, 0.715), 0 12px 40px 0 rgba(3, 6, 53, 0.715);
}

.display-title, .display-price {
  color: rgba(196, 223, 250, 0.928);
}

.display-title {
  text-decoration: underline;
}
</style>
