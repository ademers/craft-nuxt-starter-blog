<template>
    <footer class="m-auto min-h-[100px] max-w-2xl py-10 text-center text-sm">
        &copy; {{ currentYear }}, Built with
        <a class="text-blue-600" href="https://craftcms.com">Craft CMS</a>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
