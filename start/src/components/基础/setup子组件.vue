<script setup>
import { ref } from 'vue'
const a = ref(0)
const b = ref(1)
const c = ref(2)
defineExpose({
  a,
  b
})
</script>

<template>
  {{ a }}{{ b }}
</template>

<style scoped></style>