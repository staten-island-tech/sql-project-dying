<template>
  <RouterView />
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import { supabase } from './lib/supabaseClient'
import { useAuthStore } from './stores/ah'

import { RouterLink, RouterView } from 'vue-router'

const component = {
  methods: {
    logOut: function () {
      useAuthStore().clearUser()
      router.push('login')
      this.loggedin = false
    },
    login: function () {
      this.loggedin = true
    }
  },
  data() {
    return {
      loggedin: false
    }
  }
}
</script>
<style scoped></style>
