<template>
  <div class="container">
    <h2>Login</h2>
<div class="form">
    <div class="login-box">
        <div class="user-box">
            <input class="user-box-input" type="text" required>
            <label class="user-box-label">Email</label>
        </div>
        <div class="user-box">
            <input class="user-box-input" type="password" required>
            <label class="user-box-label">Password</label>
        </div>
      <div class="buttons">
        <button @click="login()" class="button">Login</button>
        <button @click="logout()" class="button">Log out</button>
        <button @click="checkSession()" class="button">Session</button>
        <router-link to="/page" class="router">Go to Store</router-link>
      </div>
      <router-link id="create" to="/createacc">Create Account</router-link>
    </div>
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
  margin-top: 95px;
}

.form input {
  width: 250px;
  height: 20px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #b0c7e4;
  border-radius: 5px;
}

.login-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #1e3a5c76;
  border-radius: 10px;
  background-color: #1e3a5c76;
  box-shadow: 0px 15px 20px 0px rgb(0, 0, 0);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  padding: 30px;
  transform: translate(-50%, -50%);
}
.user-box {
    position: relative;
}
.user-box-input {
    width: 100%;
    padding: 10px 0;
    font-size: 14px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
}
.user-box-label {
    position: absolute;
    top: 13px;
    left: 20px;
    padding: 10px 0;
    font-size: 15px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
}
.login-box .user-box input:focus~label,
.login-box .user-box input:valid~label {
    top: -20px;
    left: 0;
    color: #8ab0df;
    font-size: 12px;
}

.buttons {
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
  margin-top: 280px;
  border-color: #0da3de;
  color: #0da3de;
  background-color: #1e3a5c76;
  border-radius: 0px;
  font-weight: 900;
  letter-spacing: 1px;
  box-shadow: 0 1px 3px rgb(0, 0, 0), 0 1px 2px rgb(0, 0, 0);
}
#goBack:hover {
  background-color: #1e3a5c;
  color: white;
  right: 0px;
  text-decoration: underline;
}
</style>
