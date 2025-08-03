<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../../api/api'

const exams = ref([])
const isLoading = ref(true)

const getExams = async () => {
  try {
    const response = await api.get('/api/v1/user-test')
    exams.value = response.data
  } catch (err) {
    console.error('Ошибка при загрузке экзаменов:', err)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  getExams()
})

function translateStatus(status) {
  switch (status) {
    case 'passed': return 'сдан'
    case 'in_progress': return 'в процессе'
    case 'failed': return 'завален'
    default: return 'неизвестно'
  }
}

function statusCardClass(status) {
  switch (status) {
    case 'passed': return 'card-success'
    case 'in_progress': return 'card-warning'
    case 'failed': return 'card-danger'
    default: return ''
  }
}

function statusTextClass(status) {
  switch (status) {
    case 'passed': return 'text-success'
    case 'in_progress': return 'text-warning'
    case 'failed': return 'text-danger'
    default: return ''
  }
}

const downloadFile = async (id, originalName) => {
  try {
    const response = await api.get(`/api/v1/user-test/${id}`, {
      responseType: 'blob'
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', originalName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Ошибка при скачивании файла', error);
  }
};
</script>



<template>
  <div class="exams">
    <div class="list">
      <div class="exams">
        <h4 class="exams__title" v-if="!isLoading">
            Список экзаменов
        </h4>

        <h4 v-else>Загрузка...</h4>

        <div class="exams__list">
          <CCard
            v-for="exam in exams"
            :key="exam.id"
            :class="statusCardClass(exam.status)"
            class="mb-4"
          >
            <CCardHeader>Экзамен № {{ exam.id }}</CCardHeader>
            <CCardBody>
                <CCardTitle>{{ exam.test || 'Без названия' }}</CCardTitle>
                <CCardText>Статус: 
                    <span :class="statusTextClass(exam.status)">
                        {{ translateStatus(exam.status) }}
                    </span>
                </CCardText>
                <CButton
                  @click="downloadFile(exam.test_id, exam.test_original_name)"
                    class="exam-btn"
                >Приступить</CButton>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.statistics {
    margin-top: 20px;
}

.list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.card {
    margin-bottom: 20px;
    width: 600px;
}

@media (max-width: 700px) {
    .card {
        width: 500px;
    }
} 

@media (max-width: 550px) {
    .card {
        width: 400px;
    }
} 

@media (max-width: 425px) {
    .card {
        width: 350px;
    }
} 

@media (max-width: 380px) {
    .card {
        width: 300px;
    }
} 

.card-success {
  background-color: #e8f5e9; /* мягкий зелёный */
}

.card-warning {
  background-color: #fff8e1; /* мягкий жёлтый */
}

.card-danger {
  background-color: #ffebee; /* мягкий красный */
}

.exam-btn {
  background-color: rgb(122, 116, 173);
  color: white;
  transition: background-color 0.3s ease;
  border: none;
}

.exam-btn:hover {
  background-color: rgb(65, 56, 132);
  color: #fff;
}

</style>