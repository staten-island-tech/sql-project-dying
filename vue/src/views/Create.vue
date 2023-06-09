<template>
  <div class="container">
    <h1>Create Account</h1>
    <div class="form">
      <div class="login-box">
        <div class="user-box">
          <input class="user-box-input" required type="text" v-model="email" />
          <label class="user-box-label">Email</label>
        </div>
        <div class="user-box">
          <input class="user-box-input" required type="password" v-model="password" />
          <label class="user-box-label">Password</label>
        </div>
        <div class="buttons">
          <button @click="signUp()" class="button">Sign up</button>
          <router-link to="/store" class="router">Go to Store</router-link>
          <router-link to="/login" class="router">Go to Login</router-link>
        </div>
        <router-link id="goBack" to="/" class="router">Return To Home Page</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { pinia } from '../stores/ah'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const Ssession = pinia()
const email = ref('')
const password = ref('')
const router = useRouter()

const signUp = async () => {
  try {
    const { data: usersData, error: usersError } = await supabase
      .from('users')
      .select()
      .eq('email', email.value)

    if (usersError) {
      throw new Error(usersError.message)
    }

    if (usersData && usersData.length > 0) {
      alert('Email already registered.')
    } else {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: email.value,
        password: password.value
      })

      if (signUpError) {
        throw new Error(signUpError.message)
      } else {
        alert('Please check your email for confirmation.')
      }
    }
  } catch (error) {
    console.error(error)
    alert('An error occurred during signup. Please try again later.')
  }
}

onMounted(() => {
  if (Ssession.session !== null) {
    router.push(`/store/${Ssession.session.user.id}`)
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(../assets/bg.png);
  height: 1000px;
  background-position: center;
}

h1 {
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
  position: relative;
  top: 50%;
  left: 50%;
  width: 450px;
  padding: 20px;
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
.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
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
  margin-right: 10px;
}
.router:hover {
  background-color: #5c77d0;
}

#goBack {
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
