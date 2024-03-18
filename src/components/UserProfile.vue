<script setup lang="ts">
    import router from '../routes/route';

    const handleLogout = () => {
    // Redirect to homepage or any other desired route
    router.push("/");
  };
</script>

<template>
    <div class="w-[250px] h-screen flex flex-col items-center border-r-2">
        <div class="w-[120px] h-[120px] rounded-full bg-white m-3"></div>
        <h1 class="w-[150px] text-[#4D3287] text-xl mb-3 text-center">{{router.currentRoute.value.params.id}}</h1>
        <hr class="w-full">
        <button class="w-[150px] mt-6 text-[#4D3287] text-xl py-3 px-4 rounded-xl bg-white shadow-md">Dashboard</button>
        <button @click="handleLogout" class="w-[150px] mt-96 text-[#4D3287] text-xl py-3 px-4 rounded-xl bg-white shadow-md">Logout</button>
    </div>
</template>