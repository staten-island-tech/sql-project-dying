import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

export const useSupabaseStore = defineStore('supabase', () => {
  let cartTotal = ref(0)

  let characters = ref([])
  return {
    characters,
    cartTotal
  }
})
