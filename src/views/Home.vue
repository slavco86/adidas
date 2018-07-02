<template>
  <div class="home">
    <nav>
      <button
        @click="tab = 'men'">MEN</button>
      <button
        @click="tab = 'women'">WOMEN</button>
    </nav>
    <Carousel
      :slides="activeTab">
      <div
        slot-scope="{slide}">
        <img
          :src="slide.desktop"
          alt="">
        <span class="franchise-name">{{ slide.franchise }}</span>
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
import home from '@/content/home';

export default {
  name: 'Home',
  components: {
    Carousel,
    Countdown,
    home,
  },
  data() {
    return {
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
  },
};
</script>

<style lang="scss" scoped>
  .countdown {
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }

  .franchise-name {
    position: absolute;
    left: 0;
  }
</style>

