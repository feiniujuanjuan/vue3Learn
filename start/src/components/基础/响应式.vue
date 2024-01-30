<script setup>
import { ref } from 'vue'
import { reactive } from 'vue'
// const count = ref(0)
// function incre() {
//   count.value++
// }
const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)
</script>

<template>
  <!-- {{ count }}
  <button @click="count++">+</button> -->
</template>

<style scoped></style>