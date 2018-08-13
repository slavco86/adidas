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

  it('request content based on route.gender', () => {
    const wrapper = factory();

    expect(wrapper.vm.contentPath('women')).toBe('/content/women.json');
  });

  it('request a content file when component has mounted', () => {
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
    expect(getJSON).toHaveBeenCalledWith('/content/men.json', 'men');
  });

  it('request content on route change', () => {
    const getJSON = jest.fn();

    const $route = {
      params: {
        gender: 'men',
      },
    };

    const wrapper = shallowMount(Component, {
      mocks: {
        $route,
      },
      methods: { getJSON },
      stubs: ['router-view'],
    });

    wrapper.vm.$route.params.gender = 'women';

    expect(getJSON).toHaveBeenCalledTimes(2);
  });

  it('prevent making a network request once a gender key has content', () => {
    const $route = {
      params: {
        gender: 'men',
        franchise: null,
      },
    };

    shallowMount(Component, {
      mocks: {
        $route,
      },
      stubs: ['router-view'],
      data: () => ({
        content: {
          men: {
            content: 'test',
          },
          women: [],
        },
      }),
    });

    expect(fetch).toHaveBeenCalledTimes(0);
  });

  it('data will be fetched from server and assigned to a gender key in content', async () => {
    const $route = {
      params: {
        gender: 'women',
      },
    };

    const wrapper = shallowMount(Component, {
      mocks: {
        $route,
      },
      stubs: ['router-view'],
    });

    global.fetch = mockFetch({
      content: 'test',
    });

    const result = await wrapper.vm.getJSON('foo', 'women');

    expect(fetch).toHaveBeenCalledTimes(1);

    expect(result).toEqual({
      content: 'test',
    });

    expect(wrapper.vm.content).toEqual({
      men: [],
      women: {
        content: 'test',
      },
    });
  });

  it('content will be filtered based on the franchise url parameter', () => {
    const wrapper = factory();

    const route = {
      params: {
        gender: 'women',
        franchise: 'pod',
      },
    };

    const content = {
      men: [
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
      test: true,
    });

    route.params.gender = 'men';

    expect(wrapper.vm.franchise(route, content)).toEqual({});
  });

  it('filter content based on url change in route.franchise', () => {
    const franchise = jest.fn();

    const $route = {
      params: {
        gender: 'men',
        franchise: null,
      },
    };

    const wrapper = shallowMount(Component, {
      mocks: {
        $route,
      },
      methods: { franchise },
      stubs: ['router-view'],
      data: () => ({
        content: {
          men: {
            content: 'test',
          },
          women: [],
        },
      }),
    });

    expect(wrapper.vm.servedContent).toEqual({
      content: 'test',
    });

    wrapper.vm.$route.params.franchise = 'pod';

    expect(franchise).toHaveBeenCalledTimes(1);
  });
});
