<script setup>
import { RouterLink, useRouter } from 'vue-router';
import SupHeader from './SupHeader.vue';
import { ref } from 'vue';
import { api } from '../../api/api';
import { useAuthStore } from '../../stores/auth';

const router = useRouter();
const auth = useAuthStore();

const isAuthenticated = ref(!!localStorage.getItem('token'));

const logout = async () => {
  try {
    await api.post('/api/logout', null, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })

    auth.logout()
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
                <!-- Всеволод, репетитор --> Logo
            </RouterLink>

            <nav class="header__nav">
                <ul>
                    <li>О компании</li>
                    <li>Об уроках</li>
                    <li>О возможностях</li>
                    <li>Результаты</li>
                </ul>
            </nav>

            <div class="header__buttons">
                <template v-if="!auth.isAuthenticated">
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
                </template>

            </div>
        </div>

        <template v-if="auth.isAuthenticated">
            <SupHeader />
        </template>
        
    </header>

</template>