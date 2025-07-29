<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api } from '../../api/api'


interface User {
  id: number
  name: string
  email: string
}

const users = ref<User[]>([])
const isLoading = ref(true)
const error = ref<string | null>(null)

const getUsers = async () => {
  try {
    const response = await api.get<User[]>('/api/v1/admin/users')
    users.value = response.data
  } catch (err) {
    error.value = 'Не удалось загрузить пользователей'
    console.log(err)
  } finally {
    isLoading.value = false
  }
}

onMounted(getUsers)
</script>

<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Список пользователей</h2>

    <div v-if="isLoading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>
    <ul v-else>
      <li
        v-for="user in users"
        :key="user.id"
        class="mb-3 border-b pb-2"
      >
        <router-link
          :to="`/dashboard/users/${user.id}`"
          class="text-blue-600 hover:underline"
        >
          <strong>{{ user.name }}</strong>
        </router-link>
        <div><small>{{ user.email }}</small></div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
li {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
}
</style>