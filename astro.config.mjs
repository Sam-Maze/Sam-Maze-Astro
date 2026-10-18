import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sam-maze.com',
  integrations: [mdx(), sitemap()],
  // Prefetch links as they scroll into view. The default "hover" strategy
  // never fires ahead of time on touch devices, so pages load only on tap.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
