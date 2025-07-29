<script setup lang="ts">

import { CCard, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    id: Number,
})

</script>

<template>
    <CCard class="w-75">
        <CCardBody>
            <CCardTitle>{{props.title}}</CCardTitle>
            <CCardText>With supporting text below as a natural lead-in to additional content.</CCardText>
            <CButton color="primary" href="#">
                <RouterLink :to="`/notes/${props.id}`">Читать</RouterLink>
            </CButton>
        </CCardBody>
    </CCard>
</template>