import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  alias: { '~ui': resolve('./') },
  components: [
    { path: '~ui/components', prefix: 'Ui' }
  ],
})
