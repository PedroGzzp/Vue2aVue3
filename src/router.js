import { createRouter, createWebHistory} from 'vue-router'
import FormularioWeb from './pages/FormularioWeb.vue'
import TablaPage from './pages/TablaPage.vue'

const routes = [
  {
    path: '/',
    redirect: "/altaAlumnos",
  },
  {
    path: '/altaAlumnos',
    name: 'altaAlumnos',
    component: FormularioWeb
    },
    {
        path: '/listadoAlumnos',
        name: 'listadoAlumnos',
        component: TablaPage
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router