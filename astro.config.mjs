import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import path from 'path';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sam-maze.com',
  vite: {
    resolve: {
      alias: {
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@components': path.resolve(__dirname, './src/components'),
        // add any other aliases used in your project
      },
    },
  },
  integrations: [mdx(), sitemap(), tailwind()]
});