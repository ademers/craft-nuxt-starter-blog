<template>
    <article class="prose prose-xl mx-auto max-w-3xl px-4">
        <h1 class="my-4 font-display text-5xl text-black">{{ entry.title }}</h1>

        <span class="block pb-4 text-lg">{{ entry.postDate }}</span>

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
    </article>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()

const { data: entry } = await useFetch(config.CRAFTGQL_URL, {
    method: 'POST',
    body: {
        query: `
            query {
                entry(section: "blog", slug: "${route.params.slug}") {
                    id
                    slug
                    title
                    sectionHandle
                    postDate @formatDateTime(format: "d M Y")
                    postDateAlt: postDate @formatDateTime(format: "Y-m-d")
                    url
                    ... on blog_blog_Entry {
                        summary
                      bodyContent {
                        ... on bodyContent_richText_BlockType {
                            id
                            typeHandle
                            richText
                        }
                        ... on bodyContent_quote_BlockType {
                            id
                            typeHandle
                            style
                            quote
                            attribution
                        }
                      }
                    }
                }
            }
        `,
    },

    headers: {
        // Use private schema
        Authorization: 'Bearer ' + 'TaJhMYmXgcxhK_XrEDKC-POVCp14hOyy',
        // FIXME: causes errors ??
        // Authorization: `Bearer ${config.CRAFTGQL_TOKEN}`,
        'Content-Type': 'application/json',
    },

    // This was the missing piece!!
    transform: (data) => data.data.entry,
})

useMeta({
    title: `${entry.value.title} | ${entry.value.sectionHandle} | Craft Nuxt 3 Starter Blog`,
    meta: {
        // FIXME: Generates <p></p> tags because 'summary' is a rich text field.
        description: entry.value.summary,
    },
})
</script>
