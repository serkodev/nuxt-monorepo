import type { Directive } from 'vue'

export default {
  created: (el) => {
    console.log('v-test', el)
  },
} as Directive
