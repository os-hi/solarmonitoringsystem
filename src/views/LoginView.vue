<script setup lang="ts">
  import Login from '../components/Login.vue';
  import Home from '../components/Home.vue'
</script>
<template>
  <div class="flex justify-center items-center w-screen h-screen py-5 px-10 lg:py-10 2xl:py-20 2xl:px-52 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
    <div class="w-full h-full flex flex-col lg:flex-row shadow-2xl">
      <Home/>
      <Login />
    </div>  
  </div>
</template>

