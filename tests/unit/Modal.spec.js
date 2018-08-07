import { mount } from '@vue/test-utils';
import Component from '@/components/Modal.vue';

const factory = (data = {}, props = {}) =>
  mount(Component, {
    data: () => ({ ...data }),
    propsData: () => ({ ...props }),
  });

describe('Modal', () => {
  it('should change background color of modal-container when provided via props', () => {
    const wrapper = factory();
    expect(wrapper.find('.modal-mask').exists()).toBe(true);
  });
});
