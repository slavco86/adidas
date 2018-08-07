import { mount } from '@vue/test-utils';
import Component from '@/components/Modal.vue';
import Picture from '@/components/Picture.vue';
import Titles from '@/components/Titles.vue';

const factory = (data = {}, props = {}) =>
  mount(Component, {
    data: () => ({ ...data }),
    propsData: {
      display: true,
      ...props,
    },
  });

describe('Modal', () => {
  it('should display when display prop set to true', () => {
    const wrapper = factory();
    expect(wrapper.find('.modal-mask').exists()).toBe(true);
    wrapper.setProps({
      display: false,
    });
    expect(wrapper.isEmpty()).toBe(true);
  });
  it('should change background color of modal-container when provided via props', () => {
    const wrapper = factory({}, {
      background: '#f00',
    });

    expect(wrapper.find('.modal-container').attributes().style).toBe('background-color: rgb(255, 0, 0);');
  });

  it('should set backgournd image instead of colour if provide via props', () => {
    const wrapper = factory({}, {
      background: '/test.jpg',
    });

    expect(wrapper.find('.modal-container').attributes().style).toBe('background-image: url(/test.jpg);');
  });

  it('should accept array of objects and render content', () => {
    const wrapper = factory({}, {
      content: [{
        component: 'Picture',
        content: {
          image: '/test.jpg',
        },
      },
      {
        component: 'titles',
        content: {
          headline: 'Hello World',
        },
      }],
    });

    expect(wrapper.vm.content.length).toBe(2);

    const content = wrapper.findAll('.modal-container > *');

    expect(content.length).toBe(2);
    expect(content.at(0).contains(Picture)).toBe(true);
    expect(content.at(1).contains(Titles)).toBe(true);
  });
  it('follow the order defined within content array', () => {
    const wrapper = factory({}, {
      content: [{
        component: 'titles',
        content: {
          headline: 'Hello World',
        },
      },
      {
        component: 'Picture',
        content: {
          image: '/test.jpg',
        },
      }],
    });

    expect(wrapper.vm.content.length).toBe(2);

    const content = wrapper.findAll('.modal-container > *');

    expect(content.length).toBe(2);
    expect(content.at(0).contains(Titles)).toBe(true);
    expect(content.at(1).contains(Picture)).toBe(true);
  });
  it('close button should emit a close event on click', () => {
    const wrapper = factory();
    expect(wrapper.find('.close').exists()).toBe(true);
    wrapper.find('.close').trigger('click');
  });
});
