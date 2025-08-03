<script setup lang="ts">
import { api } from '../../api/api';
import { onMounted, ref } from 'vue';
import ModalWin from '../../ui/ModalWin.vue';
import AdminBookForm from '../../components/forms/AdminBookForm.vue';
import BooksList from '../../components/admin/lists/BooksList.vue';

const books = ref([]);

const indexBook = async () => {
  try {
    const response = await api.get(`/api/v1/admin/books`);
    books.value = response.data;
    console.log("books", books.value);
  } catch(err) {
    console.error(err);
  }
}

onMounted(() => {
  indexBook();
});
</script>

<template>
  <div class="notes">
    <ModalWin 
      modal-title="Добавление сборника"
      modal-btn="Добавить сборник"
      :form="AdminBookForm"
    />

    <BooksList :books="books" />
  </div>
</template>
