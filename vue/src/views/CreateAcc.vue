<!-- <template>
  <div id="log">
    <h1>Create an Account.</h1>
    <h2>Username:</h2>
    <input type="text" id="username" />
    <h2>Password:</h2>
    <input type="text" id="password" class="pword" />
    <h2>Confirm password:</h2>
    <input type="text" id="confirm" class="pword" />
    <button @click="userInsert">Create</button>
    <nav v-if="warn == 0">
      <RouterLink to="/">Back to Login</RouterLink>
    </nav>
    <p v-else-if="warn == 1">Username taken already</p>
    <nav v-else-if="warn == 2">
      <RouterLink to="/">Account made Succesfully, Click to Login</RouterLink>
    </nav>
    <p v-else-if="warn == 3">Passwords Aren't the Same</p>
    <p v-else></p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { RouterLink, RouterView } from 'vue-router'

let users = []
let warn = ref(0)

async function getUsers() {
  const { data } = await supabase.from('users').select()
  users.value = data
}

async function userInsert() {
  getUsers()
  let user = document.getElementById('username').value
  let pass = document.getElementById('password').value
  let confirm = document.getElementById('confirm').value
  let create = true

  if (pass == confirm) {
    for (let i = 0; i < users.value.length; i++) {
      if (users.value[i].username == user) {
        console.log('good')
        warn.value = 1
        create = false
      }
    }
    if (create) {
      const { error } = await supabase.from('users').insert({
        Username: `${user}`,
        cart: 0,
        incart: []
      })
      warn.value = 2
      const { data, error2 } = await supabase.auth.admin.createUser({
        Username: `${user}`,
        Password: `${pass}`,
        options: {
          data: {
            cart: 0,
            incart: []
          }
        }
      })
    } else {
      warn.value = 3
    }
  }
}
getUsers()
</script>

<style lang="scss" scoped></style> -->
<template>
  <div></div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
