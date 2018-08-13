import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const Content = () => import(/* webpackChunkName: "page-content" */ './views/Content.vue');
const SketchFabModel = () => import(/* webpackChunkName: "3dmodel" */ './views/SketchFabModel.vue');


const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/men',
    },
    {
      path: '/:gender',
      name: 'home',
      component: Home,
    },
    {
      path: '/:gender/:franchise',
      name: 'content',
      component: Content,
    },
    {
      path: '/:gender/:franchise/3d-view',
      name: '3d-view',
      component: SketchFabModel,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (/men|women/.test(to.params.gender)) {
    return next();
  }
  return next('/');
});

export default router;
