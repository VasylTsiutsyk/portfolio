import Vue from 'vue';

import { ValidationProvider, ValidationObserver } from 'vee-validate';
import App from './App.vue';
import store from './store';
import router from './router';

import '@/assets/style/index.scss';
import '@/utils/validation-rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
