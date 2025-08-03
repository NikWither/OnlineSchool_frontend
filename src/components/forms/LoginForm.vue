<script setup lang="ts">
import { ref, reactive } from 'vue'
import { api } from '../../api/api';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/AuthStore';

const formData = reactive({
    email: '',
    password: '',
});

const error = ref(null);

const router = useRouter();

const authStore = useAuthStore();

const handleSubmitForm = async () => {

    const response = await api.post('/api/login', formData);

    if (response.status === 200) {
        const token = response.data.token;
        const isAdmin = response.data.user.is_admin;
        const role = isAdmin ? 1 : 0;
        authStore.login(token, role);
        router.push('/profile');
    }
}

</script>

<template>

    <CForm @submit.prevent="handleSubmitForm" class="register__form">
        <CFormInput
            type="text"
            id="email"
            placeholder="Почта"
            text="Введите указанную при регистрации почту"
            aria-describedby="exampleFormControlInputHelpInline"
            v-model="formData.email"
        />

        <CFormInput
            type="password"
            id="password"
            placeholder="Пароль"
            text="Запоминайте свои пароли"
            aria-describedby="exampleFormControlInputHelpInline"
            v-model="formData.password"
        />

        <div class="btn">
            <button type="submit">Войти</button>
        </div>
    </CForm>

    <div v-if="error">{{ error }}</div>
</template>

<style scoped>

.register__form {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 20px;
    border: 1px solid rgb(236, 236, 236);

    padding: 25px;
    border-radius: 15px;
}

.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(206 203 233);
    width: 30%;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid rgb(171, 165, 221);
    font-size: 21px;
    color: black;
    font-weight: 600;
}

.btn:hover {
    background-color: rgb(181, 176, 228);
}

.btn:active {
    background-color: rgb(156, 148, 225);
    border: 1px solid white;
}

</style>