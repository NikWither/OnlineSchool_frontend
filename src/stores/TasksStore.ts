import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { api } from '../api/api';

export const useTasksStore = defineStore('tasks', () => {    
    // state
    const tasks = ref([]);
    const isLoading = ref(false);
    
    // getters

    const taskCount = computed(() => tasks.value.length);
    const allTasks = computed(() => tasks.value);

    // actions

    const fetchTasks = async () => {
        if (isLoading.value) return;

        const response = await api.get('/api/v1/tasks');

        if (response.status === 200) {
            tasks.value = response.data;
            isLoading.value = true;
        }
    }

    return {
        // state
        tasks,
        isLoading,
        // getters
        taskCount,
        allTasks,
        // actions
        fetchTasks
    };
});