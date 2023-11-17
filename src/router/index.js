import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/pages/home/home.page.vue';

import { routeNames } from '@/constants';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: routeNames.home.index,
      component: HomePage,
      meta: {
        title: 'Home',
      },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
