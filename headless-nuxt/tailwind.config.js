module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './layouts/layout.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        // './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {},
        fontFamily: {
            display: ['"Work Sans"', 'sans-serif'],
            body: ['"Quattrocento Sans"', 'serif'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
