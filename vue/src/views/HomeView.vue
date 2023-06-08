<template>
  <div class="home">
    <h1>Honkai: Star Rail</h1>
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
  font-size: 80px;
  color: rgb(198, 225, 252);
  margin-top: 0px;
  margin-bottom: 20px;
  margin-top: 250px;
}
.home {
  text-align: center;
  background-image: url(../assets/bg.png);
  height: 1000px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.router {
  color: white;
  background-color: #83bbffcd;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  font-size: 20px;
}
.router:hover {
  background-color: #adaadd;
}
</style>
