import Vue from 'vue';
import Router from 'vue-router';
import SketchFabModel from '@/views/SketchFabModel.vue';
import Home from './views/Home.vue';

Vue.use(Router);

const Content = () => import(/* webpackChunkName: "page-content" */ './views/Content.vue');


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/men',
    },
    {
      path: '/:gender',
      name: 'home',
      component: Home,
      // props: homeContent,
    },
    {
      path: '/:gender/:franchise',
      name: 'content',
      component: Content,
      // props: franchiseContent,
    },
    {
      path: '/:gender/:franchise/3d-view',
      name: '3d-view',
      component: SketchFabModel,
      // props: franchiseContent,
    },
  ],
});
