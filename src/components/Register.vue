<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col justify-center items-center gap-5 w-5/12 h-full bg-white">
        <h1 class="text-3xl font-bold text-[#4D3287]">User Login</h1>
        <form class="w-3/4 flex flex-col gap-2">
            <label for="username">Solar Key</label>
            <input type="text" id="solarKey" placeholder="solarKey">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="username">
            <label for="password">Password</label>
            <input type="text" id="password" placeholder="password">
            <label for="showPassword">Show Password
                <input type="checkbox" name="showPassword" id="showPassword">
            </label>
            <button type="submit" class=" text-white py-3 px-4 rounded-xl">Login</button>
        </form>
        <h1>Already have an account? <a href="/login" class="text-[#4D3287] font-semibold">Login</a></h1>
    </div>
</template>
<style scoped>
input{
    padding: 12px;
    background: #E5D6FF;
    border-radius: 15px;
}
label{
    color: #4D3287;
}
button{
    background-image: linear-gradient(to left top, #e753ff, #cd52ef, #b450dd, #9d4ccb, #8748b9);
}
</style>