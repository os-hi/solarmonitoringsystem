<script setup lang="ts">
    const props = defineProps({
        name: String,
        dataInfo: Number
    })
</script>

<template>
    <div class="w-[550px] h-[400px] bg-white rounded-3xl shadow-sm flex justify-center items-center text-center font-bold text-2xl text-[#4D3287]">
        <p v-if="props.name">{{ props.name }}</p>
        <h1 v-if="props.dataInfo" class="text-5xl"> {{ props.dataInfo }}</h1>
        <h1 v-else class="w-full h-full flex justify-center items-center">NO DATA</h1>
    </div>
</template>