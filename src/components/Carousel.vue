<template>
  <div class="swiper-cont">
    <swiper
      ref="carousel"
      :options="options"
      :global-options="globalOptions"
      @images-ready="emitReady"
      @transition-end="transitionEnd"
      @slideChange="slideChange">

      <swiper-slide
        v-for="(slide, key) in slides"
        :key="key">
        <slot :slide="addKey(slide, key)" />
      </swiper-slide>

      <div
        v-if="options.pagination || globalOptions.pagination"
        slot="pagination"
        class="swiper-pagination"/>

      <div
        v-if="(options.navigation || globalOptions.navigation) ? '' : ''"
        slot="button-prev"
        class="swiper-button-prev"/>

      <div
        v-if="(options.navigation || globalOptions.navigation) ? '' : ''"
        slot="button-next"
        class="swiper-button-next"/>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  name: 'Carousel',
  components: { swiper, swiperSlide },
  inheritAttrs: false,

  props: {
    options: {
      default() {
        return {};
      },
      type: Object,
      required: false,
    },
    slides: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      globalOptions: {},
    };
  },

  updated() {
    this.$refs.carousel.swiper.update();
  },

  methods: {
    slideChange() {
      this.$emit('change');
    },
    emitReady() {
      this.$emit('ready');
    },

    transitionEnd() {
      this.$emit('transition-end');
    },

    addKey(slide, key) {
      return {
        ...slide,
        key,
      };
    },
  },
};
</script>
