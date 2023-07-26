import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Launched_pView from '../views/Launched_pView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
