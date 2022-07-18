import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	integrations: [tailwind(), svelte()],
	vite: {
		plugins: [
			VitePWA({
				strategies: 'injectManifest',
				filename: 'sw.ts',
				manifest: {
					short_name: 'AngelNext',
					name: 'AngelNext',
					start_url: '/',
					icons: [
						{
							src: 'favicon.png',
							type: 'image/png',
							sizes: '500x500',
						},
					],
					background_color: '#111827',
					display: 'standalone',
					scope: '/',
					theme_color: '#111827',
					description: 'Portfolio website for AngelNext',
				},
				srcDir: 'src',
				registerType: 'autoUpdate',
			}),
		],
	},
});
