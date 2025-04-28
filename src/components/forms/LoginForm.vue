<script setup lang="ts">
import { ref, reactive } from 'vue'
import { api } from '../../api/api';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth';

const formData = reactive({
    email: '',
    password: '',
});

const error = ref(null);

const router = useRouter();

const auth = useAuthStore();

const handleSubmitForm = async () => {

    const response = await api.post('/api/login', formData);

    if (response.status === 200) {
        const token = response.data.token;
        auth.login(token);
        router.push('/profile');
    }
}

</script>

<template>
    <form @submit.prevent="handleSubmitForm" class="form-user">
        <div class="form-user__input">
            <input v-model="formData.email" type="text" placeholder="Логин" id="email">
        </div>

        <div class="form-user__input">
            <input v-model="formData.password" type="text" placeholder="Пароль" id="password">
        </div>

        <div class="form-user__input">
            <button type="submit">Войти</button>
        </div>
    </form>

    <div v-if="error">{{ error }}</div>
</template>