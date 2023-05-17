<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)

onMounted(() => {
  getCard()
})

async function getCard() {
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
</script>

<template></template>
