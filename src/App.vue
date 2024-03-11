<script setup lang="ts">
  import Login from './components/Login.vue';
  import Home from './components/Home.vue'
</script>
<template>
  <div class="m-container">
    <div class="inner-container">
      <Home/>
      <Login />
    </div>
  </div>
</template>

<style scoped>
  .m-container{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 100vh;
    padding: 70px 150px;
  }
  .inner-container{
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid black;
  }
</style>