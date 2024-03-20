<script setup lang="ts">
    import {useDatabaseList } from 'vuefire'
    import { ref as dbRef } from 'firebase/database'
    import {db} from '../database/firebase'
    import Card from './Card.vue';
    import Error from './Error.vue';
    const solarData = useDatabaseList<{id:string, $value:number}>(dbRef(db, 'user1'))
    

    console.log(solarData)
</script>

<template>
    <!-- <pre>
        {{JSON.stringify(solarData, null, 2)}}
    </pre> -->
    <!-- <div v-for="data in solarData">
        <div>{{ data.$value }}</div>
    </div> -->
    <div class="w-full h-full py-10 px-12 xl:py-20 xl:px-24 flex justify-center items-center flex-wrap gap-12">
        <Card v-if="solarData" v-for="data in solarData" :name="data.id" :dataInfo="data.$value"/>
        <Error v-else/>
        <!-- <div class="w-[450px] h-[300px] bg-white rounded-3xl p-4 shadow-sm font-bold text-2xl text-[#4D3287]">
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
        </div> -->
    </div>
</template>