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

    <CForm @submit.prevent="handleSubmitForm" class="register__form">
        <CFormInput
            class="register_input"
            type="email"
            label="Электронная почта"
            placeholder="vsevolodrepit@mail.ru"
            text="Укажите почту, которой пользуетесь"
            v-model="formData.email"
            id="email"
        />

        <CFormInput
            class="register_input"
            type="text"
            label="Имя и фамилия"
            placeholder="Всеволод Цаплин"
            text="Должны быть настоящими"
            v-model="formData.name" 
            id="name"
        />

        <CFormInput
            class="register_input"
            type="password"
            label="Пароль"
            text="Пока нет возможности восстанавливать пароли, поэтому запоминаем"
            aria-describedby="exampleFormControlInputHelpInline"
            v-model="formData.password" 
            id="password"
        />

        <!-- <CFormInput
            type="password"
            label="Подтверждение пароля"
            v-model="formData.password" 
            id="password_confirmation"
        /> -->

        <div class="btn">
            <button type="submit">Создать аккаунт</button>
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