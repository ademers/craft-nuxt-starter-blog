<template>
    <div class="mx-auto max-w-3xl px-4">
        <h1 class="my-4 font-display text-5xl font-semibold text-black">Blog</h1>

        <!-- Blog entries -->
        <BlogEntrySummary v-for="entry in entries" :key="entry.id" :entry="entry" />
    </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const { data: entries } = await useFetch(config.CRAFTGQL_URL, {
    method: 'POST',
    body: {
        query: `
            query {
                entries(section: "blog") {
                  id
                  slug
                  title
                  url
                  postDate @formatDateTime(format: "d M Y")
                  ... on blog_blog_Entry {
                      summary
                  }
                }
            }
        `,
    },

    headers: {
        // Use private schema
        Authorization: 'Bearer ' + 'TaJhMYmXgcxhK_XrEDKC-POVCp14hOyy',
        // FIXME: unpredictable results (?)
        // Authorization: `Bearer ${config.CRAFTGQL_TOKEN}`,
        'Content-Type': 'application/json',
    },

    // Q: Is there a way to avoid this?
    transform: (data) => data.data.entries,
})

useMeta({
    title: 'Blog | Craft Nuxt 3 Starter Blog',
    meta: {
        description: 'Blog Section meta description',
    },
})
</script>
