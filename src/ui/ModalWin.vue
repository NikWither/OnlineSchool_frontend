<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modalTitle: string,
  modalBtn: string,
  form: any,
}>();

const emit = defineEmits(['success']);

const isVisible = ref(false);

const open = () => isVisible.value = true;
const close = () => isVisible.value = false;

const formRef = ref()

const handleSubmit = () => {
    if (formRef.value?.submit) {
        formRef.value?.submit();
    } else {
        console.warn("Нет экземпляра формы");
    }
    
}

</script>

<template>
  <CButton class="button" @click="open">
    {{ props.modalBtn }}
  </CButton>
  <CModal
    alignment="center"
    :visible="isVisible"
    @close="close"
    aria-labelledby="VerticallyCenteredExample"
  >
    <CModalHeader>
      <CModalTitle id="VerticallyCenteredExample">{{ props.modalTitle }}</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <component 
        :is="props.form"
        ref="formRef" 
        :onToggleModal="close"
        @success="emit('success')"
      />
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="close">Закрыть</CButton>
      <CButton color="primary" @click="handleSubmit">Добавить</CButton>
    </CModalFooter>
  </CModal>
</template>
