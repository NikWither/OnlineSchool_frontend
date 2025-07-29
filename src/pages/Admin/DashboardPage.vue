<script setup lang="ts">
import { onMounted } from 'vue';
import PageTitle from '../../ui/PageTitle.vue';
import UserItem from '../../components/admin/UserItem.vue';

import { useStudentsStore } from '../../stores/StudentsStore';
import { CIcon } from '@coreui/icons-vue';
import { cilHome } from '@coreui/icons'; // <-- ВАЖНО
import { RouterView } from 'vue-router';
import SidebarAdmin from '../../components/admin/SidebarAdmin.vue';

const studentsStore = useStudentsStore();

onMounted(async () => {
  await studentsStore.getStudents();
});
</script>
<template>
    <div class="admin">
        <PageTitle title="Администратор"/>

        <div class="section">
            <SidebarAdmin />
            <RouterView />
        </div>
    </div>
</template>