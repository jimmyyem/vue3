import { createRouter, createWebHistory } from 'vue-router'
import frontend from './frontend'

const routes = [
  {
    path: '/',
    children: [{ path: '', component: () => import('@/views/home') }],
  },
  {
    path: '/login',
    children: [{ path: '', component: () => import( '@/views/login') }],
  },
  {
    path: '/dashboard',
    children: [{ path: '', component: () => import( '@/views/dashboard') }],
  },
]

routes.concat(frontend)

export default createRouter({
  history: createWebHistory(),
  routes,
})