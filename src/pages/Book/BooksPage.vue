<script setup lang="ts">

import PageTitle from '../../ui/PageTitle.vue';
import { onMounted } from 'vue';
import BooksList from '../../components/admin/lists/BooksList.vue';
import { useBooksStore } from '../../stores/BooksStore';

const bookStore = useBooksStore();

onMounted(() => {
    bookStore.fetchBooks();
});

</script>

<template>
    <div class="notes">
        <PageTitle title="Сборники онлайн школ"/>

        <div class="section">
            <div class="section__title">Сборники онлайн школ за последние годы</div>

            <p v-if="bookStore.isLoading">
                <CSpinner/>
            </p>

            <p v-else-if="bookStore.books.length === 0">
                Сбоников пока нет
            </p>

            <div class="list" v-else>
                <BooksList :books="bookStore.books" />
            </div>
        </div>
        
    </div>
</template>