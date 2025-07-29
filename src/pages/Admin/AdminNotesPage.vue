<script setup lang="ts">
import NotesList from '../../components/admin/lists/NotesList.vue';
import { api } from '../../api/api';
import { onMounted, ref } from 'vue';
import ModalWin from '../../ui/ModalWin.vue';
import AdminNoteForm from '../../components/forms/AdminNoteForm.vue';

const notes = ref([]);

const indexNote = async () => {
  try {
    const response = await api.get(`/api/v1/admin/notes`);
    notes.value = response.data;
    console.log("notes", notes.value);
  } catch(err) {
    console.error(err);
  }
}

onMounted(() => {
  indexNote();
});
</script>

<template>
  <div class="notes">
    <ModalWin 
      modal-title="Добавление конспекта"
      modal-btn="Добавить конспект"
      :form="AdminNoteForm"
    />

    <NotesList :notes="notes" />
  </div>
</template>
