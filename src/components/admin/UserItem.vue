<script setup lang="ts">

import { RouterLink } from 'vue-router';

const props = defineProps<{
    id: number,
    email: string,
    name: string,
}>();

</script>

<template>
    <RouterLink :to="`admin/student/${props.id}`">
        <div class="item">
            <p>Почта: {{ props.email }}</p>
            <p>Логин: {{ props.name }}</p>
            <p>Последний раз в сети: </p>
        </div>
    </RouterLink>
</template>