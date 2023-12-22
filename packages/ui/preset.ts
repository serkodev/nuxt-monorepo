import { definePreset, presetUno } from 'unocss';

export default definePreset({
  name: 'ui-layer',
  presets: [
    presetUno(),
  ],
  theme: {
    colors: {
      'app': 'blue', // get override by packages/app/unocss.config.ts
      'ui': 'green'
    }
  }
});
