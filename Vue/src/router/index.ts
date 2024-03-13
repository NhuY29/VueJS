import { createRouter, createWebHistory } from 'vue-router'
import Loginn from '../views/Loginn.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Loginn',
      component: Loginn
    },
  ]
})

export default router
