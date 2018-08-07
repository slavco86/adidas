<template>
  <transition
    v-if="display"
    name="modal">
    <div class="modal-mask">
      <div class="close" />
      <div
        :style="backgroundStyle"
        class="modal-container">
        <component
          v-for="(item, key) in content"
          :key="key"
          :is="item.component"
          v-bind="item.content"/>
      </div>
    </div>
  </transition>
</template>

<script>
import Picture from '@/components/Picture.vue';
import Titles from '@/components/Titles.vue';

export default {
  name: 'Modal',

  components: {
    Picture,
    Titles,

  },

  props: {
    background: {
      type: String,
      default: '#fff',
    },
    content: {
      type: Array,
      default: () => [],
    },
    display: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    backgroundStyle() {
      return (this.background[0] === '#')
        ? { backgroundColor: this.background }
        : { backgroundImage: `url(${this.background})` };
    },
  },
};


</script>

<style lang="scss" scoped>

.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  width: 100%;
  height: 100%;
  max-width: 830px;
  max-height: 580px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  text-align: center;
}

.close {
  position: absolute;
  top: 5%;
  right: 5%;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: blue;
}
</style>
