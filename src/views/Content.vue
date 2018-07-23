<template>
  <div class="content-page">
    <CloseButton/>
    <div id="content">
      <div
        v-for="component in anchors"
        :key="component"
        class="section">
        <component
          :is="component"
          :active="section === component"
          :data="content[component]"
          :context="component"
          class="section__inner"/>
      </div>
    </div>
  </div>
</template>

<script>
import Fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

import CloseButton from '@/components/ButtonClose.vue';
import Colourways from '@/views/Colourways.vue';
import Social from '@/views/Social.vue';
import ShoppableVideo from '@/views/ShoppableVideo.vue';
import SketchFabModel from '@/views/SketchFabModel.vue';

export default {
  name: 'ContentContainer',
  components: {
    CloseButton,
    Colourways,
    Social,
    ShoppableVideo,
    SketchFabModel,
  },

  props: {
    content: {
      type: Object,
      default() {
        return {};
      },
    },
    routeAnimating: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      anchors: ['colourways', 'social', 'shoppable-video', 'sketch-fab-model'],
      fullpage: null,
      section: 'colourways',
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
  background-color: inherit;
  //required to pop over the top of MESH header
  z-index: 1;
  transform: translate3d(0, -50px, 0);

  @media screen and (min-width: 765px) {
    transform: translate3d(0, -202px, 0);
  }
}
</style>
