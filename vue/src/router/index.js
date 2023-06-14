import { supabase } from '../supabase'
import { createRouter, createWebHistory } from 'vue-router'
import Store from '../views/Store.vue'
import Login from '../views/Login.vue'
import HomeView from '../views/HomeView.vue'
import CreateAcc from '../views/Create.vue'
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/createacc',
    component: CreateAcc
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/store',
    component: Store
  },
  {
    path: '/cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
