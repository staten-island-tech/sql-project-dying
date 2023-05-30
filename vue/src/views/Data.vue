<template>
  <h1>Characters</h1>
  <div class="container">
    <Card
      v-for="character in character"
      :key="character"
      :name="character.name"
      :vision="character.vision"
      :weapon="character.weapon"
      :description="character.description"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'

const character = ref('')
async function getCard() {
  let res = await fetch('https://api.genshin.dev/characters/all')
  let data = await res.json()
  character.value = data
}
onMounted(() => {
  getCard()
})
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

h1 {
  text-align: center;
}
</style>
