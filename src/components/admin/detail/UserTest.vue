<script setup lang="ts">
import { onMounted, ref, defineProps, computed } from 'vue';
import { api } from '../../../api/api';

const props = defineProps<{id: string}>();

const usersTest = ref();

const getUserTests = async (id: string) => {
    try {
        const response = await api.get(`/api/v1/admin/user-test/${id}`);
        if (response.status === 200) {
            usersTest.value = response.data;
            console.log("usersTest", usersTest.value)
        } 
    } catch (err) {
        console.error(err);
    }
}

const columns = [
    { key: 'number', label: '№' },
    { key: 'test', label: 'Название' },
    { key: 'status', label: 'Статус' },
    { key: 'created_at', label: 'Создано' },
    { key: 'updated_at', label: 'Выдано' },
];

const formattedTests = computed(() =>
    (usersTest.value || []).map((item: any, index: number) => ({
        number: index + 1,
        test: item.test,
        status: item.status,
        created_at: item.created_at,
        updated_at: item.updated_at,
    }))
)

const statusOptions = [
  { value: 'not_available', label: 'Недоступен' },
  { value: 'in_progress', label: 'В процессе' },
  { value: 'passed', label: 'Сдан' },
  { value: 'failed', label: 'Завален' },
];

const updateStatus = async (testId: number, newStatus: string) => {
  try {
    const response = await api.patch(`/api/v1/admin/user-test/${testId}`, {
      status: newStatus,
    });
    if (response.status === 200) {
      console.log(`Статус теста ${testId} обновлён`);
    }
  } catch (err) {
    console.error('Ошибка при обновлении статуса', err);
  }
};




onMounted(() => {
getUserTests(props.id)
})


</script>

<template>

    <div class="test">
        <div class="statistics">
            <h4 class="statistics__title">Тесты</h4>
            <table class="table table-bordered table-hover table-striped w-100">
                <thead>
                    <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Статус</th>
                    <th>Создано</th>
                    <th>Выдано</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in usersTest" :key="item.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.test }}</td>
                        <td>
                            <select
                                class="form-select"
                                v-model="item.status"
                                @change="updateStatus(item.id, item.status)"
                                >
                                <option v-for="option in statusOptions" :key="option.value" :value="option.value">
                                    {{ option.label }}
                                </option>
                            </select>
                        </td>
                        <td>{{ item.created_at }}</td>
                        <td>{{ item.updated_at }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<style scoped></style>

