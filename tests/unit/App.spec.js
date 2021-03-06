import { shallowMount } from '@vue/test-utils';
import Component from '@/App.vue';

const factory = (data = {}, params = { gender: 'men' }, methods = {}) => {
  const options = {
    mocks: {
      $route: {
        params: {
          ...params,
        },
      },
    },
    methods,
    stubs: ['router-view'],
    data: () => ({ ...data }),
  };

  return shallowMount(Component, options);
};

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    }));
}

describe('App', () => {
  beforeEach(() => {
    delete global.environment;
    delete global.countryISO;

    global.fetch = mockFetch([{
      content: 'test',
    }]);
  });

  it('request content based on route.gender', () => {
    const wrapper = factory();

    global.environment = 'whatever';
    global.countryISO = 'countryCode';

    expect(wrapper.vm.contentPath('women')).toBe('/content/whatever/countrycode/women.json');
  });

  it('request a content file when component has mounted', () => {
    const getJSON = jest.fn();

    factory(null, undefined, { getJSON });

    expect(getJSON).toHaveBeenCalledTimes(1);
    expect(getJSON).toHaveBeenCalledWith('/content/live/gb/men.json', 'men');
  });

  it('request content on route change', () => {
    const getJSON = jest.fn();

    const wrapper = factory(null, undefined, { getJSON });

    wrapper.vm.$route.params.gender = 'women';

    expect(getJSON).toHaveBeenCalledTimes(2);
  });

  it('prevent making a network request once a gender key has content', () => {
    factory({
      content: {
        men: {
          content: 'test',
        },
        women: [],
      },
    });

    expect(fetch).toHaveBeenCalledTimes(0);
  });

  it('data will be fetched from server and assigned to a gender key in content', async () => {
    const wrapper = factory(null, { gender: 'women' });

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
      men: [],
      women: [
        {
          franchise: 'Pod',
          content: {
            test: true,
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
    const data = {
      content: {
        men: {
          content: 'test',
        },
        women: [],
      },
    };
    const route = {
      gender: 'men',
      franchise: null,
    };

    const wrapper = factory(data, route, { franchise });

    expect(wrapper.vm.servedContent).toEqual({
      content: 'test',
    });

    wrapper.vm.$route.params.franchise = 'pod';

    expect(franchise).toHaveBeenCalledTimes(1);
  });

  it('each franchise should have its own style hook', () => {
    const wrapper = factory(null, { franchise: 'Test Name' });

    expect(wrapper.vm.franchiseStyleHooks).toBe('test');
  });
});
