import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [tailwind()],
	vite: {
		plugins: [
			VitePWA({
				includeAssets: [
					'favicon.png',
					'robots.txt',
					'manifest.webmanifest',
					'assets/icons/*.png',
					'assets/icons/*.svg',
					'assets/fonts/Splash-Regular.ttf',
				],
				registerType: 'autoUpdate',
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
			}),
		],
	},
});
