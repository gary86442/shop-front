import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Launched_pView from '../views/Launched_pView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/launched_ps/:launched_p_id',
      name: 'product',
      component: Launched_pView
    }
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router
