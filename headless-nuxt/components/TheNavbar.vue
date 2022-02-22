<template>
    <nav class="mx-auto max-w-3xl py-4 px-4 text-xl" role="navigation" aria-label="Main">
        <ul class="flex">
            <li class="mr-6" v-for="link in links" :key="link.name">
                <nuxt-link
                    class="text-blue-600"
                    active-class="border-b border-blue-400"
                    :to="link.href"
                >
                    {{ link.text }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const links = [
    {
        name: 'home',
        text: 'Home',
        href: '/',
    },
    {
        name: 'blog',
        text: 'Blog',
        href: '/blog',
    },
    {
        name: 'about',
        text: 'About',
        href: '/about',
    },
]
</script>
