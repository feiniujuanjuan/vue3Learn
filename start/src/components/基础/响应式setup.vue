
<script>
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    function incre() {
      count.value++
    }
    return {
      count,
      incre
    }
  }
}
</script>

<template>
  {{ count }}
  <button @click="incre">+</button>
</template>

<style scoped>
</style>
