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
  integrations: [mdx(), sitemap(), tailwind()]
});