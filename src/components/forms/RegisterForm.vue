<script setup lang="ts">
import { ref, reactive } from 'vue'
import { api } from '../../api/api';
import { useRouter } from 'vue-router';

const formData = reactive({
    name: '',
    email: '',
    password: '',
});

const error = ref(null);

const router = useRouter();

const handleSubmitForm = async () => {
    try {
        const response = await api.post('/api/register', formData);

        if (response.status === 200) {
            router.push('/login');
        }
    } catch (err) {
        console.log("Ошибка", err);
    }
}

</script>

<template>
    <form @submit.prevent="handleSubmitForm" class="form-user">
        <div class="form-user__input">
            <input v-model="formData.email" type="text" placeholder="Почта" id="email">
        </div>

        <div class="form-user__input">
            <input v-model="formData.name" type="text" placeholder="Логин" id="name">
        </div>

        <div class="form-user__input">
            <input v-model="formData.password" type="text" placeholder="Пароль" id="password">
        </div>

        <!-- <div class="form-user__input">
            <input v-model="formData.password_confirmation" type="text" placeholder="Подтвердите пароль" id="password_confirmation">
        </div> -->

        <div class="form-user__input">
            <button type="submit">Регистрация</button>
        </div>
    </form>

    <div v-if="error">{{ error }}</div>
</template>