<script setup>
import { ref } from 'vue'
defineProps(['title'])
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style scoped></style>