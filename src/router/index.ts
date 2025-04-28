import { createRouter, createWebHistory } from 'vue-router'

import Authorization from '../pages/Auth/Authorization.vue';
import ProfilePage from '../pages/Profile/ProfilePage.vue'
import Register from '../pages/Auth/Register.vue'
import NotesPage from '../pages/Notes/NotesPage.vue'
import { useAuthStore } from '../stores/auth';

const routes = [
  { path: '/login', component: Authorization },
  { path: '/register', component: Register },
  { path: '/profile', component: ProfilePage, meta: { requiresAuth: true } },
  { path: '/notes', component: NotesPage, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next(from.path);
  } else {
    next();
  }
});

export default router
