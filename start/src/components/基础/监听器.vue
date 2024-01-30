<script setup>
import { ref, reactive, watch } from 'vue';
const x = ref(0)
const obj = reactive({
  count: 0,
  someObj: {
    a: 1
  }
})
watch([x, () => obj.count], ([newX, newY]) => {
  console.log(newX, newY)
})
// watch(() => obj.someObj, 
//   (newObj) => {
//   console.log(newObj)
//   },
//   {
//     deep: true
//   })
</script>

<template>
  {{ obj.count }}{{ x }}
  <button @click="obj.count++;x++;obj.someObj.a++">+</button>
</template>

<style scoped></style>