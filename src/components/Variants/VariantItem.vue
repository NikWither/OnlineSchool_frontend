<script setup lang="ts">
import { api } from '../../api/api';


const props = defineProps<{
    title: string,
    file_name: string,
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
    <CCard>
        <CCardBody>
            <CCardTitle>{{ props.title }}</CCardTitle>
            <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
            <CButton 
                @click="downloadFile(variant.id, variant.original_name)" 
                color="primary">
                Скачать
            </CButton>
        </CCardBody>
    </CCard>
</template>