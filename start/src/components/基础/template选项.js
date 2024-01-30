import { ref } from 'vue'
import childList from './子组件.vue'
export default {
  components: {
    childList
  },
  setup() {
    const count = ref(0)
    return {
      count,
      incre() {
        count.value++
      },
      decre() {
        count.value--
      },
      reset() {
        count.value = 0
      }
    }
  },
  template: `
    <div>
      <button @click="incre">+</button>
      <button @click="decre">-</button>
      <button @click="reset">reset</button>
      {{ count }}
      <child-list></child-list>
    </div>
  `,
}