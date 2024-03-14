import { createMemoryHistory, createRouter } from 'vue-router'

import LoginView from '../views/LoginView.vue'

import RegisterView from '../views/RegisterView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/register', component: RegisterView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

