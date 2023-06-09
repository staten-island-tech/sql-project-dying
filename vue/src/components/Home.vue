<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1>{{ msg }}</h1>
    <h3>Honkai Star Rail</h3>
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

.greetings {
  height: 10em;
  position: relative;
}
</style>
