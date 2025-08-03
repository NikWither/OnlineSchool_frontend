<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from './stores/AuthStore'
import { api } from './api/api'
import { RouterView, useRoute } from 'vue-router'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'

onMounted(async () => {
  const auth = useAuthStore()

  if (auth.isAuthenticated) {
    try {
      await api.get('/api/logout-check')
    } catch {
      auth.logout()
      window.location.href = '/login'
    }
  }
})

const route = useRoute();

</script>

<template>
  <div class="container">
    <Header />
    <div class="wrapper">
      <RouterView />
    </div>
  </div>

  <template v-if="route.path === '/'">
    <Footer />
  </template>

  
</template>
