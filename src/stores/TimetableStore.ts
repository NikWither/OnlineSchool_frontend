import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "../api/api";
import { useAuthStore } from "./AuthStore";

export const useTimetableStore = defineStore("timetable", () => {
    const authStore = useAuthStore();
    const token = authStore.token;
    
    // state

    const timetable = ref([]);
    const isLoading = ref(true);

    // actions

    const getTimetable = async () => {
        const response = await api.get('/api/v1/timetable', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (response.status === 200) {
            timetable.value = response.data;
            isLoading.value = false;
        }
    }

    return {
        timetable,
        isLoading,
        getTimetable,
    };
}) 