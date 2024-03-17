<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col justify-center items-center gap-5 w-full lg:w-3/6 xl:w-5/12 h-full bg-white">
        <h1 class="text-3xl font-bold text-[#4D3287]">User Register</h1>
        <form class="w-3/4 flex flex-col gap-2">
            <label for="username">Solar Key</label>
            <input type="text" id="solarKey" placeholder="solarKey">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="username">
            <label for="password">Password</label>
            <input type="text" id="password" placeholder="password">
            <label for="password">Confirm Password</label>
            <input type="text" id="confirmPassword" placeholder="confirm password">
            <button type="submit" class=" text-white py-3 px-4 rounded-xl bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 hover:from-rose-500 hover:via-fuchsia-600 hover:to-indigo-600">Register</button>
        </form>
        <h1>Already have an account? <RouterLink  to="/" class="text-[#4D3287] font-semibold">Login</RouterLink></h1>
    </div>
</template>
<style scoped>
input{
    padding: 12px;
    background: #f8f4fd;
    border-radius: 15px;
}
label{
    color: #4D3287;
}
</style>