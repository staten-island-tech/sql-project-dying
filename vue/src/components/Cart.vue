<template>
  <div></div>
</template>

<script setup>
import { nextTick, ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import { RouterLink, RouterView } from 'vue-router'
import { Store } from '../stores/counter'
</script>

<style lang="scss" scoped></style>
