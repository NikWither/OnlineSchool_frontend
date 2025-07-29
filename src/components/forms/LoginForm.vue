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

    <CForm @submit.prevent="handleSubmitForm" class="form-user">
        <CFormInput
            type="text"
            id="email"
            placeholder="Логин"
            text="Введите логин для входа в систему"
            aria-describedby="exampleFormControlInputHelpInline"
            v-model="formData.email"
        />

        <CFormInput
            type="password"
            id="password"
            placeholder="Введите пароль от 5-ти символов"
            text="Запоминайте свои пароли"
            aria-describedby="exampleFormControlInputHelpInline"
            v-model="formData.password"
        />

        <div class="form-user__input">
            <button type="submit">Войти</button>
        </div>
    </CForm>
    <!-- <form @submit.prevent="handleSubmitForm" class="form-user">
        <div class="form-user__input">
            <input v-model="formData.email" type="text" placeholder="Логин" id="email">
        </div>

        <div class="form-user__input">
            <input v-model="formData.password" type="text" placeholder="Пароль" id="password">
        </div>
    </form> -->

    <div v-if="error">{{ error }}</div>
</template>