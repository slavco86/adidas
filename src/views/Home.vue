<template>
  <div class="home">
    <nav class="nav">
      <img
        class="logo"
        src="../assets/adidas-logo.svg"
        @click="disableCarousel">
      <button
        class="nav-button"
        @click="tab = 'men'">MEN</button>
      <button
        class="nav-button"
        @click="tab = 'women'">WOMEN</button>
    </nav>
    <Carousel
      :slides="activeTab"
      :options="swiperOptions"
      :responsive="true"
      :breakpoint="breakpoint"
      :class="{'main-carousel--flex': breakpoint === 0}"
      class="main-carousel">
      <div
        slot-scope="{slide}">
        <Spot v-bind="slide">
          <span
            data-swiper-parallax="-900"
            data-swiper-parallax-duration="600"
            class="franchise-name">{{ slide.franchise }}</span>
        </Spot>
        <Countdown
          v-if="!slide.expired"
          :date="slide.launch"
          @expired="slide.expired = true"/>
      </div>
    </Carousel>
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
      swiperOptions: {
        parallax: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      breakpoint: window.innerWidth + 1,
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
    ref() {
      return this.$refs;
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
    setExpired(slides) {
      slides.map(slide => this.$set(slide, 'expired', false));
    },
    disableCarousel() {
      this.breakpoint = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
  .nav {
    padding: 3rem 0;
    text-align: right;
    position: relative;
  }

  .logo {
    width: 50px;
    position: absolute;
    left: 10%;
    top: 25%;
  }

  .main-carousel /deep/ .swiper-slide {
    margin-top: 0;
    margin-bottom: 2rem;
    transition: margin-top 0.2s ease-in-out;
  }

  .main-carousel /deep/ .swiper-slide-active {
    margin-top: 2rem;
  }

  .main-carousel--flex {
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

  .nav-button {
    background: none;
    font-size: 0.9rem;
    margin: 0 1rem;
  }

  .countdown {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    position: absolute;
  }

  .franchise-name {
    position: absolute;
    transition-timing-function: ease-out;
  }

  .spot {
    position: relative;
    display: block;
  }
</style>

