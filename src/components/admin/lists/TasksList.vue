<script setup lang="ts">
import { defineProps } from 'vue';
import { api } from '../../../api/api'; // твой axios или fetch инстанс

interface Task {
  id: number;
  title: string;
  file_path: string;
  original_name: string;
  created_at: string;
  updated_at: string;
}

const props = defineProps<{
  tasks: Task[];
}>();

const downloadFile = async (id: number, originalName: string) => {
  try {
    const response = await api.get(`/api/v1/tasks/${id}`, {
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
  <div class="list" v-if="props.tasks.length">
    <template v-for="task in props.tasks" :key="task.id">
      <CCard class="card">
        <CCardBody>
          <CCardTitle>{{ task.title }}</CCardTitle>
          <CCardText>Вариант для самоподготовки</CCardText>
          <CButton 
            @click="downloadFile(task.id, task.original_name)"
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
