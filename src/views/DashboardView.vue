<script setup lang="ts">
    import Sidebar from '../components/Sidebar.vue';
    import Dashboard from '../components/Dashboard.vue';
</script>
<template>
    <div class="w-screen h-screen lg:h-auto bg-[#F3F4F6] flex flex-col lg:flex-row">
        <Sidebar />
        <Dashboard />
    </div>
</template>