import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import UserProfile from '../components/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: UserProfile
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
