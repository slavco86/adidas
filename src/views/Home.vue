<template>
  <div class="home">
    <nav class="nav">
      <img
        class="logo"
        src="../assets/adidas-logo.svg"
        @click="toggleCarousel">
      <button
        class="nav-button"
        @click="tab = 'men'">MEN</button>
      <button
        class="nav-button"
        @click="tab = 'women'">WOMEN</button>
    </nav>
    <div
      ref="grid"
      :class="{'slide-container--hidden' : carousel}"
      class="slide-container">
      <div
        v-for="(slide,index) in activeTab"
        :key="index"
        :style="positions[index]"
        :data-index="index"
        class="slide"
        @transitionend="unhideCarousel">
        <Spot v-bind="slide">
          <span class="franchise-name">{{ slide.franchise }}</span>
        </Spot>
        <Countdown
          v-if="!slide.expired"
          :date="slide.launch"
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
    <div class="button-container">
      <div class="up"/>
      <div class="down"/>
      <div class="full"/>
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
      swiperOptions: {
        parallax: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      carousel: true,
      grid: false,
      positions: [],
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
    unhideCarousel() {
      if (!this.carousel && !this.grid) {
        this.carousel = !this.carousel;
      }
    },
    setExpired(slides) {
      slides.map(slide => this.$set(slide, 'expired', false));
    },
    toggleCarousel() {
      if (this.carousel) {
        this.carousel = !this.carousel;
        this.grid = !this.grid;
        this.getPositions(true);
      } else {
        this.getPositions();
        this.grid = !this.grid;
      }
    },
    getPositions(grid = false) {
      this.positions = [];
      const translate = this.$refs.carousel.$children[0].$children[0].swiper.getTranslate();
      this.positions = grid ?
        this.$refs.carousel.$children[0].$children[0].$children.map(() => ({
          transform: 'translate3d(0px, 0px, 0px)',
          position: 'relative',
          width: '100%',
        })) :
        this.$refs.carousel.$children[0].$children[0].$children.map(element => ({
          transform: `translate3d(${element.$el.offsetLeft + translate}px, ${element.$el.offsetTop}px, 0px)`,
          width: `${element.$el.offsetWidth}px`,
          position: 'absolute',
        }));
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

  .main-carousel--hidden {
    visibility: hidden;
  }

  .main-carousel /deep/ .swiper-slide {
    margin-top: 0;
    margin-bottom: 2rem;
    transition: margin-top 0.2s ease-in-out;
  }

  .main-carousel /deep/ .swiper-slide-active {
    margin-top: 2rem;
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

  .slide-container {
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    padding: 0.5rem;
    position: absolute;

    /deep/ .slide {
      transition: transform 1s, width 1s;
    }
  }

  .slide-container--hidden {
    visibility: hidden;

    /deep/ .slide {
      transition: none;
    }
  }

  .button-container {
    display: inline-block;
    border: solid;
    position: relative;
    height: auto;
  }

  .up {
    position: relative;
  }

  .up::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: solid;
    left: 0;
    top: 0;
  }
</style>

