<script setup lang="ts">

const props = defineProps<{
    title: string,
    homework: string,
}>()

</script>

<template>
    <div class="item">
        <p>Д/З: {{ props.title }}</p>
        <p>{{ props.homework }}</p>
        <p>Дата</p>
    </div>
</template>