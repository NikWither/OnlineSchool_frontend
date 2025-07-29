<script setup lang="ts">

const props = defineProps({
    data: Array
});

import NoteItem from './NoteItem.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="notes__list">
            <NoteItem v-for="note in props.data" 
                :id="note.id"
                :key="note.id"
                :title="note.title"
            />
    </div>
</template>