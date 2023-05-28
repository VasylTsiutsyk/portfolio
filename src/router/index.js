import Vue from 'vue';
import VueRouter from 'vue-router';

import { routeNames } from '@/constants';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: routeNames.home.index,
      component: () => import('@/pages/home/home.page.vue'),
      meta: {
        title: 'Hommme',
      },
    },
    {
      path: '/about',
      name: routeNames.about.index,
      component: () => import('@/pages/about/about.page.vue'),
      meta: {
        title: 'About Us',
      },
    },
    {
      path: '*',
      name: routeNames.notFound.index,
      component: () => import('@/pages/not-found/not-found.page.vue'),
      meta: {
        title: 'Not Found',
      },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
