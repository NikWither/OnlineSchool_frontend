<script setup lang="ts">
import { defineProps } from 'vue';
import { api } from '../../../api/api';

interface Book {
  id: number;
  title: string;
  file_path: string;
  original_name: string;
  created_at: string;
  updated_at: string;
}

const props = defineProps<{
  books: Book[];
}>();

const downloadFile = async (id: number, originalName: string) => {
  try {
    const response = await api.get(`/api/v1/books/${id}`, {
      responseType: 'blob'
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', originalName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Ошибка при скачивании файла', error);
  }
};

</script>

<template>
  <div class="list" v-if="props.books.length">
    <template v-for="book in props.books" :key="book.id">
      <CCard class="card">
        <CCardBody>
          <CCardTitle>{{ book.title }}</CCardTitle>
          <CCardText>Конспект для самоподготовки</CCardText>
          <CButton 
            @click="downloadFile(book.id, book.original_name)"
            color="primary"
          >Скачать</CButton>
        </CCardBody>
      </CCard>
    </template>
  </div>

  <div class="loader" v-else>
    <CSpinner/>
  </div>
</template>

<style scoped>

.card {
  margin-bottom: 20px;
}

</style>
