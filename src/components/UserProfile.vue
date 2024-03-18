<script setup lang="ts">
    import router from '../routes/route';
    import { CircleUserRound, LogOut, LayoutGrid } from 'lucide-vue-next';
    const handleLogout = () => {
    // Redirect to homepage or any other desired route
    router.push("/");
  };
</script>

<template>
    <div class="block lg:hidden backdrop-blur-md shadow-md sticky top-0">
        <div class="w-full h-[70px] px-4 py-4 flex justify-between items-center border-r-2">
            <div class="my-5">
                <CircleUserRound :size="50" :color="'#4D3287'"/>
            </div> 
            <!-- <h1 class="w-[150px] text-[#4D3287] text-xl mb-4 text-center">{{router.currentRoute.value.params.id}}</h1> -->
            <button @click="handleLogout" class="w-[50px] text-[#4D3287] text-xl py-3 px-4 rounded-xl bg-white shadow-md flex justify-center items-center gap-2"><LogOut /></button>
        </div>
    </div>
    <div class="hidden lg:block 2xl:hidden">
        <div class="w-[100px] h-screen flex flex-col items-center border-r-2">
            <div class="my-5">
                <CircleUserRound :size="50" :color="'#4D3287'"/>
            </div> 
            <!-- <h1 class="w-[150px] text-[#4D3287] text-xl mb-4 text-center">{{router.currentRoute.value.params.id}}</h1> -->
            <hr class="w-full">
            <div class="h-full flex flex-col justify-between items-center py-6">
                <button class="w-[50px] mt-6 text-[#4D3287] text-xl py-3 px-4 rounded-xl bg-white shadow-md flex justify-center items-center gap-2"><LayoutGrid /></button>
                <button @click="handleLogout" class="w-[50px] text-[#4D3287] mb-10 text-xl py-3 px-4 rounded-xl bg-white shadow-md flex justify-center items-center gap-2"><LogOut /></button>
            </div>
        </div>
    </div>
    <div class="hidden 2xl:block">
        <div class="w-[250px] h-screen flex flex-col items-center border-r-2">
            <div class="mt-5">
                <CircleUserRound :size="100" :color="'#4D3287'"/>
            </div> 
            <h1 class="w-[150px] text-[#4D3287] text-xl mb-4 text-center">{{router.currentRoute.value.params.id}}</h1>
            <hr class="w-full">
            <div class="h-full flex flex-col justify-between items-center py-6">
                <button class="w-[150px] text-[#4D3287] text-xl py-3 px-4 rounded-xl bg-white shadow-md flex justify-center items-center gap-2"><LayoutGrid />Dashboard</button>
                <button @click="handleLogout" class="w-[150px] text-[#4D3287] mb-10 text-xl py-3 px-4 rounded-xl bg-white shadow-md flex justify-center items-center gap-2"><LogOut />Logout</button>
            </div>
        </div>
    </div>
</template>