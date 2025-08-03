import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { api } from '../api/api';

export const useVariantsStore = defineStore('variants', () => {    
    // state
    const variants = ref([]);
    const isLoading = ref(false);
    
    // getters

    const variantCount = computed(() => variants.value.length);
    const allVariants = computed(() => variants.value);

    // actions

    const fetchVariants = async () => {
        if (isLoading.value) return;
        isLoading.value = true;

        try {
            const response = await api.get('/api/v1/variants');

            if (response.status === 200) {
                variants.value = response.data;
            }
        } catch (error) {
            console.error('Ошибка загрузки вариантов:', error);
        } finally {
            isLoading.value = false;
        }
    }

    return {
        // state
        variants,
        isLoading,
        // getters
        variantCount,
        allVariants,
        // actions
        fetchVariants
    };
});