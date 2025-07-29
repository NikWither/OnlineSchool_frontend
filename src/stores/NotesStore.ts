import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { api } from '../api/api';

export const useNotesStore = defineStore('notes', () => {    
    // state
    const notes = ref([]);
    const isLoading = ref(false);
    
    // getters

    const notesCount = computed(() => notes.value.length);
    const allNotes = computed(() => notes.value);

    // actions

    const fetchNotes = async () => {
        if (isLoading.value) return;

        const response = await api.get('/api/v1/notes');

        if (response.status === 200) {
            notes.value = response.data;
            isLoading.value = true;
        }
    }

    return {
        // state
        notes,
        isLoading,
        // getters
        notesCount,
        allNotes,
        // actions
        fetchNotes
    };
});