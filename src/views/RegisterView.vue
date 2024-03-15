<script setup lang="ts">
  import Register from '../components/Register.vue';
  import Home from '../components/Home.vue'
</script>
<template>
  <div class="m-container flex justify-center items-center w-screen h-screen py-20 px-52 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
    <div class="w-full h-full flex shadow-2xl">
      <Home/>
      <Register />
    </div>  
  </div>
</template>
