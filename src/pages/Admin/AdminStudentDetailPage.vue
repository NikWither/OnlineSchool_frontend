<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import { api } from '../../api/api'
    import { useAuthStore } from '../../stores/AuthStore'

    import PageTitle from '../../ui/PageTitle.vue'
    import ModalWin from '../../ui/ModalWin.vue'
    import HomeworkItem from '../../components/admin/HomeworkItem.vue'
    import HomeworkForm from '../../components/forms/HomeworkForm.vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const id = route.params.id as string


    interface Homework {
    id: number
    title: string
    homework: string
    }

    interface User {
    id: number
    name: string
    email: string
    homework: Homework[]
    }

    const studentInfo = ref<User | null>(null);
    const studentHomework = ref<Homework[]>([]);
    const studentName = ref('Без имени');
    const studentEmail = ref('Без почты');
    const isLoading = ref(true);
    const error = ref<string | null>(null);

    const getUserHomework = async (id: string) => {
    try {
            const response = await api.get(`/api/v1/admin/users/${id}`)
            if (response.status === 200) {
                studentInfo.value = response.data;
                studentHomework.value = response.data.homework;
                studentName.value = response.data.name;
                studentEmail.value = response.data.email;
            }
        } catch (err) {
            console.error(err);
            error.value = 'Не удалось загрузить данные ученика';
        } finally {
            isLoading.value = false;
        }
    }

    onMounted(() => {
    getUserHomework(id)
    })
</script>

<template>

  <div class="main">
    <p v-if="isLoading">Загрузка...</p>
    <p v-else-if="error">{{ error }}</p>
    <template v-else>
        
        <h2 class="main__name">Страница ученика {{ studentName }}</h2>
        <p class="main__email">Почта: {{ studentEmail }}</p>
        <p class="main__tg">Телеграмм: @example</p>

        <div class="homework">

            <div class="homework__tools">
                <h4 class="title">Домашнее задание</h4>
                <!-- <button class="button">Добавить ДЗ</button> -->
                <ModalWin
                    modal-title="Добавление Д/З"
                    modal-btn="Добавить Д/З"
                    :form="HomeworkForm"
                    @success="() => getUserHomework(id)"
                />
            </div>

            <div class="homework__list">
                <HomeworkItem
                    v-for="homework in studentHomework"
                    :key="homework.id"
                    :id="homework.id"
                    :title="homework.title"
                    :homework="homework.homework"
                />

            </div>

            <button class="load_more">Загрузить всю</button>
        </div>

        <div class="info">
            <div class="statistics">
                <h4 class="statistics__title">Статистика</h4>
            </div>

            <div class="timetable">

                <div class="homework__tools">
                    <h4 class="title">Расписание</h4>
                    <ModalWin
                        modal-title="Добавление Д/З"
                        modal-btn="Добавить Д/З"
                        :form="HomeworkForm"
                        @success="() => getUserHomework(id)"
                    />
                </div>

                <div class="homework__list">
                    <HomeworkItem
                        v-for="homework in studentHomework"
                        :key="homework.id"
                        :id="homework.id"
                        :title="homework.title"
                        :homework="homework.homework"
                    />

                </div>
            </div>
        </div>


    </template>

  </div>
</template>
