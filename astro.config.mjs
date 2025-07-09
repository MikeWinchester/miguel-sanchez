import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import typography from '@tailwindcss/typography';

export default defineConfig({
  vite: {
    plugins: [tailwind()]
  },
  integrations: [
    tailwind({
      config:{
        plugins: [typography]
      }
    }),
    mdx(),
    sitemap()
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    },
    site: "https://miguel-sanchez.pages.dev"
  }
});
