<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from '../../api/api';

const leads = ref([]);

const getLeads = async () => {
    try {
        const response = await api.get('api/v1/admin/leads');

        if (response.status === 200) {
            leads.value = response.data;
        }

        console.log("leads", leads.value);
    } catch (err) {
        console.error(err);
    }
}

onMounted(async () => {
    await getLeads();
});
</script>

<template>
  <div class="container">
    <h1>Заявки</h1>
    <div v-if="leads.length === 0">Нет заявок</div>
    <div v-else>
      <div
        v-for="lead in leads"
        :key="lead.id"
        class="lead-card"
      >
        <p><strong>ID:</strong> {{ lead.id }}</p>
        <p><strong>Имя:</strong> {{ lead.name }}</p>
        <p><strong>Контакты:</strong> {{ lead.contact }}</p>
        <p v-if="lead.question"><strong>Question:</strong> {{ lead.question }}</p>
        <p><strong>Заявка создана:</strong> {{ new Date(lead.created_at).toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.lead-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #fafafa;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
</style>
