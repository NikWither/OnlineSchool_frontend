<script setup lang="ts">

import { useRoute } from 'vue-router'
import { api } from '../../api/api';
import { reactive, ref } from 'vue';
import { useAuthStore } from '../../stores/AuthStore';

const props = defineProps<{
  onToggleModal: () => void
}>();

const emit = defineEmits(['success']);

const authStore = useAuthStore();
const route = useRoute();


const user_id = Number(route.params.id); 

const data = reactive({
    'title': '',
    'homework': '',
    'user_id': user_id,
});

const submit = async () => {
    if (!data.title.trim() || !data.homework.trim()) {
        alert('Введите все данные');
        return;
    }

    const response = await api.post('/api/v1/admin/homeworks', data, {
        headers: {
            Authorization: `Bearer ${authStore.token}`,
        }
    });

    console.log(response);
    
    console.log('данные готовы к отправке');
    console.log('homeworkData', data);
    emit('success');
    props.onToggleModal();
}

defineExpose({submit});

</script>

<template>
    <form @submit.prevent="submit">
        <div class="homework_element">
            <CInputGroup class="mb-3">
                <CFormInput 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default"
                    v-model="data.title"
                    placeholder="Заголовок"
                />
            </CInputGroup>
        </div>

        <div class="homework_element">
            <CInputGroup class="mb-3">
                <CFormInput 
                    aria-label="Sizing example input" 
                    aria-describedby="inputGroup-sizing-default"
                    v-model="data.homework"
                    placeholder="Д/З"
                />
            </CInputGroup>
        </div>

        <input type="hidden" v-model="data.user_id">
    </form>

</template>

<style scoped>

.homework_element {
    margin-bottom: 20px;
}

</style>