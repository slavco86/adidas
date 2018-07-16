<template>
  <div
    :class="{'home--invert': tab === 'women'}"
    class="home">
    <nav class="nav">
      <img
        v-if="tab === 'women'"
        class="logo"
        src="../assets/adidas-logo.svg">
      <img
        v-if="tab === 'men'"
        class="logo"
        src="../assets/adidas-logo-white.svg">
      <button
        :class="{'nav-button--inactive': tab === 'women',
                 'nav-button--invert': tab === 'men'}"
        class="nav-button"
        @click="tab = 'men'">MEN</button>
      <button
        :class="{'nav-button--inactive': tab === 'men'}"
        class="nav-button"
        @click="tab = 'women'">WOMEN</button>
    </nav>
    <div
      ref="grid"
      :class="{'grid-container--hidden' : carousel,
               'grid-container--grid': !grid}"
      class="grid-container">
      <div
        v-for="(slide,index) in activeTab"
        :key="index"
        :style="positions[index]"
        :data-index="index"
        class="slide"
        @transitionend="unhideCarousel">
        <Spot v-bind="slide">
          <span
            :class="{'franchise-name--transition': !grid,
                     'franchise-name--invert': tab === 'men'}"
            class="franchise-name">{{ slide.franchise }}</span>
          <div
            :class="{'plus--invert' : tab === 'men',
                     'plus--transition': !grid}"
            class="plus"/>
        </Spot>
        <Countdown
          v-if="!slide.expired"
          :date="slide.launch"
          :class="{'countdown--transition': !grid,
                   'countdown--invert': tab === 'men'}"
          @expired="slide.expired = true"/>
      </div>
    </div>
    <Carousel
      ref="carousel"
      :slides="activeTab"
      :options="swiperOptions"
      :class="{'main-carousel--hidden': !carousel}"
      class="main-carousel"
      @ready="getPositions"
      @transition-end="getPositions">
      <div
        slot-scope="{slide}">
        <Spot v-bind="slide">
          <span
            :class="{'franchise-name--invert': tab === 'men'}"
            data-swiper-parallax="-500"
            data-swiper-parallax-duration="600"
            class="franchise-name">{{ slide.franchise }}</span>
          <div
            :class="{'plus--invert' : tab === 'men'}"
            class="plus"/>
        </Spot>
        <Countdown
          v-if="!slide.expired"
          :class="{'countdown--invert': tab === 'men'}"
          :date="slide.launch"
          @expired="slide.expired = true"/>
      </div>
    </Carousel>
    <div
      :class="{'button-container--invert': tab === 'men',
               'button-container--grid' : grid}"
      class="button-container"
      @click="toggleCarousel">
      <div class="top-left"/>
      <div class="top-right"/>
      <div class="bottom-left"/>
      <div class="bottom-right"/>
      <div
        :class="{'full--expand': border,
                 'full--invert': tab === 'men'}"
        class="full"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/containers/Carousel.vue';
import Countdown from '@/components/Countdown.vue';
import Spot from '@/components/Spot.vue';
import home from '@/content/home';

