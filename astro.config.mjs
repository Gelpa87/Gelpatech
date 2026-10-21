// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pubblicato su GitHub Pages: https://gelpa87.github.io/Gelpatech/
// Con un dominio proprio: site = 'https://dominio.it' e base = '/'.
export default defineConfig({
  site: 'https://gelpa87.github.io',
  base: '/Gelpatech',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
