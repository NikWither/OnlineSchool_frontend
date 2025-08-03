import axios from "axios";
import { useAuthStore } from "../stores/AuthStore";

export const api = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
})

api.interceptors.request.use((config) => {
    const authStore = useAuthStore();

    if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`
    }

    return config;
})

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const authStore = useAuthStore();

        if ([401, 403].includes(error.response?.status)) {
            try {
                await api.get("/api/v1/variants");
            } catch {
                authStore.logout();
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
)