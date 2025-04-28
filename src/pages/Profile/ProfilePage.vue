<script setup lang="ts">
import { ref } from 'vue';
import { api } from '../../api/api';

const userInfo = ref({
    name: '',
    email: '',
})

const getInfoUser = async () => {

    const token = localStorage.getItem('token');

    const response = await api.get('/api/user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (response.status === 200) {
        userInfo.value.name = response.data.name;
        userInfo.value.email = response.data.email;

        console.log("Инфорамция о пользователе", userInfo);
    }
}

getInfoUser();


</script>

<template>
    <h1>Почта: {{userInfo.email}}</h1>
    <h1>Логин: {{userInfo.name}}</h1>
</template>