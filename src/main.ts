import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/style.css'
import './styles/style.scss'
import './styles/reset.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
