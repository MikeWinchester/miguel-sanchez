import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwind()]
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    mdx(),
    sitemap()
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
