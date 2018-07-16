import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Social from './views/Social.vue';
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
      path: '/social',
      name: 'social',
      component: Social,
    },
    {
      path: '/colourways',
      name: 'colourways',
      component: Colourways,
    },
  ],
});
