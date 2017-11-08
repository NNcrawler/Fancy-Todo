// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from 'axios';
import Vue from 'vue';
import App from './App';
import router from './router';
import vuex from './vuex/store';

Vue.use(vuex);

axios.defaults.baseURL = 'http://localhost:3000/';

Vue.config.productionTip = false;

Vue.prototype.$request = axios;
Vue.prototype.$store = vuex;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
