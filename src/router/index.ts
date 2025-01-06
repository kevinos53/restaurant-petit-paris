import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes= [

  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
  {
path:'/contact',
name: 'contact',
component: () => import ('../views/ContactView.vue'),
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import ('../views/MenuView.vue'),
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: () => import ('../views/ReservationView.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
export default router
