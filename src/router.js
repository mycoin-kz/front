import {createRouter, createWebHistory} from 'vue-router'

import Summary from '@/pages/Summary.vue'

const routes = [
  {
    path: '',
    name: 'Summary',
    component: Summary,
    children: [
      {
        path: '/:id'
      }
    ]
  }
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})