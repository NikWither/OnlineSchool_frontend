<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import { api } from '../../../api/api';
import ModalWin from '../../../ui/ModalWin.vue';
import HomeworkItem from '../HomeworkItem.vue';
import HomeworkForm from '../../forms/HomeworkForm.vue';

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

const props = defineProps<{id: string}>();

const studentInfo = ref<User | null>(null);
const studentHomework = ref<Homework[]>([]);
const error = ref<string | null>(null);
const isLoading = ref(true);

const getUserHomework = async (id: string) => {
    try {
        const response = await api.get(`/api/v1/admin/users/${id}`)
        if (response.status === 200) {
            studentInfo.value = response.data;
            studentHomework.value = response.data.homework;
            console.log("HOMEWORK", studentHomework.value);
        }
    } catch (err) {
        console.error(err);
        error.value = 'Не удалось загрузить данные ученика';
    } finally {
        isLoading.value = false;
    }
}

onMounted(() => {
    getUserHomework(props.id);
})

</script>

<template>

    <div class="homework">

        <div class="homework__tools">
            <h4 class="title">Домашнее задание</h4>
            <ModalWin
                modal-title="Добавление Д/З"
                modal-btn="Добавить Д/З"
                :form="HomeworkForm"
                @success="() => getUserHomework(props.id)"
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

</template>

<style scoped></style>