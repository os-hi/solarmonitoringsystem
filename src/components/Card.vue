<script setup lang="ts">
    const props = defineProps({
        name: String,
        dataInfo: Number
    })
</script>

<template>
    <div class="w-[350px] h-[200px] xl:w-[450px] xl:h-[300px] bg-white rounded-3xl p-4 shadow-sm font-bold text-[#4D3287]">
        <p v-if="props.name" class="font-light text-lg xl:text-2xl">{{ props.name }}</p>
        <h1 v-if="props.name == 'voltage'"  class=" w-full h-5/6 flex justify-center items-center text-7xl xl:text-8xl">{{ props.dataInfo }}V</h1>
        <h1 v-else-if="props.dataInfo && props.name !== 'voltage'" class=" w-full h-5/6 flex justify-center items-center text-7xl xl:text-8xl"> {{ props.dataInfo }}%</h1>
        <h1 v-else class="w-full text-gray-300 h-5/6 text-3xl xl:text-4xl flex justify-center items-center">NO DATA</h1>
    </div>
</template>