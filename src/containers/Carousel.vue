<template>
  <div>
    <transition
      name="switch"
      mode="out-in">
      <div
        v-if="switchEl"
        key="el">
        <Carousel
          v-if="enableCarousel && slides.length > 1"
          key = "carousel"
          ref="slider"
          :options="options"
          :slides="slides">
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
    </transition>
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
      console.info('hell yeah');
    },
    hello() {
      console.info('ello');
    },

  },
};
</script>

<style lang="scss" scoped>
  .switch-enter,
  .switch-leave-to {
    opacity: 0;
  }

  .switch-leave-active {
    transition: opacity 1s;

    &/deep/ .swiper-slide {
      margin-top: 2rem;
    }
  }

  .switch-enter-active {
    transition: opacity 1s;

    &/deep/ .swiper-slide-active {
      margin-top: 0;
    }
  }

  .switch-enter-to,
  .switch-leave {
    opacity: 1;
  }

  .slide-container {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem;

    /deep/ .slide {
      flex-basis: calc(50% - 1rem);
      margin: 0.5rem;
      transition: transform 0.5s;
    }
  }
</style>
