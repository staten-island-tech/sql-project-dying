<template>
  <div class="container">
    <h2>Login</h2>
    <div class="form">
      <div class="inputsForm">
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <div class="buttons">
        <button @click="login()" class="button">Login</button>
        <button @click="logout()" class="button">Log out</button>
        <button @click="checkSession()" class="button">Session</button>
        <router-link to="/page" class="router">Go to Store</router-link>
      </div>
      <router-link id="create" to="/createacc">Create Account</router-link>
    </div>
    <router-link id="goBack" to="/" class="router">Return To Previous Page</router-link>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(../assets/bg.png);
  height: 1000px;
}

h2 {
  font-size: 40px;
  color: white;
  text-decoration: overline underline;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid #b0c7e4;
  border-radius: 10px;
  background-color: #b0c7e4;
  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.603);
}

.form input {
  width: 250px;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #b0c7e4;
  border-radius: 5px;
}

.buttons,
.inputsForm {
  display: flex;
  justify-content: center;
}

.button {
  color: white;
  background-color: #96a5d5;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
}

.button:hover {
  background-color: #7a98d0;
}

.router {
  color: white;
  background-color: #7a98d0;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  height: 1rem;
}
.router:hover {
  background-color: #5c77d0;
}

#create {
  color: #5c77d0;
  font-weight: 900;
  margin-top: 10px;
  height: 1rem;
}
#create:hover {
  color: #0da3de;
}

#goBack {
  margin-top: 20px;
  border-color: #0da3de;
  color: #0da3de;
  background-color: transparent;
  border-radius: 0px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgb(0, 0, 0), 0 1px 2px rgb(0, 0, 0);
}
#goBack:hover {
  background-color: #96a5d5;
  color: white;
  right: 0px;
  text-decoration: underline;
}
</style>
<!-- https://codepen.io/CINDY-TANG/pen/vYQYVdq -->
