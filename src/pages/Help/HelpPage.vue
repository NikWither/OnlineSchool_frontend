<script setup lang="ts">

import PageTitle from '../../ui/PageTitle.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="help">
        <PageTitle title="О приложении"/>

        <div class="about">
            <RouterLink class="about__link" to="/variants">Список вариантов</RouterLink>
            <RouterLink class="about__link" to="/tasks">Список заданий</RouterLink>
            <RouterLink class="about__link" to="/notes">Конспекты по материалам</RouterLink>
            <RouterLink class="about__link" to="/profile">Курс по Python</RouterLink>
            <RouterLink class="about__link" to="/books">Сборники онлайн школ</RouterLink>
        </div>

        <div class="cabinet">
            <h2>Личный кабинет</h2>
            <RouterLink to="/profile">Перейти в личный кабинет</RouterLink>

            <div class="cabinet__list">
                <p class="title">В личном кабинете пользователь может посмотреть:</p>
                <p class="item">Заданное домашнее задание.</p>
                <p class="item">Своё расписание.</p>
                <p class="item">Выданные тесты и результат по ним.</p>
                <p class="item">Статистику по образовательному процессу (soon...).</p>
                <p class="item">Вебинары для учеников (soon...).</p>
                <p class="item">Курсы для учеников (soon...).</p>
            </div>
        </div>

        <div class="tech">
            <h2>Технический стек приложения</h2>

            <div class="tech__list">

                <div class="item">
                    <img src="/public/images/Laravel.svg.png" alt="Laravel" title="Laravel">
                    <p>Laravel</p>
                </div>
                
                <div class="item">
                    <img src="/public/images/vue3.png" alt="Vue3" title="Vue3">
                    <p>Vue3</p>
                </div>
                
                <div class="item">
                    <img src="/public/images/Typescript_logo_2020.svg.png" alt="Typescript" title="Typescript">
                    <p>Typescript</p>
                </div>

                <div class="item">
                    <img src="/public/images/mysql.svg" alt="MySQL" title="MySQL">
                    <p>MySQL</p>
                </div>
            </div>
        </div>
    </div>
</template>
