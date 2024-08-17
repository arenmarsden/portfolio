import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import vue from '@astrojs/vue'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [vue(), tailwind()],
	output: 'server',
	adapter: cloudflare({
		platformProxy: {
			enabled: true
		}
	})
})
