<script setup lang="ts">
import type { UiTheMessage } from '#components'

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
    
    <div class="bg-ui">bg-ui</div>
    <div class="bg-app">bg-app</div>
  </div>
</template>
