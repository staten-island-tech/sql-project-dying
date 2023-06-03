<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="ah">
    <h1 class="description">{{ msg }}</h1>
    <h3>Buy Honkai Star Rail Character Cards</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  margin-top: 40px;
}

h3 {
  font-size: 1.2rem;
}
.ah {
  height: 10em;
  position: relative;
}
</style>
