<script setup lang="ts">

const props = defineProps({
    data: Array
});

import NoteItem from './NoteItem.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="notes__list">

        <RouterLink
            v-for="note in props.data" :to="`/notes/${note.id}`">
            <NoteItem 
                :key="note.id"
                :title="note.title"
            />
        </RouterLink>

        

        <NoteItem />

    </div>
</template>