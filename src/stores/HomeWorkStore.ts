import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "../api/api";
import { useAuthStore } from "./AuthStore";

export const useHomeWorkStore = defineStore("homework", () => {
    const authStore = useAuthStore();
    const token = authStore.token;
    
    // state

    const homework = ref([]);
    const isLoading = ref(true);

    // actions

    const getHomeWork = async () => {
        const response = await api.get('/api/v1/homeworks', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (response.status === 200) {
            homework.value = response.data;
            isLoading.value = false;
        }
    }

    return {
        homework,
        isLoading,
        getHomeWork,
    };
}) 