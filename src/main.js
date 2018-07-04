import Vue from 'vue';
import Inview from 'vueinview';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Inview);

Inview.threshold(1);
Inview.offset(100);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
