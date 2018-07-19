<template>
  <div class="content-page">
    <router-link
      to="/"
      class="close">
      <img src="../assets/close_white.png">
    </router-link>
    <div id="content">
      <component
        v-for="component in anchors"
        :key="component"
        :is="component"
        :active="section === component"
        class="section section__inner"/>
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

  props: {
    routeAnimating: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      anchors: ['colourways', 'social'],
      fullpage: null,
      section: null,
    };
  },

  mounted() {
    this.$watch('routeAnimating', (newVal) => {
      if (newVal === false) {
        // TODO: sort this shit out.
        setTimeout(() => {
          this.enableFullpage();
        }, 1);
      }
    });
  },

  beforeDestroy() {
    if (this.fullpage) {
      this.fullpage.moveTo(1);
      this.fullpage.destroy('all');
      this.fullpage = null;
    }
  },

  methods: {
    enableFullpage() {
      const { anchors } = this;

      this.fullpage = new Fullpage('#content', {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors,
        lockAnchors: true,
        scrollBar: true,
        onLeave: (origin, destination) => {
          this.section = destination.anchor;

          return destination;
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content-page {
  background-color: #222;
  // required to pop over the top of MESH header
  z-index: 1;
}

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
  z-index: 5;

  img {
    width: 59px;
    height: auto;
  }
}
</style>
