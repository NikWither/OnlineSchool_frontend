<script setup lang="ts">
import { defineProps } from 'vue';
import { api } from '../../../api/api'; // твой axios или fetch инстанс

interface Variant {
  id: number;
  title: string;
  file_path: string;
  original_name: string;
  created_at: string;
  updated_at: string;
}

const props = defineProps<{
  variants: Variant[];
}>();

const downloadFile = async (id: number, originalName: string) => {
  try {
    const response = await api.get(`/api/v1/variants/${id}`, {
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
  <div class="list" v-if="props.variants.length">
    <template v-for="variant in props.variants" :key="variant.id">
      <CCard class="card">
        <CCardBody>
          <CCardTitle>{{ variant.title }}</CCardTitle>
          <CCardText>Вариант для самоподготовки</CCardText>
          <CButton 
            @click="downloadFile(variant.id, variant.original_name)"
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
