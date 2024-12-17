// @ts-check
import { defineConfig } from 'astro/config';
import unocss from "@unocss/astro";
import presetWind from "@unocss/preset-wind";
import node from '@astrojs/node';
import icon from "astro-icon";

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
      ],
      safelist: [
        /* this you can use to exclude utilities from purge */
      ],
    }),
    icon()
  ],
  theme: {
    breakpoints: {
      xxs: `0px`,
      xs: `320px`,
      sm: `480px`,
      smd: `569px`,
      md: `768px`,
      lg: `992px`,
      xl: `1280px`,
      xxl: `1600px`,
    },
  },
});