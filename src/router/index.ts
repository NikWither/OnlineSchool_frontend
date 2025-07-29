import { createRouter, createWebHistory } from 'vue-router'


import Authorization from '../pages/Auth/Authorization.vue';
import ProfilePage from '../pages/Profile/ProfilePage.vue'
import Register from '../pages/Auth/Register.vue'
import NotesPage from '../pages/Notes/NotesPage.vue'
import HomePage from '../pages/Home/HomePage.vue';
import TasksPage from '../pages/Tasks/TasksPage.vue';
import PlanPage from '../pages/Plan/PlanPage.vue';
import HelpPage from '../pages/Help/HelpPage.vue';
// admin
import DashboardPage from '../pages/Admin/DashboardPage.vue';
import AdminStudentDetailPage from '../pages/Admin/AdminStudentDetailPage.vue';
import AdminCoursesPage from '../pages/Admin/AdminCoursesPage.vue';
import AdminNotesPage from '../pages/Admin/AdminNotesPage.vue';
import AdminTasksPage from '../pages/Admin/AdminTasksPage.vue';
import AdminUsersPage from '../pages/Admin/AdminUsersPage.vue';
import AdminVariantsPage from '../pages/Admin/AdminVariantsPage.vue';
import AdminAnalyticsPage from '../pages/Admin/AdminAnalyticsPage.vue';

import { useAuthStore } from '../stores/AuthStore';
import VariantsPage from '../pages/Variants/VariantsPage.vue';
import HomeWorkList from '../components/profile/HomeWorkList.vue';
import AdminLeadsPage from '../pages/Admin/AdminLeadsPage.vue';




const routes = [

  { path: '/', component: HomePage },
  // auth
  { path: '/login', component: Authorization },
  { path: '/register', component: Register },
  // users
  { path: '/profile', component: ProfilePage, meta: { requiresAuth: true } },
  { path: '/notes', component: NotesPage, meta: { requiresAuth: true } },
  { path: '/variants', component: VariantsPage, meta: { requiresAuth: true}},
  { path: '/plan', component: PlanPage, meta: { requiresAuth: true}},
  { path: '/tasks', component: TasksPage, meta: { requiresAuth: true}},
  { path: '/help', component: HelpPage, meta: { requiresAuth: true}},
  // admin
  { 
    path: '/dashboard', 
    component: DashboardPage, 
    children: [
      {path: '', component: AdminAnalyticsPage},
      {path: 'variants', component: AdminVariantsPage},
      {path: 'users', component: AdminUsersPage},
      {path: 'users/:id', component: AdminStudentDetailPage},
      {path: 'notes', component: AdminNotesPage},
      {path: 'courses', component: AdminCoursesPage},
      {path: 'tasks', component: AdminTasksPage},
      {path: 'leads', component: AdminLeadsPage},
    ]
  },  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next(from.path);
  } else {
    next();
  }
});

export default router
