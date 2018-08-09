import { shallowMount, createLocalVue } from '@vue/test-utils';
import Component from '@/App.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

const factory = (data = {}, props = {}) =>
  shallowMount(Component, {
    localVue,
    router,
    data: () => ({ ...data }),
    propsData: {
      display: true,
      ...props,
    },
  });

describe('App', () => {
  it('homeContent should return mens data for /men', () => {
    const wrapper = factory();

    const route = {
      path: '/men',
    };

    expect(wrapper.vm.home(route)).toEqual({
      franchises: 'Men',
    });
  });

  it('homeContent should return womens data for /women', () => {
    const wrapper = factory();

    const route = {
      path: '/women',
    };

    expect(wrapper.vm.home(route)).toEqual({
      franchises: 'Women',
    });
  });

  it('franchiseContent should return correct data depending on route params', () => {
    const wrapper = factory();

    const route = {
      params: {
        gender: 'women',
        franchise: 'pod',
      },
    };

    const content = {
      men: [
        {
          franchise: 'pod',
          content: {
            test: true,
          },
        },
        {
          franchise: 'incorrect',
          content: {
            test: false,
          },
        },
      ],
      women: [
        {
          franchise: 'pod',
          content: {
            test: true,
          },
        },
        {
          franchise: 'incorrect',
          content: {
            test: false,
          },
        },
      ],
    };

    expect(wrapper.vm.franchise(route, content)).toEqual({
      content: {
        test: true,
      },
    });
  });
});
