import { supabase } from '../supabase'
import { createRouter, createWebHistory } from 'vue-router'
import Store from '../views/Store.vue'
import Login from '../views/Login.vue'
import HomeView from '../views/HomeView.vue'
import CreateAcc from '../views/Create.vue'
import Request from '../views/RequestCard.vue'

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
    path: '/request',
    component: Request
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
