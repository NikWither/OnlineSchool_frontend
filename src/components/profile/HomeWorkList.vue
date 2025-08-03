<script setup lang="ts">

import { onMounted } from 'vue';
import { useHomeWorkStore } from '../../stores/HomeWorkStore';

const homeWorkStore = useHomeWorkStore();

onMounted(async () => {
    await homeWorkStore.getHomeWork();

    console.log('homeWorkStore', homeWorkStore.homework);
});

</script>

<template>

<div class="homework">

    <h2 v-if="homeWorkStore.isLoading">Загрузка..</h2>

    <div v-else class="list">
        <CCard v-for="(item, index) in homeWorkStore.homework" :key="index" class="card">
            <CCardHeader>Домашка задана {{ item.date }}</CCardHeader>
            <CCardBody>
                <CCardTitle>{{ item.title }}</CCardTitle>
                <CCardText>{{ item.homework }}</CCardText>
            </CCardBody>
        </CCard>
    </div>

</div>
</template>
<style scoped>

.homework {
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

</style>