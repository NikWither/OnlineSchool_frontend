<script setup lang="ts">

import PageTitle from '../../ui/PageTitle.vue';
import { onMounted } from 'vue';
import { useTasksStore } from '../../stores/TasksStore';
import TasksList from '../../components/admin/lists/TasksList.vue';

const taskStore = useTasksStore();

onMounted(() => {
    taskStore.fetchTasks();
});

</script>

<template>
    <div class="tasks">
        <PageTitle title="Задания"/>

        <div class="section">
            <div class="section__title">Сборники заданий для самоконтроля и проверки</div>

            <p v-if="taskStore.isLoading">
                <CSpinner/>
            </p>

            <p v-else-if="taskStore.tasks.length === 0">
                Заданий пока нет
            </p>

            <div class="list" v-else>
                <TasksList :tasks="taskStore.tasks" />
            </div>
        </div>
    </div>
</template>