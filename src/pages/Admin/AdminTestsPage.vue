<script setup lang="ts">
import TestsList from '../../components/admin/lists/TestsList.vue';
import { api } from '../../api/api';
import { onMounted, ref } from 'vue';
import ModalWin from '../../ui/ModalWin.vue';
import AdminTestForm from '../../components/forms/AdminTestForm.vue';
const tests = ref([]);

const indexTests = async () => {
  try {
    const response = await api.get(`/api/v1/admin/tests`);
    tests.value = response.data;
    console.log("tests", tests.value);
  } catch(err) {
    console.error(err);
  }
}

onMounted(() => {
  indexTests();
});
</script>

<template>
  <div class="variants">
    <ModalWin 
      modal-title="Добавление теста"
      modal-btn="Добавить тест"
      :form="AdminTestForm"
    />

    <TestsList :tests="tests" />
  </div>
</template>
