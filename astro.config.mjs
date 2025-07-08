import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import vue from '@astrojs/vue'

import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [vue(), tailwind(), sitemap()],
    output: 'server',
    adapter: cloudflare({
        platformProxy: {
            enabled: true
        }
    })
})