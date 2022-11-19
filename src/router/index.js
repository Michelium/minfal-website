import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PopcornView from '../views/PopcornView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/over-ons',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/popcornbeker',
      name: 'popcornbeker',
      component: PopcornView,
    }
  ]
})

export default router
