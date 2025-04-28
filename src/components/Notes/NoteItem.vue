<script setup lang="ts">

defineProps({
    title: String
})

</script>

<template>
    <div class="item">
        <h3 class="item__title">Задание 2</h3>
        <div class="item__tags">
            <p>{{title}}</p>
            <p>Excel</p>
        </div>
        <p>Читать</p>
    </div>
</template>