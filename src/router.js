import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Social from './views/Social.vue';

Vue.use(Router);

const Content = () => import(/* webpackChunkName: "page-content" */ './views/Content.vue');

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
      // Last modified by Ali Kayani on 11/07/2017
      // Enables the Colourways route to be loaded
      path: '/:franchise',
      name: 'colourways',
      component: Content,
    },
  ],
});
