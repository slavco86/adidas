<template>
  <div class="home">

    <nav class="nav">
      <Logo
        :color="logoColor"
        class="logo"/>

      <router-link
        to="men"
        class="nav-button"
        tag="button"
        @click.native="rewindCarousel">
        Men
      </router-link>
      <router-link
        to="women"
        class="nav-button"
        tag="button"
        @click.native="rewindCarousel">
        Women
      </router-link>
    </nav>

    <div
      :class="{'grid--animate': grid}"
      class="grid-view">
      <FranchiseTile
        v-for="slide in franchises"
        :key="slide.franchise"
        :tile="slide"
        class="grid-view__product" />
    </div>

    <Carousel
      ref="carousel"
      :slides="franchises"
      :options="swiperOptions"
      :class="{'main-carousel--hidden': grid}"
      class="main-carousel">
      <div slot-scope="{slide}">
        <FranchiseTile :tile="slide" />
      </div>
    </Carousel>

    <CarouselArrows>
      <div
        :class="{'button-container--grid' : grid}"
        class="button-container"
        @click="toggleCarousel"
        @transitionend="unhideCarousel">
        <div class="top-left"/>
        <div class="top-right"/>
        <div class="bottom-left"/>
        <div class="bottom-right"/>
        <div
          :class="{'full--expand': grid}"
          class="full"/>
      </div>
    </CarouselArrows>
  </div>
</template>

<script>
import Logo from '@/components/AdidasLogo.vue';
import Carousel from '@/containers/Carousel.vue';
import FranchiseTile from '@/components/FranchiseTile.vue';
import CarouselArrows from '@/components/CarouselArrows.vue';

export default {
  name: 'Home',
  components: {
    Logo,
    Carousel,
    FranchiseTile,
    CarouselArrows,
  },

  props: {
    franchises: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      carousel: true,
      grid: false,
      width: window.innerWidth,
    };
  },

  computed: {
    swiperOptions() {
      const desktop = this.width > 765;
      const slidesPerView = desktop ? 2 : 1.2;
      const spaceBetween = desktop ? -220 : 15;
      return {
        parallax: true,
        centeredSlides: true,
        spaceBetween,
        speed: 500,
        slidesPerView,
        mousewheel: true,
        loop: false,
        navigation: {
          prevEl: '.chevron-arrow-left',
          nextEl: '.chevron-arrow-right',
        },
      };
    },

    logoColor() {
      return (this.$route.params.gender === 'men') ? '#fff' : undefined;
    },
  },

  methods: {
    unhideCarousel() {
      if (!this.carousel && !this.grid) {
        this.carousel = !this.carousel;
      }
    },

    toggleCarousel() {
      this.grid = !this.grid;
      this.border = !this.border;
      if (this.carousel) {
        this.carousel = !this.carousel;
      }
    },

    rewindCarousel() {
      this.$refs.carousel.$children[0].$children[0].swiper.slideTo(0);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    height: calc(100vh - 202px);
  }
}

.grid-view {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 1rem auto;
  overflow: hidden;
  position: absolute;
  width: 100%;

  @media only screen and (min-width: 320px) and (max-width: 875px) {
    justify-content: flex-start;
  }

  &__product {
    flex: 0 0 50%;
    height: auto;
    max-width: 635px;
    display: block;
    padding: 0.5rem;
    transform: translate3d(100%, 100%, 0);
    transition: transform 1s ease-in-out;

    /deep/ .spot {
      display: block;
    }

    @media only screen and (min-width: 1024px) {
      flex: 0 0 19%;
    }

    &:first-child, {
      transform: translate3d(-100%, -100%, 0);
    }

    &:nth-child(2) {
      transform: translate3d(100%, -100%, 0);
    }

    &:nth-child(3) {
      transform: translate3d(-100%, 100%, 0);
    }

    &:last-child {
      transform: translate3d(100%, 100%, 0);
    }

    &__text {
      color: #ccc;
      display: block;
      margin: 0.75rem 0;
      text-align: left;
      font-size: 1rem;
    }

    /deep/ .plus {
      right: 1rem;
      top: 1rem;
    }
  }
}

.grid--animate .grid-view__product {
  transform: translate3d(0, 0, 0);
}

.nav {
  padding: 2rem 0;
  text-align: right;
  position: relative;

  @media only screen and (min-width: 765px) {
    padding: 2rem 4rem;
  }
}

.logo {
  width: 60px;
  left: 4%;

  @media only screen and (min-width: 765px) {
    left: 3%;
  }
}

.nav-button {
  background: none;
  color: #999;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 1rem;
  text-transform: uppercase;
  position: relative;

  &:hover {
    color: #fff;
  }

  &.router-link-active {
    color: #fff;
  }
}

// Women
.category--women .nav-button:hover {
  color: #222;
}

.category--women .nav-button.router-link-active {
  color: #222;
}

.main-carousel {
  transform: scale3d(1, 1, 1);
  opacity: 1;
  transition: transform 1s, opacity 1s 0.2s;

  @media only screen and (min-width: 765px) and (max-width: 1024px) {
    margin-top: 10rem;
  }

  &--hidden {
    transform: scale3d(0, 0, 0);
    opacity: 0;
  }
}

.main-carousel /deep/ .swiper-container {
  padding-top: 4rem;
}

.main-carousel /deep/ .spot {
  display: block;
}

.main-carousel /deep/ .swiper-slide {
  margin-top: 0;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease-in-out;

  @media only screen and (min-width: 1024px) {
    padding: 0 15%;
  }
}

.main-carousel /deep/ .swiper-slide-active {
  transform: translate3d(0, -2rem, 0);
}

.button-container {
  display: inline-flex;
  flex-wrap: wrap;
  max-width: 36px;
  position: relative;
  height: auto;
  width: auto;
  padding: 2px;
  // margin-top: 2rem;
  transition: margin-top 1s;

  &--grid {
    @media only screen and (min-width: 765px) and (max-width: 1024px) {
      margin-top: 14rem;
    }
  }
}

.top-left,
.top-right,
.bottom-left,
.bottom-right {
  height: 12px;
  width: 12px;
  border: solid 1px;
  margin: 2px;
  box-shadow: 0 0 1px 0 black inset;
}

.top-left {
  border-radius: 3px 0 0 0;
}

.top-right {
  border-radius: 0 3px 0 0;
}

.bottom-left {
  border-radius: 0 0 0 3px;
}

.bottom-right {
  border-radius: 0 0 3px 0;
}

.full {
  height: 0;
  width: 0;
  position: absolute;
  left: 50%;
  transform: translate3d(-48%, 0, 0);
  transition: height 1s, width 1s, border-color 1s, border-radius 1s;
  align-self: center;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 0 3px 0 black inset;

  &--expand {
    height: 83%;
    width: 83%;
    border-color: black;
    border-radius: 3px;
  }
}
</style>
