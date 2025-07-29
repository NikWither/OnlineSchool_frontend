<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { api } from '../../api/api';
import { useProfileStore } from '../../stores/ProfileStore';
import HomeWorkList from '../../components/profile/HomeWorkList.vue';
import { RouterView, RouterLink } from 'vue-router';
import ExamsList from '../../components/profile/ExamsList.vue';
import Courses from '../../components/profile/Courses.vue';
import Timetable from '../../components/profile/Timetable.vue';

const profileStore = useProfileStore();

onMounted(async () => {
    await profileStore.getUserInfo();
})

</script>

<template>
    <h1>Почта: {{profileStore.userInfo.email}}</h1>
    <h1>Логин: {{profileStore.userInfo.name}}</h1>

    <div class="navigation">

        <div class="list">
            <CTabs :activeItemKey="1">
                <CTabList variant="tabs" layout="justified">
                    <CTab aria-controls="home-tab-pane" :itemKey="1">Домашка</CTab>
                    <CTab aria-controls="profile-tab-pane" :itemKey="2">Экзамены</CTab>
                    <CTab aria-controls="contact-tab-pane" :itemKey="3">Расписание</CTab>
                    <CTab aria-controls="disabled-tab-pane" :itemKey="4">Курсы</CTab>
                    <!-- disabled -->
                </CTabList>
                <CTabContent>
                    <CTabPanel class="py-3" aria-labelledby="home-tab-pane" :itemKey="1">
                        <HomeWorkList />
                    </CTabPanel>
                    <CTabPanel class="py-3" aria-labelledby="profile-tab-pane" :itemKey="2">
                        <ExamsList />
                    </CTabPanel>
                    <CTabPanel class="py-3" aria-labelledby="contact-tab-pane" :itemKey="3">
                        <Timetable />
                    </CTabPanel>
                    <CTabPanel class="py-3" aria-labelledby="disabled-tab-pane" :itemKey="4">
                        <Courses />
                    </CTabPanel>
                </CTabContent>
            </CTabs>
        </div>
    </div>
</template>