<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header/Header.vue';
import HelloWorld from './components/HelloWorld.vue'


</script>

<template>
  <div class="container">
    <Header />
    
    <div class="wrapper">
       <RouterView />
    </div>
  </div>
</template>
