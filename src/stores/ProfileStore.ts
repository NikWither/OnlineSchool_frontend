import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '../api/api';
import { useAuthStore } from './AuthStore';

export const useProfileStore = defineStore('profile', () => {
    
    const authStore = useAuthStore();

    const token = authStore.token;
    
    // state

    const userInfo = ref({
        name: '',
        email: '',
    });

    // actions 

    const getUserInfo = async () => {
        if (userInfo.value.email || userInfo.value.name) {
            return;
        }

        const response = await api.get('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            userInfo.value.name = response.data.name;
            userInfo.value.email = response.data.email;
        }
    }

    return {
        userInfo,
        getUserInfo,
    };
});