// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://parecerdigital.com',
	// React só para o diagrama de etapas (ReactFlow). O resto da página continua estático.
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
	},
});
