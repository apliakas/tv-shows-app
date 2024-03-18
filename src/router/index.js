import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/:genre',
      name: 'Category',
      props: true,
      component: () => import('../views/Category.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      props: true,
      component: () => import('../views/Detail.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('../views/Search.vue')
    }
  ]
})

export default router
