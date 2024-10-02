const Home = () => import('./components/Home.vue')
const Contacto = () => import('./components/Contacto.vue')
//importamos los componentes para el blog
const Mostrar = () => import('./components/usuario/Mostrar.vue')
// const Crear = () => import('./components/usuario/Crear.vue')
// const Editar = () => import('./components/usuario/Editar.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'mostrarUsuarios',
        path: '/usuarios',
        component: Mostrar
    },
     {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    }
]