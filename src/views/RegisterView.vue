<script setup lang="ts">
  import Register from '../components/Register.vue';
  import Home from '../components/Home.vue'
</script>
<template>
  <div class="flex justify-center items-center w-screen h-screen py-5 px-10 lg:py-10 xl:py-20 xl:px-52 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
    <div class="w-full h-full flex flex-col lg:flex-row shadow-2xl">
      <Home/>
      <Register />
    </div>  
  </div>
</template>