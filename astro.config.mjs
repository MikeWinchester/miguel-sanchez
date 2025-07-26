import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import typography from '@tailwindcss/typography';
import compress from 'astro-compress';

export default defineConfig({
  vite: {
    plugins: [tailwind()]
  },
  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: false,
      svg: false,
      logger: 1
    }),
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
