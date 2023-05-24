import Vue from 'vue';
import VueRouter from 'vue-router';

import { routeNames } from '@/constants';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/designs',
      name: routeNames.designs.index,
      component: () => import('@/pages/home/home.page.vue'),
      meta: {
        theme: 'dark',
      },
    },
    {
      path: '/designs/:id?',
      name: routeNames.designs.details,
      component: () => import('@/pages/home/add-create-design-page/add-create-design.page.vue'),
      meta: {
        theme: 'light',
      },
    },
    {
      path: '/designs/add',
      name: routeNames.designs.add,
      component: () => import('@/pages/home/add-create-design-page/add-create-design.page.vue'),
      meta: {
        theme: 'light',
      },
    },
    {
      path: '*',
      name: routeNames.notFound.index,
      component: () => import('@/pages/not-found/not-found.page.vue'),
      meta: {
        theme: 'light',
      },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
