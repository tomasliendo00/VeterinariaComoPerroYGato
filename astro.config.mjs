// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tomasliendo00.github.io',
  base: '/VeterinariaComoPerroYGato',
  vite: {
    plugins: [tailwindcss()]
  }
});