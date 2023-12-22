import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  alias: { '~ui': resolve('./') },
  components: [
    { path: '~ui/components', prefix: 'Ui' }
  ],
})
