<template>
  <div class="home">
    <h1>Honkai</h1>
    <div class="buttons">
      <router-link to="/login" class="router">Go to Login</router-link>
      <button @click="checksession()" class="button">Check Session</button>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../supa/supabase.js'

async function checksession() {
  const currentuser = await supabase.auth.getSession()
  console.log(currentuser.data.session)
}
</script>

<style scoped>
h1 {
  font-size: 80px;
  color: rgb(198, 225, 252);
  margin-top: 0px;
  margin-bottom: 20px;
}
.home {
  text-align: center;
  background-image: url(../assets/bg.png);
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.router, .button {
  font-size: 15px;
}

.router {
  color: white;
  background-color: #83bbffcd;
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
  background-color: #83bbffcd;
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
