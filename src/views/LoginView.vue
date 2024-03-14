<script setup lang="ts">
  import Login from '../components/Login.vue';
  import Home from '../components/Home.vue'
</script>
<template>
  <div class="m-container flex justify-center items-center w-screen h-screen py-20 px-52">
    <div class="w-full h-full flex shadow-2xl">
      <Home/>
      <Login />
    </div>  
  </div>
</template>
<style scoped>
.m-container{
  background-image: linear-gradient(to right bottom, #dc3cf6, #b33fdd, #8d3dc2, #6b38a5, #4d3187);
}
</style>
