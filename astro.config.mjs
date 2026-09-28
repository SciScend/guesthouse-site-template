// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import property from './src/data/property.json' with { type: 'json' };

export default defineConfig({
  site: property.site,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
