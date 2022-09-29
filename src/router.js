import Login from '@/pages/auth/login.vue'
import Register from '@/pages/auth/register.vue'
import ResetPass from '@/pages/auth/forgot_password.vue'

import Summary from '@/pages/Summary.vue'

import {createRouter, createWebHistory} from 'vue-router'
import {useStore} from '@/store'
import { useAuth } from './store/auth/token'


const routes = [
  {
    path: '',
    redirect: '/1182'
  },
  {
    path: '/:id',
    name: 'Summary',
    component: Summary,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      module: 'auth'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      module: 'auth'
    }
  },
  {
    path: '/reset_pass',
    name: 'ResetPass',
    component: ResetPass,
    meta: {
      module: 'auth'
    }
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach((to, from) => {
  to.params.id ? useStore().fetchData(to.params.id): useStore().fetchData()
  if (!useAuth().isAuthenticated && to.meta.module !== 'auth') {
    console.log('user not authenticated')
    return { name: 'Login' }
  }
  else if (useAuth().isAuthenticated && to.meta.module === 'auth'){
    return ''
    // console.log('isAuthenticated:', useAuth().isAuthenticated, 'token: ' + useAuth().token)
  }
  // next()
})