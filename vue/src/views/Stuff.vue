<!-- <script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
// import { RouterLink, RouterView, useRouter } from 'vue-router'
import { Store } from '../stores/counter'

let errorMsg = ref(null)
let users = []
const characters = ref([])
let warn = ref(0)
const store = Store()

async function getCharacters() {
  const { data } = await supabase.from('characters').select()
  characters.value = data
}
getCharacters()

async function getUsers() {
  const { data } = await supabase.from('users').select()
  users.value = data
}

async function login() {
  getUsers()
  let temp = ref(-2)
  let found = true
  let user = ref(document.getElementById('user').value)
  for (let i = 0; i < users.value.length; i++ && found == true) {
    if (users.value[i].username == user.value) {
      temp.value = i
      found = false
    }
  }

  if (temp.value > -1) {
    store.userarri = temp.value
    store.carttotal = users.value[store.userarri].carttotal
    store.currentid = users.value[store.userarri].id
    store.cart = []
    let a = []
    if (users.value[store.userarri].incart.length > 0)
      for (let i = 0; i < users.value[store.userarri].incart.length; i++) {
        users.value[store.userarri].incart[i].replace('/', '')
        a.push(JSON.parse(users.value[store.userarri].incart[i]))
      }
    store.cart = a
    warn.value = 3
  } else {
    console.log('error')
  }
}

async function login_2() {
  let user = ref(document.getElementById('username').value)
  let pass = ref(document.getElementById('password').value)
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      Username: user.value,
      Password: pass.value
    })
    if (error) throw error
    login()
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`
    setTimeout(() => {
      errorMsg.value = null
    }, 5000)
  }
}

async function logout() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log(error)
  } else {
    console.log('Sign out success')
  }
}

getUsers()
getUsers()
</script>

<template>
  <div id="log">
    <h1>Login</h1>
    <h2>Username:</h2>
    <input type="text" id="username" />
    <h2>Password:</h2>
    <input type="text" id="password" class="password" />

    <button @click="login_2">Login</button>
    <button @click="logout">Logout</button>
    <nav v-if="warn == 0">
      <RouterLink to="/create">Create Account</RouterLink>
    </nav>
    <p v-else-if="warn == 1">Wrong Password. Try Again.</p>
    <nav v-else-if="warn == 2">
      <RouterLink to="/create">User not found, Create an account above.</RouterLink>
    </nav>
    <nav v-else-if="warn == 3">
      <RouterLink to="/store">Signed in Successfully! Click here to go to store.</RouterLink>
    </nav>
    <p v-else></p>
    <p>{{ errorMsg }}</p>
  </div>
</template>

<style lang="scss" scoped></style> -->
<template>
  <div></div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
