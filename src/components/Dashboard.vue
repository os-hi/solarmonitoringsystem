<script setup lang="ts">
    import Card from './Card.vue';
    import BigCard from './BigCard.vue';
</script>

<template>
    <div class="w-full h-full py-20 px-24 flex justify-center items-center flex-wrap gap-12">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <BigCard></BigCard>
        <BigCard></BigCard>
    </div>
</template>