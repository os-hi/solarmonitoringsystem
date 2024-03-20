<script setup lang="ts">
    import { Zap, Droplets, Lightbulb, Thermometer } from 'lucide-vue-next'
    const props = defineProps({
        name: String,
        dataInfo: Number
    })
</script>

<template>
    <div class="w-[350px] h-[200px] xl:w-[450px] xl:h-[300px] bg-white rounded-3xl border-2 p-4 shadow-md font-bold text-[#4D3287]">
        <p v-if="props.name" class="font-semibold text-lg xl:text-2xl">{{ props.name }}</p>
        <h1 
            v-if="props.dataInfo && props.name == 'Voltage'"  
            class=" w-full h-5/6 flex justify-center items-center gap-10 text-7xl xl:text-8xl">
            {{ props.dataInfo }}V  
            <Zap :size="90" />
        </h1>
        <h1 
            v-else-if="props.dataInfo && props.name == 'Current'"  
            class=" w-full h-5/6 flex justify-center items-center gap-10 text-7xl xl:text-8xl">
            {{ props.dataInfo }}%  
            <Zap :size="90" />
        </h1>
        <h1 
            v-else-if="props.dataInfo && props.name == 'Humidity'"  
            class=" w-full h-5/6 flex justify-center items-center gap-10 text-7xl xl:text-8xl">
            {{ props.dataInfo }}%  
            <Droplets :size="90" />
        </h1>
        <h1 
            v-else-if="props.dataInfo && props.name == 'Light Intensity'"  
            class=" w-full h-5/6 flex justify-center items-center gap-10 text-7xl xl:text-8xl">
            {{ props.dataInfo }}%  
            <Lightbulb :size="90" />
        </h1>
        <h1 
            v-else-if="props.dataInfo && props.name == 'Temperature'"  
            class=" w-full h-5/6 flex justify-center items-center gap-10 text-7xl xl:text-8xl">
            {{ props.dataInfo }}%  
            <Thermometer :size="90"/>
        </h1>
        <h1 v-else-if="props.dataInfo && props.name !== 'Voltage'" class=" w-full h-5/6 flex justify-center items-center text-7xl xl:text-8xl"> {{ props.dataInfo }}%</h1>
        <h1 v-else class="w-full text-gray-300 h-5/6 text-3xl xl:text-4xl flex justify-center items-center">NO DATA</h1>
    </div>
</template>