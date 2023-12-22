import { defineConfig, transformerDirectives } from 'unocss';
import uiPreset from './preset';

export default defineConfig({
  presets: [uiPreset],
  transformers: [transformerDirectives()]
});
