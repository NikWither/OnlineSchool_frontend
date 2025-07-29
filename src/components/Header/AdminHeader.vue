<script setup lang="ts">

import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="adminheader">
        <ul class="adminheader__nav">
            <li class="item">
                <RouterLink to="/dashboard">Админ панель</RouterLink>
            </li>
        </ul>
    </div>
</template>