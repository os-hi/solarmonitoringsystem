<script setup lang="ts">
    import { users } from '../database/users';
    import {ref} from 'vue';
    import { RouterLink } from 'vue-router';
    import router from '../routes/route';

    const username = ref("");
    const password = ref("");
    const isIncorrect = ref(false);

    const showPassword = ref(false);

   const handleSubmit = () => {
       if (users.some(user => user.username === username.value && user.password === password.value)) {
            isIncorrect.value = false
            router.push(`/dashboard/${username.value}`);
           
       }else{
           isIncorrect.value = true
       }
   }

</script>

<template>
    <div class="flex flex-col justify-center items-center gap-5 w-full lg:w-3/6 xl:w-5/12 h-full bg-white">
        <h1 class="text-3xl font-bold text-[#4D3287]">User Login</h1>
        <form @submit.prevent="handleSubmit" class="w-3/4 flex flex-col gap-2" >
            <label for="username">Username</label>
            <input v-model="username" type="text" id="username" placeholder="@user1">
            <label for="password">Password</label>
            <input v-if="!showPassword" v-model="password" type="password" id="password" placeholder="@test01">
            <input v-else v-model="password" type="text" id="password" placeholder="password">
            <label for="showPassword">Show Password
                <input type="checkbox" name="showPassword" id="showPassword" v-model="showPassword">
            </label>
            
            <button type="submit" class=" text-white py-3 px-4 rounded-xl bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 hover:from-rose-500 hover:via-fuchsia-600 hover:to-indigo-600">Login</button>
        </form>
        <h1 class="text-red-500" v-show="isIncorrect">Input Invalid. Please try again</h1>
        <h1>Don't have an account yet? <RouterLink  to="/register" class="text-[#4D3287] font-semibold">Register</RouterLink></h1>
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


