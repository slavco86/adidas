<template>
  <div>
    <router-link
      to="/"
      class="close">
      <img src="../assets/close_white.png">
    </router-link>
    <div id="content">
      <div class="section">
        <Colourways class="section__inner"/>
      </div>
      <div class="section">
        <Social class="section__inner"/>
      </div>
    </div>
  </div>
</template>

<script>
import Fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

import Colourways from '@/views/Colourways.vue';
import Social from '@/views/Social.vue';

export default {
  name: 'ContentContainer',
  components: {
    Colourways,
    Social,
  },

  data() {
    return {
      fullpage: null,
    };
  },

  // mounted() {
  //   this.fullpage = new Fullpage('#content', {
  //     licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  //   });
  // },
};
</script>

<style lang="scss" scoped>
.section {
  transform: translate3d(0, -50px, 0);

  @media screen and (min-width: 765px) {
    transform: translate3d(0, -202px, 0);
  }
}

.section__inner {
  height: 100%;
}

.close {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;

  img {
    width: 59px;
    height: auto;
  }
}
</style>
