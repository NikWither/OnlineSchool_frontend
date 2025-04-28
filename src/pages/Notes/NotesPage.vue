<script setup lang="ts">

import { RouterLink } from 'vue-router';
import PageTitle from '../../ui/PageTitle.vue';
import NotesList from '../../components/Notes/NotesList.vue';

import { api } from '../../api/api';
import { onMounted, reactive } from 'vue';
import type { Note } from '../../types/types';
import { useAuthStore } from '../../stores/auth';

const notes = reactive<{list: Note[]}>({
    list: []
})

const auth = useAuthStore();

onMounted(async () => {
    const response = await api.get('/api/v1/notes', {
        headers: {
            Authorization: `Bearer ${auth.token}`,
        }
    })

    notes.list = response.data;
});

</script>

<template>
    <PageTitle title="Конспекты"/>
    <div class="notes">
        <NotesList :data="notes.list"/>
    </div>
</template>