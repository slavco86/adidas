<template>
  <div class="home">
    <Carousel
      :slides="content.slides">
      <img
        slot-scope="{slide}"
        :src="slide.desktop"
        alt="">
    </Carousel>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/containers/Carousel.vue';
import home from '@/content/home';

export default {
  name: 'Home',
  components: {
    Carousel,
    home,
  },
  data() {
    return {
      content: {
        slides: [],
      },
    };
  },
  mounted() {
    this.content = home;
  },
};
</script>
