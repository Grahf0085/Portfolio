// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Define the base for GitHub Pages
export default defineConfig({
  base: '/Portfolio/', // GitHub repository name as base
  integrations: [react()],
});
