import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "../api/api";
import { useAuthStore } from "./AuthStore";

export const useExamsStore = defineStore("exam", () => {
    const authStore = useAuthStore();
    const token = authStore.token;
    
    // state

    const exam = ref([]);
    const isLoading = ref(true);

    // actions

    const getExams = async () => {
        const response = await api.get('/api/v1/homeworks', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (response.status === 200) {
            exam.value = response.data;
            isLoading.value = false;
        }
    }

    return {
        exam,
        isLoading,
        getHomeWork,
    };
}) 