<script setup lang="ts">
import type { UiTheMessage } from '#components'
import { baseUrl } from '@nuxt-monorepo/api'

const theMessage = ref<InstanceType<typeof UiTheMessage> | null>()

onMounted(() => {
  console.log('theMessage', theMessage.value)
})

const config = useRuntimeConfig()
</script>

<template>
  <div>
    {{ config.public.apiBase }}
    <UiTheMessage ref="theMessage" />
    api/baseUrl: {{ baseUrl }}
  </div>
</template>
