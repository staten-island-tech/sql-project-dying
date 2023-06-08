<template>
  <div class="home">
    <h1>Honkai</h1>
    <div class="buttons">
      <router-link to="/login" class="router">Go to Login</router-link>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../supa/supabase.js'
</script>

<style scoped>
h1 {
  font-size: 50px;
}
.home {
  text-align: center;
}

button {
  color: white;
  background-color: #adadad;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
}
.router {
  color: white;
  background-color: #b0c7e4;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
}
.router:hover {
  background-color: #adaadd;
}

.button {
  color: white;
  background-color: #b0c7e4;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  margin-left: 10px;
}

.button:hover {
  background-color: #adaadd;
}
</style>
