<template>
    <div>
        <TheNavbar />
        <slot />

        <TheFooter />
    </div>
</template>

<script setup>
useMeta({
    htmlAttrs: {
        lang: 'en-US',
    },
    bodyAttrs: {
        class: 'subpixel-antialiased font-body text-gray-900 bg-white',
    },
})
</script>
