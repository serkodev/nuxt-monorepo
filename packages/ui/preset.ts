import { definePreset, presetUno } from 'unocss';

export default definePreset({
  name: 'ui-layer',
  presets: [
    presetUno(),
  ],
  shortcuts: [{ 'bg-ui': 'bg-sky' }],
});
