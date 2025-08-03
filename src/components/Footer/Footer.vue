<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="list">
                <div class="item">
                    <h3 class="item__title">Реквизиты</h3>
                    <p>Цаплин Всеволод Ильич</p>
                    <p>ИНН: 744707889202</p>
                </div>

                <div class="item">
                    <h3 class="item__title">Список используемых источников</h3>
                    <a href="">Умскул</a>
                    <a href="https://kompege.ru/">КЕГЭ</a>
                    <a href="https://100points.ru/">100бальный репетитор</a>
                    <a href="https://plugar-inf.ru/">Иван Викторович</a>
                </div>

                <div class="item">
                    <h3 class="item__title">Навигация</h3>
                    <RouterLink to="/variants">Варианты</RouterLink>
                    <RouterLink to="/tasks">Задания</RouterLink>
                    <RouterLink to="/books">Сборники</RouterLink>
                    <RouterLink to="/notes">Конспекты</RouterLink>
                    <RouterLink to="/profile">Личный кабинет</RouterLink>
                </div>
            </div>

            <div class="contact__info">Всеволод, репетитор, 2025, все права защищены</div>
            <div class="contact__info"><a href="https://t.me/vsevolodrepit">Связь tg</a></div>
            <div class="contact__info"><a href="https://t.me/informatic_vsevolod">Телеграмм канал</a></div>
        </div>
    </footer>
</template>

<style scoped>

.footer {
    max-width: 100%;
    background-color: rgb(206 203 233);
}

.wrapper {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.list {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.item {
    margin: 10px 20px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: start;
}

.item h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
}

.item p {
    font-size: 18px;
    color: black;
    margin-bottom: 5px;
    padding: 0px;
}

.item a {
    color: black;
    font-size: 18px;
    margin-bottom: 5px;
    padding: 0px;
}

@media(max-width: 680px) {
    .list {
        padding: 5px;
    }

    .item {
        margin: 5px 10px;
        padding: 5px 10px;
    }

    .item h3 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .item p {
        font-size: 14px;
        color: black;
        margin-bottom: 5px;
        padding: 0px;
    }
    .item a {
        font-size: 14px;
        color: black;
        margin-bottom: 5px;
        padding: 0px;
    }

    .contact__info {
        text-align: center;
        margin-bottom: 5px;
    }
}

@media(max-width: 490px) {
    .list {
        padding: 2px;
    }

    .item {
        margin: 2px 5px;
        padding: 2px 4px;
    }

    .item h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .item p {
        font-size: 10px;
        color: black;
        margin-bottom: 5px;
        padding: 0px;
    }
    .item a {
        font-size: 10px;
        color: black;
        margin-bottom: 5px;
        padding: 0px;
    }
}




</style>