<template>
  <div class="container">
    <h2>Login</h2>
    <div class="form">
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div class="buttons">
        <button @click="login()" class="button">Login</button>
        <button @click="logout()" class="button">Log out</button>
        <button @click="checkSession()" class="button">Session</button>
        <router-link to="/page" class="router">Go to Store</router-link>
      </div>
      <router-link to="/signin">Create Account</router-link>
    </div>
    <router-link to="/" class="router">Go back</router-link>
    <div id="error"></div>
  </div>
</template>

<script setup>
import { SupabaseStore } from '../stores/counter.js'
import { ref } from 'vue'

const store = SupabaseStore()
const error = ref('')
const email = ref('')
const password = ref('')

async function login() {
  try {
    await store.login(email.value, password.value)
  } catch (error) {
    console.log(error)
    document.getElementById('error').innerHTML = error
  }
}

async function logout() {
  try {
    await store.logout()
  } catch (error) {
    console.log(error)
  }
}

async function checkSession() {
  try {
    await store.checkSession()
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
h2 {
  font-size: 40px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid #b0c7e4;
  border-radius: 5px;
  background-color: white;
}

.form input {
  width: 250px;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #b0c7e4;
  border-radius: 5px;
}

.buttons {
  display: flex;
  justify-content: center;
}

.button {
  color: white;
  background-color: #b0c7e4;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
}

.button:hover {
  background-color: #adadad;
}

.router {
  color: white;
  background-color: #adadad;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  height: 1rem;
}
.router:hover {
  background-color: #b0c7e4;
}
</style>
