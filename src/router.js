import {createRouter, createWebHistory} from 'vue-router'

import Summary from '@/pages/Summary.vue'

const routes = [
  {
    path: '',
    redirect: '/1182'
  },
  {
    path: '/:id',
    name: 'Summary',
    component: Summary,
  }
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})