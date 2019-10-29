import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import store from "./store/store.js";
import { service, request } from './utils/request.js';
Vue.prototype.$request = request;
Vue.prototype.$axios = service;
Vue.config.productionTip = false;
// 手势库
import AlloyFinger from 'alloyfinger';
import AlloyFingerVue from 'alloyfinger/vue/alloy_finger_vue.js';
Vue.use(AlloyFingerVue, { AlloyFinger:  AlloyFinger });

// css
import './style/base.scss';
import './style/reset.scss';
import './style/mixin.scss';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
