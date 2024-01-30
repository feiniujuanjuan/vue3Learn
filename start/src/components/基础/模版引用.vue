<script setup>
import { onMounted, ref } from 'vue'
const input = ref(null)
const list = ref([1, 2, 3])
const refLists = ref([])
onMounted(() => {
  input.value.focus()
  console.log(refLists.value)
})
</script>

<template>
  <input ref="input"/>
  <li v-for="item in list" ref="refLists">{{ item }}</li>
  <input :ref="(el) => {console.log(el)}"/>
</template>

<style scoped></style>