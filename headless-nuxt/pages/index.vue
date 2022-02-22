<template>
    <div class="mx-auto max-w-3xl px-4">
        <h1 class="my-4 font-display text-5xl font-semibold text-black">
            Craft Nuxt 3 Starter Blog
        </h1>

        <!-- Redactor rich text field -->
        <div class="text-xl" v-html="entry.data.home.siteIntroduction"></div>

        <!-- Blog entries with summary -->
        <BlogEntrySummary v-for="entry in entry.data.blogEntries" :key="entry.id" :entry="entry" />
    </div>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

console.log(route.params)

const { data: entry } = await useFetch(config.CRAFTGQL_URL, {
    method: 'POST',
    body: {
        query: `
            query {
                home: entry(section: "home") {
                    id
                    slug
                    title
                    ... on home_home_Entry {
                        siteIntroduction
                    }
                }
                blogEntries: entries(section: "blog") {
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
        // Authorization: `Bearer ${config.API_TOKEN}`,
        'Content-Type': 'application/json',
    },

    // Q: Is there a way to avoid using 'transform'?
    // FIXME: Not working with GraphQL aliases
    // transform: data => data.data.entry
})

useMeta({
    title: 'Craft Nuxt 3 Starter Blog',
    meta: {
        description: 'Craft Nuxt 3 Starter Blog meta description',
    },
})
</script>
