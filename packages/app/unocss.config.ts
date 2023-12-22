import { defineConfig, transformerDirectives } from 'unocss';
import uiPreset from '@nuxt-monorepo/ui/preset';

export default defineConfig({
  presets: [uiPreset],
  transformers: [transformerDirectives()]
});
