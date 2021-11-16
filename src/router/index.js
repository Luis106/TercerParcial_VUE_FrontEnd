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
    path: '/HOME',
    name: 'HOME',

    component: () => import('../views/Home.vue')
  },
  {
    path: '/Servicios',
    name: 'Servicios',

    component: () => import('../views/Servicios.vue')
  },
  {
    path: '/Agendar',
    name: 'Agendar',

    //component: () => import('../views/Agendar.vue')
  },
  {
    path: '/Servicios_Ad',
    name: 'Servicios_Ad',

    //component: () => import('../views/Servicios_Ad.vue')
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
