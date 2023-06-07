<template>
  <div class="container">
    <h2>Create Account</h2>
    <div class="form">
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div class="buttons">
        <button @click="signUp()" class="button">Sign up</button>
      </div>
    </div>
    <router-link to="/" class="router">Go back</router-link>
  </div>
</template>

<script setup>
import { SupabaseStore } from '../stores/counter.js'
import { ref } from 'vue'

const store = SupabaseStore()

const email = ref('')
const password = ref('')

async function signUp() {
  try {
    await store.signUp(email.value, password.value)
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

input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
}

button {
  margin-left: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
