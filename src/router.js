import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioWeb from './pages/FormularioWeb'
import TablaPage from './pages/TablaPage'


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: "/",
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
})