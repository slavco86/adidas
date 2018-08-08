<template>
  <picture v-lazy-container>
    <source v-if="responsiveImg" :srcset="image.desktop" media="(min-width: 765px)">
    <img :data-src="sourceImage" class="lazy">
  </picture>
</template>
<script>
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0724/ak-noimage-ea990d800bfe864557ea447c30a6d426.jpg',
  // loading: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0724/45-cc606005dffea8a2c350eed9a0532e3e.svg',
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: ['scroll'],
});

export default {
  name: 'Picture',
  props: {
    image: {
      type: [Object, String],
      default: '',
    },
  },
  computed: {
    sourceImage() {
      return this.image.mobile || this.image.desktop || this.image;
    },

    responsiveImg() {
      if (this.image.desktop && this.image.mobile) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
img {
  display: block;
  width: 100%;
}
</style>
