import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
    // state

    const token = ref<string>(localStorage.getItem('token') || '');
    const roleUser = ref<number>(parseInt(localStorage.getItem('roleUser') || '0'));    
    // getters

    const isAuthenticated = computed(() => !!token.value);
    const isAdmin = computed(() => roleUser.value === 1);

    // actions

    const login = (newToken: string, role: number) => {
        token.value = newToken;
        roleUser.value = role;
        localStorage.setItem('token', newToken);
        localStorage.setItem('roleUser', role.toString());
    }

    const logout = () => {
        token.value = '';
        localStorage.removeItem('token');
        localStorage.removeItem('roleUser');
    }

    return {
        token,
        roleUser,
        isAuthenticated,
        isAdmin,
        login,
        logout,
    }
})