export default {
  name: 'Home',
  components: {
    Carousel,
    Spot,
    Countdown,
    home,
  },
  data() {
    return {
      carousel: true,
      grid: false,
      border: false,
      positions: [],
      width: window.innerWidth,
      tab: 'men',
      content: {
        men: {
          slides: [],
        },
        women: {
          slides: [],
        },
      },
    };
  },
  computed: {
    activeTab() {
      return (this.tab === 'men') ? this.content.men.slides : this.content.women.slides;
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
  mounted() {
    this.content = home.home;
    if (this.content.men.slides.length) {
      this.setExpired(this.content.men.slides);
      this.setExpired(this.content.women.slides);
    }
  },
  methods: {
    unhideCarousel() {
      if (!this.carousel && !this.grid) {
        this.carousel = !this.carousel;
      }
    },
    setExpired(slides) {
      slides.map(slide => this.$set(slide, 'expired', false));
    },
    toggleCarousel() {
      this.grid = !this.grid;
      this.border = !this.border;
      if (this.carousel) {
        this.carousel = !this.carousel;
        this.getPositions(true);
      } else {
        this.getPositions();
      }
    },
    getPositions(grid = false) {
      this.positions = [];
      const translate = this.$refs.carousel.$children[0].$children[0].swiper.getTranslate();
      const activeSlide = this.$refs.carousel.$children[0].$children[0].swiper.activeIndex;
      this.positions = grid ?
        this.$refs.carousel.$children[0].$children[0].$children.map(() => ({
          transform: 'translate3d(0px, 0px, 0px)',
          position: 'relative',
          width: 'auto',
        })) :
        this.$refs.carousel.$children[0].$children[0].$children.map((element, index) => ({
          transform: `translate3d(${this.width > 765 ? element.$el.offsetLeft + translate
          + element.$el.children[0].offsetLeft :
            element.$el.offsetLeft + translate}px,
          ${index === activeSlide ? '2' : '0'}rem, 0px)`,
          width: `${element.$el.children[0].clientWidth}px`,
          position: 'absolute',
        }));
    },
  },
};
</script>

<style lang="scss" scoped>
  .home {
    height: -webkit-fill-available;
    overflow: hidden;
    background-color: rgb(34, 34, 34);
    transition: background-color 1s;
  }

  .home--invert {
    background-color: white;
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
    width: 50px;
    position: absolute;
    left: 10%;
    top: 25%;
  }

  .nav-button {
    background: none;
    font-size: 0.9rem;
    margin: 0 1rem;
    font-weight: 600;

    &--inactive {
      color: #999;
    }

    &--invert {
      color: white;
    }
  }

  .main-carousel {
    @media only screen and (min-width: 765px) and (max-width: 1024px) {
      margin-top: 10rem;
    }
  }

  .main-carousel /deep/ .swiper-container {
    padding-bottom: 2rem;
  }

  .main-carousel /deep/ .spot {
    display: block;
  }

  .main-carousel--hidden {
    visibility: hidden;
  }

  .main-carousel /deep/ .swiper-slide {
    margin-top: 0;
    transform: translate3d(0, 0, 0);
    transition: transform 0.5s ease-in-out;

    @media only screen and (min-width: 1024px) {
      padding: 0 12.5%;
    }
  }

  .main-carousel /deep/ .swiper-slide-active {
    transform: translate3d(0, 2rem, 0);
  }

  .countdown {
    display: flex;
    margin: 0 auto;
    justify-content: space-evenly;
    position: absolute;
    top: 35%;
    left: 0;
    width: 100%;
    align-items: center;

    & /deep/ .countdown__value {
      width: 33%;

      &::after {
        content: ':';
        position: absolute;
        right: 0;
        top: 0;
        font-size: 14px;
        color: black;

        @media only screen and (min-width: 765px) {
          font-size: 2rem;
        }
      }

      &:last-of-type {
        &::after {
          display: none;
        }
      }

      &__num i {
        font-size: 14px;
        transition: font-size 1s;
        color: black;

        @media only screen and (min-width: 765px) {
          font-size: 2rem;
        }
      }

      &__label {
        text-transform: uppercase;
        font-size: 6px;
        margin-top: 5px;
        transition: font-size 1s;
        color: black;

        @media only screen and (min-width: 765px) {
          font-size: 1rem;
        }
      }
    }

    &--invert {
      & /deep/ .countdown__value {
        &::after,
        &__num i,
        &__label {
          color: white;
        }
      }
    }
  }

  .countdown--transition,
  .main-carousel .countdown {
    & /deep/ .countdown__value {
      &::after {
        font-size: 2rem;
      }

      &__num i {
        font-size: 2rem;
      }

      &__label {
        font-size: 0.7rem;
      }
    }
  }

  .franchise-name {
    position: absolute;
    transition-timing-function: ease-out;
    bottom: 0;
    left: 20px;
    font-size: 2.5rem;
    font-weight: 900;
    color: black;

    &--invert {
      color: white;
    }
  }

  .grid-container .franchise-name {
    font-size: 1.2rem;
    left: 20px;
    transition: font-size 1s, left 1s;

    @media only screen and (min-width: 765px) {
      font-size: 2rem;
    }
  }

  .grid-container .franchise-name.franchise-name--transition {
    font-size: 2.5rem;
  }

  .grid-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
    position: absolute;
    justify-content: center;
    transition: margin-top 1s;

    @media only screen and (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    &--grid {
      @media only screen and (min-width: 765px) and (max-width: 1024px) {
        margin-top: 10rem;
      }
    }

    /deep/ .slide {
      transition: transform 1s, width 1s;
    }

    /deep/ .spot {
      display: block;
    }
  }

  .grid-container--hidden {
    visibility: hidden;

    /deep/ .slide {
      transition: none;
    }
  }

  .button-container {
    display: inline-flex;
    flex-wrap: wrap;
    max-width: 36px;
    position: relative;
    height: auto;
    width: auto;
    padding: 2px;
    margin-top: 2rem;
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

  .button-container--invert {
    .top-left,
    .top-right,
    .bottom-left,
    .bottom-right {
      border-color: #999;
      box-shadow: 0 0 2px 0 #999 inset;
    }
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

    &--invert {
      box-shadow: 0 0 3px 0 #999 inset;
      background-color: rgb(34, 34, 34);
    }
  }

  .full--expand.full--invert {
    border-color: #999;
  }

  .plus {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    color: black;

    @media only screen and (min-width: 765px) {
    }

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      border-bottom: solid;
      left: 0;
      top: -55%;
      position: absolute;
    }

    &::after {
      top: 0;
      left: 45%;
      border-bottom: none;
      border-left: solid;
    }

    &--invert {
      &::after,
      &::before {
        border-color: white;
      }
    }
  }

  .grid-container .plus {
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    transition: width 1s, height 1s;

    @media only screen and (min-width: 765px) {
      width: 30px;
      height: 30px;
    }

    &--transition {
      width: 35px;
      height: 35px;

      @media only screen and (min-width: 765px) {
      }
    }
  }
</style>

