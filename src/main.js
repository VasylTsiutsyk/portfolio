import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import store from './store';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';

import '@/assets/style/index.scss';

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
