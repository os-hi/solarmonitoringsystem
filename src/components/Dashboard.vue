<script setup lang="ts">
    import {useDatabaseList } from 'vuefire'
    import { ref as dbRef } from 'firebase/database'
    import {db} from '../database/firebase'
    import Card from './Card.vue';
    import Error from './Error.vue'; 
    import {ref, watch} from 'vue';
    
    const sensor = ref("Sensor")
    const solarData = useDatabaseList<{id:string, $value:number}>(dbRef(db, sensor.value))
    
    // Watch for changes in the sensor value
    watch(sensor, (newSensor) => {
        const newData = useDatabaseList<{ id: string, $value: number }>(dbRef(db, newSensor));
        solarData.value = newData.value;
    });
</script>

<template>
    <div class="w-full h-screen py-10 px-12 xl:py-20 xl:px-24 flex flex-col">
        <select name="Sensor" id="sensors" class="w-[120px] h-[50px] rounded-xl py-2 px-4 text-white font-bold bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500" v-model="sensor">
            <option value="Sensor" class="bg-[#4D3287]">Sensor 1</option>
            <option value="Sensor2" class="bg-[#4D3287]">Sensor 2</option>
        </select>
        <div class="w-full h-full flex justify-center items-center flex-wrap gap-12">
            <Card v-if="solarData" v-for="data in solarData" :name="data.id" :dataInfo="data.$value"/>
            <Error v-else/>
            <!-- <pre>
                {{JSON.stringify(solarData, null, 2)}}
            </pre> -->
            <!-- <div v-for="data in solarData">
                <div>{{ data.$value }}</div>
            </div> -->
        </div>
    </div>
   
</template>