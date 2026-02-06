import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiereAuth: false,
        esPublica: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/consultar-todos',
      name: 'consultar-todos',
      component: () => import('../views/ConsultarTodosView.vue'),

      meta: {
        requiereAuth: true,
        esPublica: false
      }
    },
    {
      path: '/consultar-por-id',
      name: 'consultar-por-id',
      component: () => import('../views/ConsultarPorIdView.vue'),
      meta: {
        requiereAuth: false,
        esPublica: false
      }
    },
    {
      path: '/guardar',
      name: 'guardar',
      component: () => import('../views/GuardarView.vue'),

      meta: {
        requiereAuth: false,
        esPublica: false
      }
    },
    {
      path: '/actualizar',
      name: 'actualizar',
      component: () => import('../views/ActualizarView.vue'),

      meta: {
        requiereAuth: true,
        esPublica: false
      }
    },
    {
      path: '/actualizar-parcial',
      name: 'actualizar-parcial',
      component: () => import('../views/ActualizarParcialView.vue'),

      meta: {
        requiereAuth: false,
        esPublica: false
      }
    },
    {
      path: '/eliminar',
      name: 'eliminar',
      component: () => import('../views/EliminarView.vue')
    }
  ]
})

/*Configuracion de guardias de rutas*/
router.beforeEach((to, from, next) => {
  const requiereAuth = to.meta.requiereAuth
  const estaAutenticado = localStorage.getItem('estaAutenticado')

  if (requiereAuth && !estaAutenticado) {
    console.log('A login')

    // Si la ruta requiere autenticación y el usuario no está autenticado,
    // redirigimos al usuario a la página de inicio de sesión o a otra ruta pública
    next({ name: 'login' })
  } else {
    console.log('Pase libre')

    // Si la ruta no requiere autenticación o el usuario está autenticado,
    // permitimos la navegación a la ruta solicitada
    next()
  }
})

export default router
