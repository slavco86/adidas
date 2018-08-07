import { mount } from '@vue/test-utils';
import Component from '@/components/Modal.vue';

const factory = (data = {}, props = {}) =>
  mount(Component, {
    data: () => ({ ...data }),
    propsData: () => ({ ...props }),
  });

describe('Modal', () => {
  it('should have a div with class og modal-mask', () => {
    const wrapper = factory();
    expect(wrapper.find('.modal-mask').exists()).toBe(true);
  });
});
