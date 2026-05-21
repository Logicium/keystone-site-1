import { createRouter, createWebHistory } from 'vue-router'
import { PLATFORM_ENABLED } from '../platform/config'
import { adminRoutes } from '../admin/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',         name: 'home',     component: () => import('../views/HomeView.vue') },
    { path: '/services', name: 'services', component: () => import('../views/ServicesView.vue') },
    { path: '/projects', name: 'projects', component: () => import('../views/ProjectsView.vue') },
    { path: '/contact',  name: 'contact',  component: () => import('../views/ContactView.vue') },
    ...(PLATFORM_ENABLED ? adminRoutes : []),
  ],
  scrollBehavior(_to, _from, saved) {
    if (saved) return saved
    if (_to.hash) return { el: _to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
