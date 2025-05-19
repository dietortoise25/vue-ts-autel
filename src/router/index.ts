import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import MainLayout from '@/components/MainLayout.vue'

const routes = [
  { path: '/', component: HomeView },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'about',
        name: 'About',
        component: AboutView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
