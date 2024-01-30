<script>
import { ref } from 'vue'
export default {
  setup() {
    const a = ref(0)
    const b = ref(1)
    const c = ref(2)
    return {
      a,
      b,
      c
    }
  }
}
</script>

<template>
  {{ a }}{{ b }}
</template>

<style scoped></style>