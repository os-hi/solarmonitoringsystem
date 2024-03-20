<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="w-screen h-screen flex flex-col gap-4 justify-center items-center">
        <p class="text-5xl font-bold text-gray-500">404 NOT FOUND</p>
        <p>Go back to <RouterLink to="/" class="text-[#4D3287] font-bold">Homepage</RouterLink></p>
    </div>
</template>