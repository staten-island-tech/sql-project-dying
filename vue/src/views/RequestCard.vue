<template>
  <div></div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/ah'

// export default {
//   name: 'RequestCard',
//   props: {
//     primaryKey: String,
//     appointmentTime: String,
//     timeCalled: String,
//     toDoList: String,
//     petType: String,
//     petBreed: String,
//     petGender: String,
//     sitterGender: String
//   },
//   methods: {
//     remove: function () {
//       this.$emit('remove', this.primaryKey, this.checkPet(this.petType))
//     },
//     checkPet: function (petType) {
//       if (petType === 'Cat') {
//         return 'CatSitters'
//       } else if (petType === 'Dog') {
//         return 'DogSitters'
//       } else {
//         console.log('error with checker')
//       }
//     }
//   }
// }
</script>

<style lang="scss" scoped></style>
