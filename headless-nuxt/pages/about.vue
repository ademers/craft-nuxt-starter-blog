<template>
    <div class="prose prose-xl mx-auto max-w-3xl px-4">
        <h1 class="my-4 font-display text-5xl text-black">{{ entry.title }}</h1>

        <div v-for="block in entry.bodyContent" :key="block.id">
            <div
                v-if="block.typeHandle == 'richText' && block.richText"
                v-html="block.richText"
            ></div>

            <blockquote
                v-if="block.typeHandle == 'quote' && block.quote"
                v-html="block.quote"
            ></blockquote>

            <p
                v-if="block.typeHandle == 'quote' && block.attribution"
                v-html="block.attribution"
            ></p>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

console.log(route.params)

// Import query from file located in gql dir
import aboutEntryQueryGql from '@/gql/aboutEntryQuery'

const { data: entry } = await useFetch(config.CRAFTGQL_URL, {
    method: 'POST',
    body: {
        query: aboutEntryQueryGql,
    },

    headers: {
        // Use private schema with token
        Authorization: 'Bearer ' + 'TaJhMYmXgcxhK_XrEDKC-POVCp14hOyy',
        // FIXME: unpredictable results (?)
        // Authorization: `Bearer ${config.CRAFTGQL_TOKEN}`,
        'Content-Type': 'application/json',
    },

    // Q: Is there a way to avoid this?
    transform: (data) => data.data.entry,
})

useMeta({
    title: `${entry.value.title} | Craft Nuxt 3 Starter Blog`,
    meta: {
        description: 'About Section meta description',
    },
})
</script>
