<script setup lang='ts'>
import { ref } from 'vue';
import PageTitle from '../../ui/PageTitle.vue';
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from '@coreui/vue'
import Footer from '../../components/Footer/Footer.vue';
import LeadForm from '../../components/forms/LeadForm.vue';

const activeItem = ref(0)
</script>
<template>

        <div class="hero">

                <img src="/public//images/banner.jpg" alt="Подготовка к ЕГЭ по информатике"  title="Репетитор по информатике — Всеволод Цаплин">
                <h1>Информатика и программирование - просто и понятно</h1>
                <p>Подготовка к ОГЭ и ЕГЭ с репетитором-практиком</p>

                <a class="to_contact" href="#signup">Записаться!</a>
        </div>

        <h3 class="section__title">Обо мне</h3>

        <div class="about_us">

                <div class="wrapper">
                        <div class="info">

                                <div class="info__text">
                                        <h4>Здравствуйте!</h4>

                                        <p>Меня зовут Всеволод, я репетитор по информатике.</p>

                                        <p>Окончил высшее учебное заведение на математическом факультете.</p>

                                        <p>Работаю Fullstack-разработчиком в IT компании.</p>

                                        <p>Выпустил и подготовил ровно 51 студента из разных городов России.</p>

                                        <p>Автор научных статей по применению информационных технологий в экономике.</p>
                                </div>

                                <div class="info__img">
                                        <img src="/images/my_photo.jpg" alt="Всеволод Цаплин — репетитор по информатике" title="Всеволод Цаплин — репетитор по информатике">
                                </div>
                        </div>
                </div>


        </div>

        <h3 class="section__title">Об уроках</h3>

        <div class="about_lessons">

                <div class="wrapper">

                        <div class="list">
                                <div class="card">
                                        <h2>Удобный формат</h2>
                                        <p>Все уроки проходят в дистанционном формате.</p>
                                </div>

                                <div class="card">
                                        <h2>План урока</h2>
                                        <p>30% теории, 70% практики на понимание, а не зубрежку.</p>
                                </div>

                                <div class="card">
                                        <h2>Домашка и экзамены</h2>
                                        <p>Да, я задую домашнюю работу, но в пределах разумного. Помимо этого, каждый месяц выдаю контрольную работу, для закрепления навыков.</p>
                                </div>
                                
                                <div class="card">
                                        <h2>Индивидуальная программа</h2>
                                        <p>Я не фанат ежегодных сборников, поэтому идём по моему плану, который подстраивается под каждого ученика и его цели.</p>
                                </div>

                                <div class="card">
                                        <h2>Любая платформа</h2>
                                        <p>Яндекс телемост, Telegram, Discord, Zoom и другие.</p>
                                </div>
                        
                                <div class="card">
                                        <h2>Мотивация</h2>
                                        <p>Докажу, что учёба и подготовка - это не скучно.</p>
                                </div>

                                <div class="card big">
                                        <h2>Вы получите не только уроки!</h2>
                                        <p>В этом году мною была разработана платформа, на которой мои ученики смогут заниматься и вне занятий. Я уверен, что платформа способна повысить эффективность подготовки.</p>
                                </div>
                        </div>
                </div>
        </div>

        <h3 class="section__title">О возможностях платформы</h3>

        <div class="about_possible">
                <div class="wrapper">

                        <div class="list">
                                <div class="card">
                                        <h2>Программирование</h2>
                                        <p>Всем своим ученикам - бесплатный курс по Python с нуля для ЕГЭ. Курс представляет из себя видеоуроки, длительность курса более 4-х часов.</p>
                                </div>

                                <div class="card">
                                        <h2>Контроль</h2>
                                        <p>На платформе в личном кабинете ученик сможет видеть свой прогресс и понимать, на каком уровне он находится.</p>
                                </div>

                                <div class="card">
                                        <h2>Актуальные материалы</h2>
                                        <p>Актуальные конспекты, задания, варианты. Здесь же, публикую только проверенные, актуальные сборники. Доступны всем зарегистрированным пользователям. </p>
                                </div>

                                
                                <div class="card">
                                        <h2>Дополнительные уроки</h2>
                                        <p>Для своих учеников провожу бесплатный вебинар раз в полторы недели, на котором разбираю по одному заданию со всеми подтипами и тонкостями (ЕГЭ, запись доступна).</p>
                                </div>

                        </div>

                </div>
        </div>

        <h3 class="section__title">Результаты</h3>

        <div class="results">

                <div class="wrapper">

                        <div class="list">

                                <div class="list__first">
                                        <div class="card">
                                                <h2>51</h2>
                                                <p>Кол-во студентов</p>
                                        </div>

                                        <div class="card">
                                                <h2>80.5</h2>
                                                <p>Средний балл за 2025 год</p>
                                        </div>
                                        
                                        <div class="card">
                                                <h2>92</h2>
                                                <p>Максимальный балл</p>
                                        </div>
                                </div>

                                <div class="list__second">
                                        <div class="card">
                                                <h2>МГТУ, ИТМО, УрФУ, НГУ и другие</h2>
                                                <p>Именно в такие ВУЗы, поступили мои ученики на IT специальности.</p>
                                        </div>
                                        <div class="card">
                                                <h2>С нуля и до нужного уровня</h2>
                                                <p>Очень много ребят приходят с низкими знаниями, а выпускаются подготовленные к ВУЗам.</p>
                                        </div>
                                </div>

                                
                        </div>
                </div>
        </div>

        <h3 class="section__title">Цены</h3>
        
        <div class="prices">
                <div class="wrapper">

                        <div class="list">

                                <div class="list__section">
                                        <h2>Единоразовые занятия</h2>

                                        <div class="wrapper">

                                                <div class="card">
                                                        <h2>1400 рублей</h2>
                                                        <p class="short_desc">Индивидуальное занятие 60 минут</p>
                                                        <p class="long_desc">Оплата через интернет эквайринг на сайте.</p>
                                                </div>

                                                <div class="card">
                                                        <h2>1000 рублей</h2>
                                                        <p class="short_desc">Парное занятие 90 минут</p>
                                                        <p class="long_desc">Оплата через интернет эквайринг на сайте.</p>
                                                </div>
                                        </div>
                                </div>

                                <div class="list__section">
                                        <h2>Абонементы</h2>

                                        <div class="wrapper">
                                                <div class="card">
                                                        <h2>5200 рублей</h2>
                                                        <p class="short_desc">Абонемент, 4 занятия</p>
                                                        <p class="long_desc">Действует скидка, каждое занятие выходит в 1300 рублей. Каждый урок 60 минут. Отличный вариант на месяц. Оплата происходит заранее, переводом на налоговую карту.</p>
                                                </div>

                                                <div class="card">
                                                        <h2>10.000 рублей</h2>
                                                        <p class="short_desc">Абонемент, 8 занятий</p>
                                                        <p class="long_desc">Действует скидка, каждое занятие выходит в 1250 рублей. Каждый урок 60 минут. Идеальный вариант на месяц или два. Оплата происходит заранее, переводом на налоговую карту.</p>
                                                </div>
                                        </div>
                                </div>

                                <div class="list__section">
                                        <h2 class="t-c">Многофункциональный абонемент</h2>

                                        <div class="wrapper">
                                                <div class="card big">
                                                        <h2>10.000 рублей</h2>
                                                        <p class="short_desc">Абонемент, индивидуальные и групповые занятия</p>
                                                        <p class="long_desc">Самый выгодный абонемент. 2 занятия в неделю: одно индивидуальное (60 минут), одно групповое (парное, 90 минут). В месяц получается 10 часов занятий.</p>
                                                </div>
                                        </div>

                                </div>



                        </div>
                </div>
        </div>


        <h3 id="signup" class="section__title">Связь со мной, ответы на вопросы или запись</h3>
        <div class="contact">
                <div class="wrapper">
                        <div class="list">
                                <a class="item" target="_blank" href="https://t.me/vsevolodrepit">
                                        <img width="100" height="100" src="/images/telegram.png" alt="telegram" title="telegram">
                                </a>

                                <a class="item" target="_blank" href="https://wa.me/89821007950">
                                        <img width="100" height="100" src="/images/whatsapp.png" alt="whats app" title="whats app">
                                </a>
                        </div>
                </div>
        </div>

        <h3 class="section__title">Ответы на вопросы</h3>

        <div class="faq">
                <div class="wrapper">
                        <CAccordion :active-item-key="2" always-open>
                                <CAccordionItem :item-key="1">
                                        <CAccordionHeader>Сдавали ли Вы ЕГЭ?</CAccordionHeader>
                                        <CAccordionBody>
                                                <strong>Да, я сдавал экзамен в 2021 году.</strong> Информатику я написал на 94 балла, математика 84 балла. С момента моей сдачи шкала оценки и экзамен сильно поменялись, но на текущий год это было бы примерно 96 и 88 соответственно. 
                                        </CAccordionBody>
                                </CAccordionItem>

                                <CAccordionItem :item-key="2">
                                        <CAccordionHeader>Удобны ли дистанционные занятия?</CAccordionHeader>
                                        <CAccordionBody>
                                                <strong>Да, в этом я уверен.</strong> В 2022 году, когда я начинал свою карьеру репетитором, у меня было 2 ученика, кто приходил очно. В течении года оба перешли на удаленный формат, т.к. им оказалось это намного удобнее, чем куда-то ездить.
                                        </CAccordionBody>
                                </CAccordionItem>

                                <CAccordionItem :item-key="3">
                                        <CAccordionHeader>Берите ли Вы ребят с нуля?</CAccordionHeader>
                                        <CAccordionBody>
                                                <strong>Да, мне не важно, с каким уровнем приходит ученик, мне важно, с каким он уходит.</strong> Однако я прекрасно знаю, как ведут информатику в школе, поэтому моя программа затронет все тонкости экзамена от и до.
                                        </CAccordionBody>
                                </CAccordionItem>

                                <CAccordionItem :item-key="4">
                                        <CAccordionHeader>Удобны ли групповые занятия?</CAccordionHeader>
                                        <CAccordionBody>
                                                <strong>Да, и многим это нравится.</strong> Групповые занятия - максимум два человека, но если участники друзья или хотят заниматься втроем - можно и так, все случаи рассматриваем. Групповые занятия идут дольше, поэтому внимание получит каждый. Каждый из участников может увидеть ошибки другого, либо наоборот, подсказать.
                                        </CAccordionBody>
                                </CAccordionItem>
                        
                                <CAccordionItem :item-key="5">
                                        <CAccordionHeader>Как формируются группы?</CAccordionHeader>
                                        <CAccordionBody>
                                                <strong>Большой приоритет отдаю ученику: лучше, чтобы ребята знали друг друга и сразу приходили вдвоем с одинаковой целью.</strong> Если же ученик не нашёл единомышлника, то придется подождать, когда я смогу подобрать пару.
                                        </CAccordionBody>
                                </CAccordionItem>

                                <CAccordionItem :item-key="6">
                                        <CAccordionHeader>Как Вы относитесь к отменам занятий (индивидуальные занятия)? </CAccordionHeader>
                                        <CAccordionBody>
                                                <strong>Не поощряю, но вхожу в положение.</strong> Если занятие отменили за 24 часа, то оно перенесется, время подберем. Если отмена за час/два и так далее, а также происходит впервые - урок перенесем, но если это происходит регулярно - занятие, которое отменилось необходимо оплатить. Будем уважать время друг друга.
                                        </CAccordionBody>
                                </CAccordionItem>

                                <CAccordionItem :item-key="7">
                                        <CAccordionHeader>Отмены групповых занятий</CAccordionHeader>
                                        <CAccordionBody>
                                                <strong>Ситуация, аналогичная индивидуальным.</strong> Я провожу занятия только вдвоем. Если у одного ученика не получилось прийти - занятие сократится до 60 минут, вместо 90. Если происходит регулярно - необходимо будет оплатить занятие, на которое ученик не смог прийти, либо расформировать группы и перейти на индивидуальные занятия.
                                        </CAccordionBody>
                                </CAccordionItem>

                                <CAccordionItem :item-key="8">
                                        <CAccordionHeader>Помогаете ли Вы поступать заграницу?</CAccordionHeader>
                                        <CAccordionBody>
                                                <strong>Да, был один успешный кейс, ученица поступала в Торонто.</strong> Такой случай рассматриваем индивидуально, стоимость может поменятся, а также, надеюсь, что ученик придет с высоким уровнем английского или другого иностранного языка.
                                        </CAccordionBody>
                                </CAccordionItem>

                                <CAccordionItem :item-key="9">
                                        <CAccordionHeader>Из чего формируется цена занятий?</CAccordionHeader>
                                        <CAccordionBody>
                                                <strong>Я прекрасно понимаю, что моя цена - выше среднего.</strong> Однако в стоимость я вложил: свой опыт, преподаю я не первый год, а также плата за обслуживание платформы. Каждый месяц я оплачиваю сервера, чтобы платформа работала бесперебойно и была доступна в сети интернет (это недешёвое удовольствие). Помимо этого, я проверяю Д/З, снимаю видеоролики для учеников, составляю варианты, задания и конспекты, а также плачу налоги :) 
                                        </CAccordionBody>
                                </CAccordionItem>
                        </CAccordion>
                </div>
        </div>

        <h3 class="section__title">Остались вопросы?</h3>

        <div class="feedback">
                <div class="wrapper">
                        <div class="list">
                                <div class="image image-form">
                                        <img src="/images/feedback.png" alt="">
                                </div>

                                <div class="feedback-form">
                                        <LeadForm />
                                </div>
                        </div>
                </div>
        </div>

        

</template>

<style>
.accordion-button:not(.collapsed) {
  background-color: rgb(206 203 233) !important;
  color: black !important;
}

@media(max-width: 650px) {
        .image-form {
                display: none;
        }
}

.to_contact {
        margin-top: 15px;
        font-size: 25px;
        padding: 10px 15px;
        background-color: rgb(206 203 233);
        border: 1px solid rgb(181, 176, 226);
        border-radius: 15px;
}
</style>