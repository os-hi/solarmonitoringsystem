<script setup lang="ts">
    const props = defineProps({
        name: String,
        dataInfo: Number
    })
</script>

<template>
    <div class="w-[450px] h-[300px] bg-white rounded-3xl p-4 shadow-sm font-bold text-2xl text-[#4D3287]">
        <p v-if="props.name" class="font-light">{{ props.name }}</p>
        <h1 v-if="props.dataInfo" class=" w-full h-5/6 flex justify-center items-center text-8xl"> {{ props.dataInfo }}%</h1>
        <slot v-else>NO DATA</slot>
    </div>
</template>