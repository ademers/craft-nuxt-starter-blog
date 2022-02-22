import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@nuxtjs/tailwindcss'],

    meta: {
        link: [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'crossorigin' },
            {
                href: 'https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400&family=Work+Sans:wght@600&display=swap',
                rel: 'stylesheet',
            },
        ],
    },

    publicRuntimeConfig: {
        CRAFTGQL_URL: process.env.CRAFTGQL_URL,
    },
    privateRuntimeConfig: {
        CRAFTGQL_TOKEN: process.env.CRAFTGQL_TOKEN,
    },
})
