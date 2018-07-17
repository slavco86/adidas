<template>
  <div>
    <router-link
      to="/"
      class="back">Back</router-link>
    <div id="fullpage">
      <div class="section">Some section</div>
      <div class="section">Some section</div>
      <div class="section">Some section</div>
    </div>
  </div>
</template>

<script>
import Fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

export default {
  data() {
    return {
      fullpage: null,
    };
  },

  mounted() {
    this.fullpage = new Fullpage('#fullpage', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      autoScrolling: true,
      fitToSection: true,
    });

    // this.fullpage.setAllowScrolling(false);
  },
};
</script>

<style lang="scss" scoped>
  .back {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 10;
  }
  .section.first {
    height: 100vh;
    background-color: yellow;
    transform: translate3d(0, 0, 0);
  }

  .section {
    transform: translate3d(0, -50px, 0);
    background-color: hotpink;
  }

  .section:nth-child(2) {
    background-color: red;
  }

  .section:nth-child(3) {
    background-color: blue;
  }
</style>
