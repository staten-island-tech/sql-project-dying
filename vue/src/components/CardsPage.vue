<template>
  <div class="card">
    <h2 class="name">{{ Characters }}</h2>
    <img class="img" :src="img_url" />
  </div>
</template>

<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const Characters = ref(Characters)
const img_url = ref(img_url)

onMounted(() => {
  displayCharacters()
})

async function displayCharacters() {
  try {
    loading.value = true
    const { user } = session.value

    let { data, error, status } = await supabase
      .from('Players')
      .select(`Characters, img_url`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      Characters.value = data.Characters
      img_url.value = data.img_url
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>
