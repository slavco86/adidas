import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Men from './content/men.json';

Vue.use(Router);

const Content = () => import(/* webpackChunkName: "page-content" */ './views/Content.vue');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: { franchises: Men },
    },
    {
      path: '/:gender/:franchise',
      name: 'colourways',
      component: Content,
    },
  ],
});
