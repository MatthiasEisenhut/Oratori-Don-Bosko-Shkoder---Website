import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
// import CalendarView from '@/views/CalendarView.vue';
import PostsView from '@/views/PostsView.vue';
import FootballView from '@/views/FootballView.vue';
import ContactView from '@/views/ContactView.vue';
import AnimatorView from '@/views/AnimatorView.vue';
import AdminLoginView from '@/views/AdminLoginView.vue';
import OratoryView from '@/views/OratoryView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/oratory',
      name: 'oratory',
      component: OratoryView,
    },
    // {
    //   path: '/calendar',
    //   name: 'calendar',
    //   component: CalendarView,
    // },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView,
    },
    {
      path: '/football',
      name: 'football',
      component: FootballView,
    },
    {
      path: '/animators',
      name: 'animators',
      component: AnimatorView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLoginView,
    },
  ],
});

export default router;
