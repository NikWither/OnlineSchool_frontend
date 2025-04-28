<script setup lang="ts">

import LoginForm from '../../components/forms/LoginForm.vue'
import PageTitle from '../../ui/PageTitle.vue';

</script>

<template>
    <div class="authorization">
        
        <PageTitle title="Авторизация"/>

        <p>Запоминайте свои логины и пароли</p>

        <div class="wrapper">
            <LoginForm />
        </div>
    </div>
</template>