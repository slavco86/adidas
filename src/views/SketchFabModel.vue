<template>
  <div class="content-slide">
    <div class="content-slide__inner">
      <router-link
        v-if="$route.name === 'content'"
        to="3d-view"
        append>
        Display 3D Content
      </router-link>
      <div
        v-else
        class="iframe-container">
        <ButtonClose :to="`/${$route.params.gender}/${$route.params.franchise}/`" />
        <ProductInfo
          :franchise="content.colourways.products[0].brand"
          :price="content.colourways.products[0].price"
          :url="content.colourways.products[0].url"/>
        <iframe
          :src="modelSrc"
          width="640"
          height="480"
          frameborder="0"
          allow="autoplay; fullscreen; vr"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonClose from '@/components/ButtonClose.vue';
import ProductInfo from '@/components/ProductInfo.vue';

export default {
  components: {
    ButtonClose,
    ProductInfo,
  },

  props: {
    data: {
      type: String,
      default: 'a06e9aca74b74cb3920123b21baf6140',
    },

    content: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    modelId() {
      return (this.content['sketch-fab-model']) ? this.content['sketch-fab-model'] : this.data;
    },

    modelSrc() {
      return `https://sketchfab.com/models/${this.modelId}/embed?autospin=0.2&amp;autostart=1&amp;camera=0&amp;preload=1`;
    },
  },
};
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100vh;
}

.iframe-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.content-slide {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
}

.content-slide__inner {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.product-info {
  position: absolute;
  bottom: 4rem;
  right: 1rem;
  z-index: 1;
}
</style>
