<template>
  <div class="container">
    <h2>Create Account</h2>
    <div class="form">
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div class="buttons">
        <button @click="signUp()" class="button">Sign up</button>
      </div>
      <router-link to="/" class="router">Go back</router-link>
    </div>
  </div>
</template>

<script setup>
import { useSupabaseStore } from '../stores/counter.js'
import { ref } from 'vue'
import { supabase } from '../supa/supabase.js'

const store = useSupabaseStore()

const email = ref('')
const password = ref('')

async function signUp() {
  try {
    await store.signUp(email.value, password.value)
    let {
      data: { users }
    } = await supabase.auth.getUser()

    await supabase.from('users').insert([{ user_id: users.id, email: email }])
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
h2 {
  font-size: 40px;
  color: white;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 1000px;
  width: 1750px;
  background-image: url(../assets/bg.png);
  margin-left: auto;
  margin-right: auto;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #b0c7e4;
  box-shadow: 0px 10px 10px -6px rgba(0, 0, 0, 0.603);
  height: 200px;
}

input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 250px;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #b0c7e4;
  border-radius: 5px;
}

button {
  margin-left: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: white;
  background-color: #96a5d5;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
}

.button:hover {
  background-color: #adadad;
}

.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
