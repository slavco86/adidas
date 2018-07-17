<template>
  <div>
    <div
      v-if="switchEl"
      key="el">
      <Carousel
        v-if="enableCarousel && slides.length > 1"
        key = "carousel"
        ref="slider"
        :options="options"
        :slides="slides"
        @ready="emitReady"
        @transition-end="transitionEnd">
        <div slot-scope="{slide}">
          <slot :slide="slide"/>
        </div>
      </Carousel>
    </div>
    <div
      v-else
      class="slide-container">
      <div
        v-for="(slide, key) in slides"
        :key="key"
        class="slide">
        <slot :slide="slide"/>
      </div>
    </div>
  </div>
</template>

<script>
const Carousel = () =>
  import(/* webpackChunkName: "carousel" */ '@/components/Carousel.vue');

export default {
  components: {
    Carousel,
  },

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
    responsive: {
      type: Boolean,
      required: false,
      default: false,
    },
    breakpoint: {
      type: [Number, String],
      required: false,
      default: 765,
    },
    switchEl: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data() {
    return {
      breakpointX: this.breakpoint,
    };
  },

  computed: {
    enableCarousel() {
      if (this.responsive) {
        return parseInt(this.breakpointX, 10) >= window.innerWidth;
      }
      return true;
    },
  },

  methods: {
    toggleCarousel() {
      this.breakpointX = (this.breakpointX === 0) ? window.innerWidth + 1 : 0;
    },
    destroyCarousel() {
      this.$refs.slider.$children[0].swiper.destroy(false, false);
    },
    emitReady() {
      this.$emit('ready');
    },
    transitionEnd() {
      this.$emit('transition-end');
    },
  },
};
</script>
