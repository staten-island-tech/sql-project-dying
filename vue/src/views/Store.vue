<script setup>
import { nextTick, ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { RouterLink, RouterView } from 'vue-router'
import character from '../components/Card2.vue'
import { Store } from '../stores/counter'
import Cart from '../components/Cart.vue'

let users = []
const characters = ref([])
const store = Store()
let total = ref(store.carttotal)
let showcart = ref(true)

async function getCharacters() {
  const { data } = await supabase.from('characters').select()
  characters.value = data
  console.log(characters.value)
}
async function getUsers() {
  const { data } = await supabase.from('users').select()
  users.value = data
}

async function update() {
  store.update2 = !store.update2
  await nextTick()
  store.update2 = !store.update2
}

async function clearCart() {
  const { error } = await supabase.from('users').update({ incart: [] }).eq('id', store.currentid)
  updatePrices()
}

async function updateUsers(name, price, pic) {
  getUsers()
  update()
  store.cart.splice(0, 0, { name: name, price: price, pic: pic })
  const { error } = await supabase
    .from('users')
    .update({ incart: store.cart })
    .eq('id', store.currentid)
  let sum = 0
  store.cart.forEach((element) => (sum = element.price + sum))
  store.carttotal = sum
  total.value = store.carttotal
  const { error2 } = await supabase
    .from('users')
    .update({ carttotal: store.carttotal })
    .eq('id', store.currentid)
}

getUsers()
getCharacters()
</script>

<template>
  <div class="wrap">
    <h3 v-if="store.update">Total Cart Value: {{ store.carttotal }}</h3>
    <button v-if="showcart" @click="showcart = !showcart">Show Cart</button>
    <button v-else @click="showcart = !showcart">Close Cart</button>
    <Cart></Cart>
    <div v-for="character in characters" id="susdiv1" :key="character.id" class="comp">
      <h3>{{ character.name }}</h3>
      <img v-bind:src="character.image" />
      <h4>{{ character.price }} dollars</h4>
      <button @click="updateUsers(character.name, character.price, character.image)">Buy</button>
    </div>
  </div>
</template>

<style scoped>
.comp {
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  width: 250px;
}
.wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 30px;
  justify-content: space-around;
}

img {
  height: 250px;
  width: 200px;
}

h3 {
  text-align: center;
  font-size: 30px;
}
p {
  text-align: center;
}
</style>
