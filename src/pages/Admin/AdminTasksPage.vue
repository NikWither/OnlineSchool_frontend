<script setup lang="ts">
import { api } from '../../api/api';
import { onMounted, ref } from 'vue';
import ModalWin from '../../ui/ModalWin.vue';
import AdminTaskForm from '../../components/forms/AdminTaskForm.vue';
import TasksList from '../../components/admin/lists/TasksList.vue';

const tasks = ref([]);

const indexTasks = async () => {
  try {
    const response = await api.get(`/api/v1/admin/tasks`);
    tasks.value = response.data;
    console.log("tasks", tasks.value);
  } catch(err) {
    console.error(err);
  }
}

onMounted(() => {
  indexTasks();
});
</script>

<template>
  <div class="tasks">
    <ModalWin 
      modal-title="Добавление задания"
      modal-btn="Добавить задание"
      :form="AdminTaskForm"
    />

    <TasksList :tasks="tasks" />
  </div>
</template>
