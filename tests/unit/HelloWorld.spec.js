import { shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Router from '@/router.js';


// This test checks that the router arrar contains three routes.
describe('router.js', () => {
  const tempArray = Router.options.routes.length;
  it('should contain three routes', () => {
    expect(tempArray).toBe(3);
  });
});
