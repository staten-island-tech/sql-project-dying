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
    component: Store,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const auth = pinia();
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    auth.currentUser === null
  ) {
    console.log(".");
    next("/login");
  } else {
    next();
  }
});

export default router
