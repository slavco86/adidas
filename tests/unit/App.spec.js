import { shallowMount, createLocalVue } from '@vue/test-utils';
import Component from '@/App.vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

// fetch all data when mounted
// data should react to route change

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

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    }));
}

describe('App', () => {

  beforeEach(() => {
    global.fetch = mockFetch({
      content: 'test',
    });
  });

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

  it('getJSON should execute fetch request with json and apply it to vm.content', async () => {
    const wrapper = factory();

    global.fetch = mockFetch({
      content: 'test',
    });

    const result = await wrapper.vm.getJSON('test');

    expect(fetch).toHaveBeenCalledTimes(1);

    expect(result).toEqual({
      content: 'test',
    });

    expect(wrapper.vm.content).toEqual({
      content: 'test',
    });
  });

  it('should call getJson on mounted with correct path', () => {
    const getJSON = jest.fn();

    const $route = {
      params: {
        gender: 'men',
      },
    };

    shallowMount(Component, {
      mocks: {
        $route,
      },
      stubs: ['router-view'],
      methods: { getJSON },
    });

    expect(getJSON).toHaveBeenCalledTimes(1);
    expect(getJSON).toHaveBeenCalledWith('/content/men.json');
  });

  it('return correct path based on route params', () => {
    const wrapper = factory();

    expect(wrapper.vm.contentPath('women')).toBe('/content/women.json');
  });
});
