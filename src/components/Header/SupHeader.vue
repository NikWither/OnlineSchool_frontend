<script setup>
import { RouterLink } from 'vue-router';
import BurgerMenu from './BurgerMenu.vue';
</script>

<template>
    <div class="supheader">
        <ul class="supheader__nav">
            <li class="item"><RouterLink to="/variants">Варианты</RouterLink></li>
            <li class="item"><RouterLink to="/books">Сборники</RouterLink></li>
            <li class="item"><RouterLink to="/tasks">Задания</RouterLink></li>
            <li class="item"><RouterLink to="/notes">Конспекты</RouterLink></li>
            <li class="item"><RouterLink to="/plan">План подготовки</RouterLink></li>
            <li class="item"><RouterLink to="/help">О приложении</RouterLink></li>
        </ul>
    </div>

    <div class="burger">
        <BurgerMenu />
    </div>

    

</template>

<style scoped>

    @media(max-width: 570px) {
        .supheader {
            display: none;
        }
    }

    @media(min-width: 571px) {
        .burger {
            display: none;
        }
    }

</style>