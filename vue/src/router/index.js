import { supabase } from '../supa/supabase'
import { createRouter, createWebHistory } from 'vue-router'
import Store from '../views/Store.vue'
import Login from '../views/login.vue'
import HomeView from '../views/HomeView.vue'
import CreateAcc from '../views/Create.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
