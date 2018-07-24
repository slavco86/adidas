<template>
  <div
    :class="{'home--invert': gender === 'women'}"
    class="home">
    <nav class="nav">
      <Logo
        :color="logoColor"
        class="logo"/>
      <router-link
        :to="'men'"
        tag="span">
        <button
          :class="{'nav-button--inactive': gender === 'women',
                   'nav-button--invert': gender === 'men'}"
          class="nav-button">MEN</button>
      </router-link>
      <router-link
        :to="'women'"
        tag="span">
        <button
          :class="{'nav-button--inactive': gender === 'men'}"
          class="nav-button">WOMEN</button>
      </router-link>
    </nav>
    <div
      :class="{'grid--animate': grid}"
      class="grid-view">
      <div
        v-for="(slide,key) in slides"
        :key="key"
        class="grid-view__product">
        <router-link
          :to="`men/${slide.franchise}`"
          tag="div">
          <Spot v-bind="slide">
            <span
              :class="{'franchise-name--invert': gender === 'men'}"
              data-swiper-parallax="-500"
              data-swiper-parallax-duration="600"
              class="franchise-name franchise-name--grid">{{ slide.franchise }}</span>
            <div
              :class="{'plus--invert' : gender === 'men'}"
              class="plus"/>
          </Spot>
          <Countdown
            v-if="!slide.expired && grid"
            :class="{'countdown--invert': gender === 'men'}"
            :date="slide.launch"
            class="countdown--grid"/>
        </router-link>
      </div>
    </div>

    <Carousel
      ref="carousel"
      :slides="pictures"
      :options="swiperOptions"
      :class="{'main-carousel--hidden': grid}"
      class="main-carousel">
      <router-link
        slot-scope="{slide}"
        :to="`${gender}/${slide.franchise}`"
        tag="div">
        <Spot v-bind="slide">
          <span
            :class="{'franchise-name--invert': gender === 'men'}"
            data-swiper-parallax="-500"
            data-swiper-parallax-duration="600"
            class="franchise-name">{{ slide.franchise }}</span>
          <div
            :class="{'plus--invert' : gender === 'men'}"
            class="plus"/>
        </Spot>
        <Countdown
          v-if="!slide.expired"
          :class="{'countdown--invert': gender === 'men'}"
          :date="slide.launch"
          @expired="countdownExpired(slide.key)"/>
      </router-link>
    </Carousel>
    <div
      :class="{'button-container--invert': gender === 'men',
               'button-container--grid' : grid}"
      class="button-container"
      @click="toggleCarousel"
      @transitionend="unhideCarousel">
      <div class="top-left"/>
      <div class="top-right"/>
      <div class="bottom-left"/>
      <div class="bottom-right"/>
      <div
        :class="{'full--expand': grid,
                 'full--invert': gender === 'men'}"
        class="full"/>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/AdidasLogo.vue';
import Carousel from '@/containers/Carousel.vue';
import Countdown from '@/components/Countdown.vue';
import Spot from '@/components/Spot.vue';

export default {
  name: 'Home',
  components: {
    Logo,
    Carousel,
    Spot,
    Countdown,
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
      pictures: [],
    };
  },
  computed: {
    swiperOptions() {
      const desktop = this.width > 765;
      const slidesPerView = desktop ? 2 : 1.2;
      const spaceBetween = desktop ? this.width * 0.01 : 15;
      return {
        parallax: true,
        centeredSlides: true,
        spaceBetween,
        speed: 500,
        slidesPerView,
        mousewheel: true,
      };
    },

    gender() {
      return this.$route.params.gender;
    },

    slides() {
      const slides = JSON.parse(JSON.stringify(this.franchises));
      if (slides.length) {
        this.setExpired(slides);
      }
      return slides;
    },

    logoColor() {
      return (this.gender === 'men') ? '#fff' : undefined;
    },
  },

  methods: {
    unhideCarousel() {
      if (!this.carousel && !this.grid) {
        this.carousel = !this.carousel;
      }
    },
    setExpired(slides) {
      const newSlides = slides.map((slide) => {
        const newSlide = slide;
        newSlide.expired = false;
        return newSlide;
      });
      this.pictures = newSlides;
      return newSlides;
    },
    countdownExpired(index) {
      this.pictures[index].expired = true;
    },
    toggleCarousel() {
      this.grid = !this.grid;
      this.border = !this.border;
      if (this.carousel) {
        this.carousel = !this.carousel;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-view {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 1rem auto;
  overflow: hidden;
  position: absolute;
  width: 100%;

  &__product {
    flex: 0 0 50%;
    height: auto;
    max-width: 635px;
    display: block;
    padding: 0.5rem;
    transition: transform 1s ease-in-out;

    /deep/ .spot {
      display: block;
    }

    @media only screen and (min-width: 1024px) {
      flex: 0 0 19%;
    }

    &:first-child {
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

    img {
      display: block;
      height: auto;
      width: 100%;
    }
  }
}

.grid--animate .grid-view__product {
  transform: translate3d(0, 0, 0);
}

.home {
  height: -webkit-fill-available;
  background-color: rgb(34, 34, 34);
  transition: background-color 1s, opacity 1s;
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
  margin-top: 2rem;
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
  padding-top: 2rem;
}

.main-carousel /deep/ .spot {
  display: block;
}

.main-carousel /deep/ .swiper-slide {
  margin-top: 0;
  transform: translate3d(0, 0, 0);
  transition: transform 0.5s ease-in-out;

  @media only screen and (min-width: 1024px) {
    padding: 0 4%;
  }
}

.main-carousel /deep/ .swiper-slide-active {
  transform: translate3d(0, -2rem, 0);
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
      font-size: 2rem;
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
      font-size: 2rem;
      color: black;

      @media only screen and (min-width: 765px) {
        font-size: 2rem;
      }
    }

    &__label {
      text-transform: uppercase;
      font-size: 1rem;
      margin-top: 5px;
      color: black;

      @media only screen and (min-width: 765px) {
        font-size: 1rem;
      }
    }
  }

  &--invert {
    left: 12%;
    width: 80%;

    & /deep/ .countdown__value {
      &::after,
      &__num i,
      &__label {
        color: white;
      }
    }
  }

  &--grid {
    & /deep/ .countdown__value {
      &::after,
      &__num i,
      &__label {
        font-size: 0.8rem;
      }
    }
  }
}

.franchise-name {
  position: absolute;
  transition-timing-function: ease-out;
  bottom: -20px;
  left: 20px;
  font-size: 3.5rem;
  font-weight: 900;
  color: black;
  text-align: left;
  line-height: 45px;

  &--invert {
    color: white;
  }

  &--grid {
    font-size: 1rem;
    bottom: 0;
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
</style>

