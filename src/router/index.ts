import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Account from '../views/Account.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})

export default router