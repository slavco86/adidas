import Vue from 'vue';
import Router from 'vue-router';
import SketchFabModel from '@/views/SketchFabModel.vue';
import Modal from '@/components/Modal.vue';
import Home from './views/Home.vue';
import Men from './content/men.json';
import Women from './content/women.json';

Vue.use(Router);

const Content = () => import(/* webpackChunkName: "page-content" */ './views/Content.vue');

function homeContent(route) {
  return route.path === '/men' ? { franchises: Men } : { franchises: Women };
}

const content = { men: Men, women: Women };

function franchiseContent(route) {
  const { gender, franchise } = route.params;

  return { content: content[gender].filter(obj => obj.franchise === franchise).pop().content };
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/men',
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal,
      props: {
        display: true,
        background: '#f00',
        textColor: '#fff',
        content: [
          {
            component: 'titles',
            content: {
              headline: 'Hello World',
              subtext: 'lorems dfglkjdfhg\n\nlksdjfgh lkdsjfgh lsdkfgh ldfkjgh lksdfjgh kjdfgh',
            },
          },
          {
            component: 'Picture',
            content: {
              image: '/test.jpg',
            },
          },
        ],
      },
    },
    {
      path: '/:gender',
      name: 'home',
      component: Home,
      props: homeContent,
    },
    {
      path: '/:gender/:franchise',
      name: 'content',
      component: Content,
      props: franchiseContent,
    },
    {
      path: '/:gender/:franchise/3d-view',
      name: '3d-view',
      component: SketchFabModel,
      props: franchiseContent,
    },
  ],
});
