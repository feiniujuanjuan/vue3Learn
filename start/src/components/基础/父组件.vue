<script setup>
import { onMounted, ref } from 'vue'
import child from './子组件.vue'
import props from './props.vue';
import emit from './emit.vue';
const count = ref(0)
// const childRef = ref(null)
// onMounted(() => {
//   console.log(childRef.value.a)
//   console.log(childRef.value.c)
// })
</script>

<template>
  <!-- <child ref="childRef"/> -->
  <props title="你好" />
  <div>{{ count }}</div>
  <emit @add="count++"></emit>
</template>

<style scoped></style>