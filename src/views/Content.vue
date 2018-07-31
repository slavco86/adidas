<template>
  <div class="content-page">
    <CloseButton :to="`/${$route.params.gender}`" />
    <div id="content">
      <div
        v-for="component in anchors"
        :key="component"
        class="section">
        <component
          :is="component"
          :active="section === component"
          :data="content[component]"
          :content="content"
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
import GetSocial from '@/views/Social.vue';
import Influencer from '@/views/Influencer.vue';
import ShoppableVideo from '@/views/ShoppableVideo.vue';
import SketchFabModel from '@/views/SketchFabModel.vue';

export default {
  name: 'ContentContainer',
  components: {
    CloseButton,
    Colourways,
    GetSocial,
    Influencer,
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
      anchors: ['sketch-fab-model', 'colourways', 'get-social', 'influencer', 'shoppable-video'],
      fullpage: null,
      section: 'sketch-fab-model',
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
}

.influencer-section /deep/ .titles,
.social /deep/ .titles {
  color: white;
  line-height: 30px;
  position: relative;
  top: 4.7rem;
  letter-spacing: 2px;

  @media only screen and (min-width: 765px) {
    line-height: 42px;
    top: 4rem;
  }

  .title1,
  .title2 {
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
  }

  .title1 {
    font-size: 0.8rem;
  }

  .title2 {
    font-size: 2rem;

    @media only screen and (min-width: 765px) {
      font-size: 3.5rem;
    }
  }
}
</style>
