import { createWebHistory, createRouter } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: "/",
          name: "login",
          component: LoginView
      },
      {
        path: "/register",
        name: "register",
        component: RegisterView
      },
      {
          path: "/dashboard/:id",
          name: "dashboard/:id",
          component: DashboardView
      },
 
  ]
})

export default router

