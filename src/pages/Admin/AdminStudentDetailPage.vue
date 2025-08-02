<script setup lang="ts">
    import Homework from '../../components/admin/detail/Homework.vue';
    import UserTest from '../../components/admin/detail/UserTest.vue';
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const id = route.params.id as string
</script>

<template>

  <div class="main">
    <CTabs :activeItemKey="2">
        <CTabList variant="tabs" layout="fill">
            <CTab aria-controls="home-tab-pane" :itemKey="1">Домашка</CTab>
            <CTab aria-controls="profile-tab-pane" :itemKey="2">Расписание</CTab>
            <CTab aria-controls="contact-tab-pane" :itemKey="3">Тесты</CTab>
            <CTab aria-controls="disabled-tab-pane" :itemKey="4">Статистика</CTab>
            <CTab aria-controls="disabled-tab-pane" :itemKey="5">Курсы</CTab>
        </CTabList>
        <CTabContent>
            <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
                <Homework :id="id"/>
            </CTabPanel>
            <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
                Расписание
            </CTabPanel>
            <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
                <UserTest :id="id"/>
            </CTabPanel>
            <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">Статистика</CTabPanel>
            <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="5">Курсы</CTabPanel>
        </CTabContent>
    </CTabs>
  </div>
</template>
