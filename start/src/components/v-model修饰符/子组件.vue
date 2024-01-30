<script setup>
const [msg, modifiers] = defineModel('msg', {
  set(val) {
    if (modifiers.capitalize) {
      return val.toUpperCase()
    }
    return val
  },
})
console.log(modifiers)
</script>

<template>
  <input v-model="msg"/>
</template>

<style scoped></style>