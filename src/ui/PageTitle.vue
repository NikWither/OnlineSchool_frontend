<script setup lang="ts">

defineProps<{
    title: string
}>()

</script>

<template>
    <h2 class="page__title">{{title}}</h2>
</template>

<style scoped>
    .page__title {
        font-size: 22px;
        margin-bottom: 15px;
        text-align: center;
    }
</style>