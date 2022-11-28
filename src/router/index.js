import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PopcornView from '../views/PopcornView.vue'
import RefillView from '../views/RefillView.vue'
import CirculairView from '../views/CirculairView.vue'
import ProductsView from '../views/ProductsView.vue'
import ContactView from '../views/ContactView.vue'

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
      name: 'over-ons',
      component: AboutView,
    },
    {
      path: '/popcornbeker',
      name: 'popcornbeker',
      component: PopcornView,
    },
    {
      path: '/minfal-refill',
      name: 'minfal-refill',
      component: RefillView,
    },
    {
      path: '/minfal-circulair',
      name: 'minfal-circulair',
      component: CirculairView,
    },
    {
      path: '/producten',
      name: 'producten',
      component: ProductsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    }
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
