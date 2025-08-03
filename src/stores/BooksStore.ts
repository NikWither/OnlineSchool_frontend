import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { api } from '../api/api';

export const useBooksStore = defineStore('books', () => {    
    // state
    const books = ref([]);
    const isLoading = ref(false);
    
    // getters

    const booksCount = computed(() => books.value.length);
    const allBooks = computed(() => books.value);

    // actions

    const fetchBooks = async () => {
        if (isLoading.value) return;
        isLoading.value = true;

        try {
            const response = await api.get('/api/v1/books');

            if (response.status === 200) {
                books.value = response.data;
                isLoading.value = true;
            }
        } catch (error) {
            console.error('Ошибка при загрузке конспектов:', error);
        } finally {
            isLoading.value = false;
        }


    }

    return {
        // state
        books,
        isLoading,
        // getters
        booksCount,
        allBooks,
        // actions
        fetchBooks
    };
});