<script setup>
const emit = defineEmits(['add'])
</script>

<template>
  <button @click="emit('add')">add</button>
</template>

<style scoped></style>