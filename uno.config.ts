import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'


export default defineConfig({
  content: {
    filesystem: [
      '**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
      'packages/**/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}',
    ]
  },
  details: true,
  presets: [
    presetUno({
      dark: 'media'
    }),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],

  transformers: [
    transformerAttributifyJsx()
  ],
})
