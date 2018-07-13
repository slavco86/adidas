import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Colourways from './views/Colourways.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      // Last modified by Ali Kayani on 11/07/2017
      // Enables the Colourways route to be loaded
      path: '/colourways',
      name: 'colourways',
      component: Colourways,
    },
  ],
});
