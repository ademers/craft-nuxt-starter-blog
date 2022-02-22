<template>
    <!-- Blog entry -->
    <article class="mt-8">
        <h2 class="font-display text-3xl">
            <nuxt-link
                class="text-blue-600"
                :to="{
                    name: 'blog-slug',
                    params: {
                        slug: entry.slug,
                        id: entry.id,
                    },
                }"
            >
                {{ entry.title }}
            </nuxt-link>
        </h2>

        <time class="block pb-4 font-body text-lg text-gray-700" datetime="2022-02-11">{{
            entry.postDate
        }}</time>

        <!-- Redactor rich text field -->
        <div class="font-body text-xl text-gray-800" v-html="entry.summary"></div>

        <p class="pt-2 text-xl">
            <nuxt-link
                class="text-blue-600"
                :to="{
                    name: 'blog-slug',
                    params: {
                        slug: entry.slug,
                        id: entry.id,
                    },
                }"
            >
                Read more &hellip;
            </nuxt-link>
        </p>
    </article>
</template>

<script setup>
const props = defineProps({
    entry: Object,
})
</script>
