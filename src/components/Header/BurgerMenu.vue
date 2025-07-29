<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
const isMobile = ref(window.innerWidth <= 700)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 700
  if (!isMobile.value) closeMenu()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="burger-container" v-if="isMobile">
    <button class="burger-button" @click="toggleMenu">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>

    <div class="burger-overlay" v-show="isOpen" @click.self="closeMenu">
      <ul class="burger-menu">
        <li><RouterLink to="/variants" @click="closeMenu">Варианты</RouterLink></li>
        <li><RouterLink to="/plan" @click="closeMenu">План подготовки</RouterLink></li>
        <li><RouterLink to="/tasks" @click="closeMenu">Задания</RouterLink></li>
        <li><RouterLink to="/notes" @click="closeMenu">Конспекты</RouterLink></li>
        <li><RouterLink to="/help" @click="closeMenu">О приложении</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.burger-button {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  position: relative;
  margin: 1rem;
}

.burger-button span {
  height: 3px;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Анимация крестика */
.burger-button span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger-button span.open:nth-child(2) {
  opacity: 0;
}
.burger-button span.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Полноэкранный overlay */
.burger-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
}

/* Меню по центру */
.burger-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.burger-menu li {
  margin: 1.5rem 0;
}

.burger-menu a {
  font-size: 1.5rem;
  text-decoration: none;
  color: #333;
}

/* Плавность */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
