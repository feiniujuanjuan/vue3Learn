<script setup>
import { ref } from 'vue'
import Child from './子组件.vue'
const msg = ref('hello')
</script>

<template>
  <Child v-model:msg.capitalize="msg" />
</template>

<style scoped></style>