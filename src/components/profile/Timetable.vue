<script setup lang="ts">

import { computed, onMounted } from 'vue';
import { useTimetableStore } from '../../stores/TimetableStore';

const timetableStore = useTimetableStore();

onMounted(async () => {
    await timetableStore.getTimetable();

    console.log("Расписание", timetableStore.timetable);


});

const columnsActiveTableExample = [
{
    key: 'id',
    label: '№',
    _props: { scope: 'col' },
},
{
    key: 'subject',
    label: 'Предмет',
    _props: { scope: 'col' },
},
{
    key: 'start_time',
    label: 'Время',
    _props: { scope: 'col' },
},
{
    key: 'day',
    label: 'День недели',
    _props: { scope: 'col' },
},
]
const days = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье',
}

const itemsActiveTableExample = computed(() =>
  timetableStore.timetable.map((item, index) => ({
    id: index + 1,
    subject: item.lesson || '—',
    start_time: item.start_time + ' - ' + item.end_time,
    day: days[item.day_of_week] || '—',
  }))
)


</script>

<template>

<div class="timetable">

    <h2 v-if="timetableStore.isLoading">Загрузка..</h2>

    <div v-else class="list">
        <CTable bordered :columns="columnsActiveTableExample" :items="itemsActiveTableExample" />
    </div>
</div>
</template>
<style scoped>

.timetable {
    margin-top: 20px;
}

.list {
    max-width: 1000px;
    margin: 0 auto;
}
</style>