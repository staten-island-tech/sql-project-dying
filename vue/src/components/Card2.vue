<script>
export default {
  name: 'RequestCard',
  props: {
    primaryKey: String,
    appointmentTime: String,
    timeCalled: String,
    toDoList: String,
    petType: String,
    petBreed: String,
    petGender: String,
    sitterGender: String
  },
  methods: {
    remove: function () {
      this.$emit('remove', this.primaryKey, this.checkPet(this.petType))
    },
    checkPet: function (petType) {
      if (petType === 'Cat') {
        return 'CatSitters'
      } else if (petType === 'Dog') {
        return 'DogSitters'
      } else {
        console.log('error with checker')
      }
    }
  }
}
</script>

<template>
  <div>
    <h3><slot name="title"></slot></h3>
    <slot name="img"></slot>

    <h4><slot name="price"></slot></h4>
    <slot name="button"> </slot>
  </div>
</template>

<style scoped>
div {
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-wrap: wrap;
  width: 250px;
}
</style>
