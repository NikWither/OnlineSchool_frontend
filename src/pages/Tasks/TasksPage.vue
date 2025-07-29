<script setup lang="ts">

import PageTitle from '../../ui/PageTitle.vue';
import { onMounted } from 'vue';
import TasksList from '../../components/admin/lists/TasksList.vue';

import { useTasksStore } from '../../stores/TasksStore';

const taskStore = useTasksStore();

onMounted(() => {
    taskStore.fetchTasks();
    console.log('tasks', taskStore.tasks);
});

</script>

<template>
    <div class="tasks">
        <PageTitle title="Задания"/>

        <div class="section">
            <div class="section__title">Сборники заданий для самоконтроля и проверки</div>

            <p v-if="!taskStore.isLoading">
                <CSpinner/>
            </p>

            <div class="list" v-else>
                <TasksList :tasks="taskStore.tasks" />
            </div>
        </div>
        
    </div>
</template>