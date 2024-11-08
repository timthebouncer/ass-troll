// @ts-check
import { defineConfig } from 'astro/config';
import unocss from "@unocss/astro";
import presetWind from "@unocss/preset-wind";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    unocss({
      presets: [
        presetWind(),
        /* more presets */
      ],
      safelist: [
        /* this you can use to exclude utilities from purge */
      ],
    }),
  ],
});
