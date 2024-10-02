import Registro from './components/Registro.vue'
import Login from './components/Login.vue';
import Notas from './components/Notas.vue';
import CrearNota from './components/CrearNota.vue'; 
import EditarNota from './components/EditarNota.vue';

export const routes = [
    {
        name: 'login',
        path: '/',
        component: Login
    },
    {
        name: 'registro',
        path: '/registro',
        component: Registro
    },
    {
        name: 'notas',
        path: '/notas',
        component: Notas
    },
    {
        name: 'crearNota',
        path: '/notas/crear',
        component: CrearNota 
    },
    {
        name: 'editarNota',
        path: '/notas/editar/:id',
        component: EditarNota 
    }
]