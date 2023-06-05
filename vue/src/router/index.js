import { supabase } from '../src/supabase.js'
import { createRouter, createWebHistory } from 'vue-router'
import Store from '../views/Store.vue'
import Login from '../views/login.vue'
import HomeView from '../views/HomeView.vue'
import CreateAcc from '../views/Create.vue'
let localUser

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
    component: Store,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
async function getUser(next) {
  localUser = await supabase.auth.getSession()
  if (localUser.data.session == null) {
    next('/error')
  } else {
    next()
  }
}
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    getUser(next)
  } else {
    next()
  }
})

export default router
