import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/consultar-todos',
      name: 'consultar-todos',
      component: () => import('../views/ConsultarTodosView.vue')
    },
    {
      path: '/consultar-por-id',
      name: 'consultar-por-id',
      component: () => import('../views/ConsultarPorIdView.vue')
    },
    {
      path: '/guardar',
      name: 'guardar',
      component: () => import('../views/GuardarView.vue')
    },
    {
      path: '/actualizar',
      name: 'actualizar',
      component: () => import('../views/ActualizarView.vue')
    },
    {
      path: '/actualizar-parcial',
      name: 'actualizar-parcial',
      component: () => import('../views/ActualizarParcialView.vue')
    },
    {
      path: '/eliminar',
      name: 'eliminar',
      component: () => import('../views/EliminarView.vue')
    }
  ]
})

export default router
