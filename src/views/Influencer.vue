<template>
  <div class="influencer-section">
    <div class="brand">
      {{ franchise }}
    </div>
    <Titles
      :subtext="franchise"
      :headline="name ? `${name} wears` : ''"/>
    <Carousel
      ref="carousel"
      :slides="data.products"
      :options="swiperOptions"
      class="influencer-carousel"
      @change="change">
      <div slot-scope="{slide}">
        <Spot v-bind="slide">
          <QuickBuy
            v-if="slide.url"
            :url="slide.url"/>
          <span
            data-swiper-parallax-y="-50"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-duration="600"
            class="name">{{ slide.handle }}</span>
          <span
            data-swiper-parallax="-500"
            data-swiper-parallax-duration="600"
            data-swiper-parallax-opacity="0"
            class="quote">{{ slide.quote }}</span>
        </Spot>
      </div>
    </Carousel>
    <CarouselArrows/>
  </div>
</template>

<script>
import Spot from '@/components/Spot.vue';
import Carousel from '@/containers/Carousel.vue';
import Titles from '@/components/Titles.vue';
import QuickBuy from '@/components/QuickBuy.vue';
import CarouselArrows from '@/components/CarouselArrows.vue';

export default {
  name: 'Influencer',
  components: {
    Carousel,
    Spot,
    Titles,
    QuickBuy,
    CarouselArrows,
  },
  provide: {
    trackingName: 'influencer',
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
      name: this.data.products[0].name,
    };
  },

  computed: {
    franchise() {
      return (this.$route.params.franchise === 'POD') ? `${this.$route.params.franchise}-S3.1` :
        this.$route.params.franchise;
    },
    swiperOptions() {
      const desktop = this.width > 765;
      const slidesPerView = desktop ? 1.8 : 1.2;
      const spaceBetween = desktop ? 0 : 15;
      return {
        parallax: true,
        centeredSlides: true,
        spaceBetween,
        speed: 500,
        slidesPerView,
        navigation: {
          prevEl: '.chevron-arrow-wrap--left',
          nextEl: '.chevron-arrow-wrap--right',
        },
      };
    },
  },
  methods: {
    change() {
      this.name = this.data.products[this.$refs.carousel.$children[0].$children[0].swiper.realIndex]
        .name;
    },
  },
};
</script>


<style lang="scss" scoped>
.influencer-section {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  text-align: center;
}

.influencer-section /deep/ .titles {
  color: white;
  line-height: 30px;
  position: relative;
  top: 4.7rem;
  letter-spacing: 2px;

  @media only screen and (min-width: 765px) {
    line-height: 42px;
    top: 4rem;
  }

  .title1,
  .title2 {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
  }

  .title1 {
    font-size: 0.8rem;
  }

  .title2 {
    font-size: 2rem;

    @media only screen and (min-width: 765px) {
      font-size: 3.5rem;
    }
  }
}

.category--women .influencer-section /deep/ .titles {
  color: black;
}

.brand {
  font-size: 8rem;
  position: absolute;
  color: #666;
  opacity: 0.2;
  height: auto;
  font-weight: 900;
  top: 60px;
  white-space: nowrap;
  user-select: none;
  left: -5px;
  text-align: center;

  @media only screen and (min-width: 765px) {
    font-size: 16rem;
    height: 100%;
    width: 100%;
    top: 15rem;
    left: -25px;
    text-align: center;
  }
}

.category--women .brand {
  opacity: 0.05;
}

.is-content.pod .brand {
  font-size: 5rem;

  @media only screen and (min-width: 765px) {
    font-size: 18rem;
  }
}

.is-content.deerupt .brand {
  font-size: 5.5rem;

  @media only screen and (min-width: 765px) {
    font-size: 20rem;
  }
}

.is-content.samba .brand {
  font-size: 3.75rem;

  @media only screen and (min-width: 765px) {
    font-size: 13rem;
  }
}

.influencer-carousel {
  margin-top: 3rem;

  @media only screen and (min-width: 765px) {
    margin-top: calc(10rem - (2rem + 20%));
  }
}

.influencer-section /deep/ .chevron-arrows {
  bottom: -25%;
}

.category--women .influencer-section /deep/ .chevron-arrows {
  bottom: -22%;
}

.influencer-carousel /deep/ .swiper-container {
  position: relative;
  top: 5rem;
  padding-top: 2rem;
  padding-bottom: 7rem;

  @media only screen and (min-width: 765px) {
    top: 18rem;
  }
}

.influencer-carousel /deep/ .spot {
  display: block;
  margin: 0 auto;

  @media only screen and (min-width: 1024px) {
    width: 50%;
  }
}

.influencer-carousel /deep/ .swiper-slide {
  margin-top: 0;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease-in-out;

  @media only screen and (min-width: 1024px) {
    // padding: 0 12.5%;
  }
}

.influencer-carousel /deep/ .swiper-slide-active {
  transform: translate3d(0, -2rem, 0);
}

.quote {
  position: absolute;
  transition-timing-function: ease-out;
  top: 100%;
  right: 0;
  padding: 1rem;
  padding-left: 0;
  width: 100%;
  color: white;
  text-align: left;
  font-size: 16px;
  line-height: 24px;

  @media only screen and (min-width: 765px) {
    padding: 1rem;
    top: 35%;
    right: -300px;
    width: 300px;
    font-size: 18px;
  }
}

.influencer-carousel /deep/ .quickView {
  position: absolute;
  bottom: 10px;
  right: 10px;
  fill: transparent;
}

.category--women .quote {
  color: black;
}

.name {
  display: none;

  @media only screen and (min-width: 765px) {
    display: block;
    position: absolute;
    transition-timing-function: ease-out;
    bottom: -40px;
    left: 0;
    color: white;
    font-weight: bold;
    font-size: 18px;
  }
}

.category--women .name {
  color: black;
}
</style>

