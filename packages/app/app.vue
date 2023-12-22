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
    
    <!-- overrided by 'app' tailwind config -->
    <div class="bg-app">red bg</div>

    <!-- from 'ui' tailwind config -->
    <div class="bg-ui">green bg</div>
  </div>
</template>
