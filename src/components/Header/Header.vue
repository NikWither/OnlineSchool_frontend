<script setup>
import { RouterLink, useRouter } from 'vue-router';
import SupHeader from './SupHeader.vue';
import AdminHeader from './AdminHeader.vue';
import { ref } from 'vue';
import { api } from '../../api/api';
import { useAuthStore } from '../../stores/AuthStore';

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  try {
    await api.post('/api/logout', null, {
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },
    })

    authStore.logout()
    router.push('/login')
  } catch (err) {
    console.log(err)
  }
}

</script>

<template>
    <header>
        <div class="header">
            <RouterLink to="/" class="header__logo">

                <img src="/public/images/logo.jpg" alt="">
                <h1>Всеволод, репетитор</h1>
            </RouterLink>

            <div class="header__buttons">
                <template v-if="!authStore.isAuthenticated">
                    <div class="btn">
                        <RouterLink to="/login">Войти</RouterLink>
                    </div>
                    <div class="btn">
                        <RouterLink to="/register">Регистрация</RouterLink>
                    </div>
                </template>

                <template v-else>
                    <div class="btn">
                        <button @click="logout">Выйти</button>
                    </div>
                    <div class="btn">
                        <RouterLink to="/profile">Профиль</RouterLink>
                    </div>
                </template>

            </div>
        </div>
        <!-- auth user -->
        <template v-if="authStore.isAuthenticated">
            <SupHeader />
        </template>
        <!-- admin -->
        <template v-if="authStore.isAdmin && authStore.isAuthenticated">
            <AdminHeader />
        </template>
    </header>

</template>