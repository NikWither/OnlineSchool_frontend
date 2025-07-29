<script setup lang="ts">
import { ref } from 'vue';
import { api } from '../../api/api'; // Используй свой api, если он с axios

const name = ref('');
const contact = ref('');
const question = ref('');

const sendForm = async () => {
    try {
        const payload = {
            name: name.value,
            contact: contact.value,
            question: question.value || null,
        };

        const response = await api.post('api/create-lead', payload);

        if (response.status === 201 || response.status === 200) {
            alert('Заявка отправлена успешно!');
            name.value = '';
            contact.value = '';
            question.value = '';
        }
    } catch (error) {
        console.error('Ошибка при отправке формы:', error);
        alert('Ошибка при отправке формы');
    }
};
</script>

<template>
  <form class="feedback-form" @submit.prevent="sendForm">
    <div class="section">
      <label>
        <span>Ваше имя</span>
      </label>
      <input type="text" placeholder="Мария Александровна" v-model="name" required />
    </div>

    <div class="section">
      <label>
        <span>Номер телефона для связи</span>
      </label>
      <input type="text" placeholder="+7 123 456 78 90" v-model="contact" required />
    </div>

    <div class="section">
      <label>
        <span>Ваш вопрос</span>
      </label>
      <input type="text" placeholder="Необязательное поле" v-model="question" />
    </div>

    <button type="submit">Свяжитесь со мной</button>
  </form>
</template>

<style scoped>
.feedback-form {
  max-width: 500px;
  margin: 0 auto;
}

.section {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
}
</style>
