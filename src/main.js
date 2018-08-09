import Vue from 'vue';

import App from './App.vue';
import router from './router';

import './scss/styles.scss';

Vue.config.productionTip = false;

window.vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
