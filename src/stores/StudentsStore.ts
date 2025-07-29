import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { api } from "../api/api";
import { useAuthStore } from './AuthStore';

export const useStudentsStore = defineStore('students', () => {
    
    // auth
    const authStore = useAuthStore();
    const token = authStore.token;

    // state 
    const students = ref([]);
    const isLoading = ref(false);

    // getters

    const countStudents = computed(() => students.value.length);

    // actions

    const getStudents = async () => {
        if (isLoading.value) return;

        const response = await api.get('/api/v1/admin/usersInfo', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        console.log('response', response);

        if (response.status === 200) {
            students.value = response.data;
            isLoading.value = true;
        };
    };

    return {
        students,
        countStudents,
        getStudents,
    };
});