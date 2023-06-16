import Vue from 'vue';

import { ValidationProvider, ValidationObserver } from 'vee-validate';
import VueMeta from 'vue-meta';
import VueFullPage from 'vue-fullpage.js';
import App from './App.vue';
import store from './store';
import router from './router';
import Collapse from '@/pages/home/sections/collapse/collapse.vue';
import '@fortawesome/fontawesome-free/css/all.css';

import '@/assets/style/index.scss';

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

Vue.use(VueFullPage);
Vue.component('VCollapse', Collapse);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
