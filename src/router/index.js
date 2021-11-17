import Vue from 'vue'
import VueRouter from 'vue-router'
import LOGIN from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LOGIN',
    component: LOGIN
  },
  {
    path: '/CITA',
    name: 'CITA',

    component: () => import('../views/Citas.vue')
  },
  {
    path: '/Servicios',
    name: 'Servicios',

    component: () => import('../views/Servicios.vue')
  },
  {
    path: '/Agendar',
    name: 'Agendar',

    component: () => import('../views/CitaAgendar.vue')
  },
  {
    path: '/VerServicios',
    name: 'Servicios_Cli',

    component: () => import('../views/ServiciosCli.vue')
  },
  {
    path: '/Citas_Ad',
    name: 'Citas_Ad',

    //component: () => import('../views/Citas_Ad.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
