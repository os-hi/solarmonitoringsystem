<script setup lang="ts">
    import {ref} from 'vue';

    const name = ref("Temperature")
    const dataInfo = ref(69)


</script>

<template>
    <form action="">

    </form>
    <div class="w-full h-full py-20 px-24 flex justify-center items-center flex-wrap gap-12">
        <div class="w-[450px] h-[300px] bg-white rounded-3xl p-4 shadow-sm font-bold text-2xl text-[#4D3287]">
            <p v-if="name" class="font-light">{{ name }}</p>
            <h1 v-if="dataInfo" class=" w-full h-5/6 flex justify-center items-center text-8xl"> {{ dataInfo }}%</h1>
            <h1 v-else class="w-full h-full flex justify-center items-center">NO DATA</h1>
        </div>
        <div class="w-[450px] h-[300px] bg-white rounded-3xl p-4 shadow-sm font-bold text-2xl text-[#4D3287]">
            <p v-if="name" class="font-light">{{ name }}</p>
            <h1 v-if="dataInfo" class=" w-full h-5/6 flex justify-center items-center text-8xl"> {{ dataInfo }}%</h1>
            <h1 v-else class="w-full h-full flex justify-center items-center">NO DATA</h1>
        </div>
        <div class="w-[450px] h-[300px] bg-white rounded-3xl p-4 shadow-sm font-bold text-2xl text-[#4D3287]">
            <p v-if="name" class="font-light">{{ name }}</p>
            <h1 v-if="dataInfo" class=" w-full h-5/6 flex justify-center items-center text-8xl"> {{ dataInfo }}%</h1>
            <h1 v-else class="w-full h-full flex justify-center items-center">NO DATA</h1>
        </div>
        <div class="w-[550px] h-[400px] bg-white rounded-3xl shadow-sm p-4 font-bold text-2xl text-[#4D3287]">
            <p v-if="name" class="font-light">{{ name }}</p>
            <h1 v-if="dataInfo" class=" w-full h-5/6 flex justify-center items-center text-9xl"> {{ dataInfo }}%</h1>
            <h1 v-else class="w-full h-full flex justify-center items-center">NO DATA</h1>
        </div>
        <div class="w-[550px] h-[400px] bg-white rounded-3xl p-4 shadow-sm font-bold text-2xl text-[#4D3287]">
            <p v-if="name" class="font-light">{{ name }}</p>
            <h1 v-if="dataInfo" class=" w-full h-5/6 flex justify-center items-center text-9xl"> {{ dataInfo }}%</h1>
            <h1 v-else class="w-full h-full flex justify-center items-center">NO DATA</h1>
        </div>
    </div>
</template>