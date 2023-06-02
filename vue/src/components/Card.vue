<template>
  <div class="card">
    <h2 class="words">{{ name }}</h2>
    <h3 class="words">{{ vision }}</h3>
    <h3 class="words">{{ weapon }}</h3>
    <h4 class="words">Descriptions: {{ description }}</h4>
    <button class="btn" @click="$emit('addCard')">Add to Profile</button>
  </div>
</template>

<script>
const imgUrl1 = 'https://api.genshin.dev/characters/'
const imgUrl2 = '/card'

export default {
  name: 'Card',
  props: {
    name: String,
    vision: String,
    weapon: String,
    description: String
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 20vw;
  color: rgb(0, 0, 0);
  background-color: rgb(144, 173, 193);
  align-content: center;
}
.words {
  margin-left: 10px;
}
.btn {
  align-self: center;
  width: 6.5rem;
  margin-bottom: 1rem;
}
</style>
