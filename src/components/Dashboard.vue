<script setup lang="ts">
    import { useDatabaseList } from 'vuefire'
    import { ref as dbRef } from 'firebase/database'
    import { db } from '../database/firebase'
    import Card from './Card.vue';
    import Error from './Error.vue'; 
    import { ref, watch } from 'vue';
    import { Plus } from 'lucide-vue-next';

    const sensor = ref("Sensor");
    const newDeviceName = ref('');
    const isAddingDevice = ref(false);
    const deviceOptions = ref(["Sensor"]);
    const solarData = useDatabaseList<{id:string, $value:number}>(dbRef(db, sensor.value))

    const addDevice = () => {
        isAddingDevice.value = true;
    };

    const confirmAddDevice = () => {
        if (newDeviceName.value.trim() !== '') {
            deviceOptions.value.push(newDeviceName.value);
            sensor.value = newDeviceName.value; // Set the current selected option to the newly added one
            newDeviceName.value = '';
            isAddingDevice.value = false;
        }
    };

    // Watch for changes in the sensor value
    watch(sensor, (newSensor) => {
        if (!isAddingDevice.value) {
            const newData = useDatabaseList<{ id: string, $value: number }>(dbRef(db, newSensor));
            solarData.value = newData.value;
        }
    });
</script>

<template>
    <div class="w-full h-screen py-10 px-12 xl:py-20 xl:px-24 flex flex-col gap-2">
        <div class="flex flex-col md:flex-row items-center gap-4">
            <select name="Sensor" id="sensors" class="w-[120px] h-[50px] rounded-xl py-2 px-4 text-white font-bold bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500" v-model="sensor">
                <option v-for="option in deviceOptions" :key="option" :value="option" class="bg-[#4D3287] text-lg">{{ option }}</option>
            </select>
            <div class="flex gap-2">
                <button @click="addDevice" class="flex justify-center items-center gap-2 py-2 px-4 rounded-xl hover:shadow-md">Add Device<Plus /></button>
                <div v-if="isAddingDevice" class="flex gap-2">
                    <input class="p-2 rounded-md" type="text" v-model="newDeviceName" placeholder="Enter device name">
                    <button @click="confirmAddDevice" class="px-4 py-2 shadow-md rounded-md">Add</button>
                    <button @click="isAddingDevice = false" class="px-4 py-2 shadow-md rounded-md bg-red-500 text-white">Cancel</button>
                </div>
            </div>
            
        </div>
        <div class="w-full h-full flex justify-center items-center flex-wrap gap-12">
            <Card v-if="solarData" v-for="data in solarData" :key="data.id" :name="data.id" :dataInfo="data.$value"/>
            <Error v-else/>
        </div>
    </div>
</template>
