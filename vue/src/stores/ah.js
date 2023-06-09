import { defineStore } from 'pinia'

export const pinia = defineStore({
  id: 'userSession',
  state: () => ({
    session: null
  })
})
