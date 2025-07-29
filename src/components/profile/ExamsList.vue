<script setup="ts">

import { onMounted } from 'vue';


</script>

<template>

<div class="exams">

    <!-- <h2 v-if="homeWorkStore.isLoading">Загрузка..</h2> -->

    <div class="list">
        <div class="exams">
            <h4 class="exams__title">Всего экзаменов: 5, из них сдано: 3, предстоит сдать: 1</h4>
            
            <div class="exams__list">
                <CCard>
                    <CCardHeader>Экзамен 1</CCardHeader>
                    <CCardBody>
                        <CCardTitle>Задания 1-4</CCardTitle>
                        <CCardText>Экзамен по базовым заданиям, с 1-4, всего 24 номера</CCardText>
                        <CButton color="primary" href="#">Приступить</CButton>
                    </CCardBody>
                </CCard>

                <CCard>
                    <CCardHeader>Экзамен 2</CCardHeader>
                    <CCardBody>
                        <CCardTitle>Программирование</CCardTitle>
                        <CCardText>Тест на основы Python, исходя из курса.</CCardText>
                        <CButton color="primary" href="#">Приступить</CButton>
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

</style>