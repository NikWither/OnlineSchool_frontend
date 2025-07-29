<script setup lang="ts">

import PageTitle from '../../ui/PageTitle.vue';
import { onMounted } from 'vue';
import NotesList from '../../components/admin/lists/NotesList.vue';
import { useNotesStore } from '../../stores/NotesStore';

const noteStore = useNotesStore();

onMounted(() => {
    noteStore.fetchNotes();
    console.log('notes', noteStore.notes);
});

</script>

<template>
    <div class="notes">
        <PageTitle title="Конспекты"/>

        <div class="section">
            <div class="section__title">Сборник вариантов за последние годы</div>

            <p v-if="!noteStore.isLoading">
                <CSpinner/>
            </p>

            <div class="list" v-else>
                <NotesList :notes="noteStore.notes" />
            </div>
        </div>
        
    </div>
</template>