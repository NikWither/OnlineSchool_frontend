import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import CoreuiVue from '@coreui/vue'
// icon
// import { CIcon } from '@coreui/icons-vue'
import './styles/style.css'
import './styles/style.scss'
import './styles/reset.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(CoreuiVue);

app.mount('#app');
