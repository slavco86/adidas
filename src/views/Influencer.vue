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
            data-swiper-parallax-opacity="0"
            class="quote">{{ slide.quote }}</span>
          <span
            data-swiper-parallax-y="-50"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-duration="600"
            class="name">{{ data.name }}</span>
          <QuickBuy
            :url="slide.url"/>
        </Spot>
      </div>
    </Carousel>
  </div>
</template>

<script>
import Spot from '@/components/Spot.vue';
import Carousel from '@/containers/Carousel.vue';
import Titles from '@/components/Titles.vue';
import QuickBuy from '@/components/QuickBuy.vue';

export default {
  name: 'Influencer',
  components: {
    Carousel,
    Spot,
    Titles,
    QuickBuy,
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
  text-align: center;
}

.influencer-section /deep/ .titles {
  color: white;
  padding-top: 2rem;
  line-height: 40px;

  .title1,
  .title2 {
    text-transform: uppercase;
    text-align: center;
  }

  .title1 {
    font-size: 1rem;
  }

  .title2 {
    font-size: 2rem;
    font-weight: bold;

    @media only screen and (min-width: 765px) {
      font-size: 4rem;
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
  opacity: 0.5;
  height: auto;
  font-weight: 900;
  top: 0;

  @media only screen and (min-width: 765px) {
    color: #333;
    font-size: 14rem;
    height: 100%;
    width: 100%;
    top: 25%;
    text-align: center;
  }
}

.influencer-carousel {
  margin-top: 3rem;

  @media only screen and (min-width: 765px) {
    margin-top: calc(10rem - (2rem + 20%));
  }
}

.influencer-carousel /deep/ .swiper-container {
  padding-top: calc(2rem + 20%);
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
}

.influencer-carousel /deep/ .quickView {
  position: absolute;
  top: 10px;
  right: 10px;

  @media only screen and (min-width: 765px) {
    top: initial;
    bottom: 10px;
  }

  svg circle,
  svg polygon,
  svg polyline {
    transition: stroke 0.5s, fill 0.5s;
  }

  svg {
    circle {
      stroke: #fff;
      fill: #fff;
    }

    polygon {
      stroke: black;
    }

    polyline {
      stroke: black;
    }
  }

  svg:hover {
    circle {
      stroke: black;
      fill: transparent;
    }

    polygon {
      fill: white;
    }

    polyline {
      fill: white;
    }
  }
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
    top: -40px;
    left: 20px;
    color: white;
    font-size: 15px;
  }
}

.category--women .name {
  color: black;
}
</style>

