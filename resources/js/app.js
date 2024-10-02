import { createApp } from 'vue';
import App from './components/App.vue';
import '../css/app.css';

// Importar Axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// Importar y configurar Vue Router
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

// Crear una instancia del router
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

// Crear la app Vue
const app = createApp(App);

// Usar Vue Router y Axios
app.use(router);
app.use(VueAxios, axios);

// Montar la app en el elemento #app
app.mount('#app');
