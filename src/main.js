import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFullPage from "vue-fullpage.js";

import "./registerServiceWorker";
import "@fortawesome/fontawesome-free/css/all.css";
import Collapse from "@/components/collapse/collapse";


Vue.use(VueFullPage);
Vue.component("Collapse", Collapse);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");