<template>
  <div class="influencer-section">
    <div class="brand">
      {{ franchise }}
    </div>
    <Titles
      :subtext="franchise"
      :headline="data.name + ' wears'"/>
    <Carousel
      :slides="data.products"
      :options="swiperOptions"
      class="influencer-carousel">
      <div slot-scope="{slide}">
        <Spot v-bind="slide">
          <span
            data-swiper-parallax="-500"
            data-swiper-parallax-duration="600"
            class="quote">{{ slide.quote }}</span>
          <span class="name">{{ data.name }}</span>
        </Spot>
      </div>
    </Carousel>
  </div>
</template>

<script>
import Spot from '@/components/Spot.vue';
import Carousel from '@/containers/Carousel.vue';
import Titles from '@/components/Titles.vue';

export default {
  name: 'Influencer',
  components: {
    Carousel,
    Spot,
    Titles,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      width: window.innerWidth,
    };
  },

  computed: {
    franchise() {
      return this.$route.params.franchise;
    },
    swiperOptions() {
      const desktop = this.width > 765;
      const slidesPerView = desktop ? 1.8 : 1.2;
      const spaceBetween = desktop ? this.width * 0.1 : 15;
      return {
        parallax: true,
        centeredSlides: true,
        spaceBetween,
        speed: 500,
        slidesPerView,
      };
    },
  },
};
</script>


<style lang="scss" scoped>
.influencer-section {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.influencer-section /deep/ .titles {
  color: white;
  padding-top: 2rem;

  .title1,
  .title2 {
    text-transform: uppercase;
  }

  .title1 {
    font-size: 1rem;
  }

  .title2 {
    font-size: 4rem;
    font-weight: bold;
  }
}

.brand {
  font-size: 8rem;
  position: absolute;
  color: #333;
  height: 100%;
  height: auto;
  font-weight: 900;
  top: 0;

  @media only screen and (min-width: 765px) {
    font-size: 18rem;
    height: 100%;
    width: 100%;
    top: 25%;
    text-align: center;
  }
}

.influencer-carousel {
  margin-top: 3rem;

  @media only screen and (min-width: 765px) {
    margin-top: 10rem;
  }
}

.influencer-carousel /deep/ .swiper-container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.influencer-carousel /deep/ .spot {
  display: block;
}

.influencer-carousel /deep/ .swiper-slide {
  margin-top: 0;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease-in-out;

  @media only screen and (min-width: 1024px) {
    padding: 0 12.5%;
  }
}

.influencer-carousel /deep/ .swiper-slide-active {
  transform: translate3d(0, -2rem, 0);
}

.quote {
  position: absolute;
  transition-timing-function: ease-out;
  bottom: -20%;
  right: 0;
  padding: 1rem;
  width: 100%;
  color: white;
  text-align: left;
  font-size: 15px;
  line-height: 20px;

  @media only screen and (min-width: 765px) {
    bottom: 40%;
    right: -220px;
  }

  &--invert {
    color: black;
  }

  &--grid {
    font-size: 1rem;
    bottom: 0;
  }
}

.name {
  display: none;

  @media only screen and (min-width: 765px) {
    display: block;
    position: absolute;
    transition-timing-function: ease-out;
    bottom: -40px;
    right: 20px;
    color: white;
    font-size: 15px;
  }
}
</style>

