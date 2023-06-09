<template>
  <RouterView />
</template>
<script setup>
import { onMounted, ref, watch } from 'vue'
import { supabase } from './lib/supabaseClient'
import { pinia } from './stores/ah'

const storedSession = pinia()
const session = ref()

supabase.auth.onAuthStateChange((event, session) => {
  storedSession.session = session
})

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>
<style scoped></style>
