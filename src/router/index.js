import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import MyAccount from '../views/MyAccount.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path:'/myaccount',
    name:'MyAccount',
    component: MyAccount,
    meta:{
      requireLogin: true,
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next)=> {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated){
    next({name:'Login', query:{ to: to.path } });
  } else{
    next()
  }
})

export default router
