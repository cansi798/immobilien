// @ts-check
import { defineConfig } from 'astro/config';

// GitHub-Project-Pages: Vorschau unter https://cansi798.github.io/immobilien/
// Bei Umzug auf die eigene Domain: site anpassen und base auf '/' setzen.
export default defineConfig({
  site: 'https://cansi798.github.io',
  base: '/immobilien',
  build: { format: 'directory' },
  trailingSlash: 'ignore',
  compressHTML: true,
});
