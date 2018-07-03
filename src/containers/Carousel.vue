<template>
  <div>
    <Carousel
      v-if="enableCarousel && slides.length > 1"
      :options="options"
      :slides="slides">
      <div slot-scope="{slide}">
        <slot :slide="slide"/>
      </div>
    </Carousel>

    <div
      v-for="(slide, key) in slides"
      v-else
      :key="key"
      class="slide">
      <slot :slide="slide"/>
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
  },

  computed: {
    enableCarousel() {
      if (this.responsive) {
        return parseInt(this.breakpoint, 10) >= window.innerWidth;
      }
      return true;
    },
  },
};
</script>
