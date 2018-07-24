<template>
  <div class="content-slide">
    <div class="content-slide__inner">
      <router-link
        v-if="$route.name === 'content'"
        class="transitional-page"
        to="3d-view"
        append>
        <picture>
          <source
            v-if="product.image.mobile"
            :srcset="product.image.mobile"
            media="(min-width: 765px)">
          <img
            :src="product.image.desktop"
            :alt="`${product.brand} - ${product.title}`"
            :class="{active : active }"
            class="transitional-page__img">
        </picture>
        <div
          :class="{active : active }"
          class="transitional-page__label">
          <p class="center">360°</p>
          <svg
            viewBox="0 0 100 100"
            class="rotate-svg">
            <path
              fill-rule="evenodd"
              d="M48.6 89A39.06 39.06 0 0 1 9.52 50c0-21.52 17.51-39 39.06-39a39.09 39.09 0 0 1
              38.94 35.31 2 2 0 0 1-4 .38A35.03 35.03 0 0 0 48.6 15a35 35 0 1 0 0 70 35.1 35.1 0 0
              0 31.82-20.19l-14.79 4.31a2 2 0 1 1-1.12-3.84l18.72-5.47a2 2 0 0 1 .81-.06 2 2 0 0 1
              .56.16 2 2 0 0 1 .2.1 2 2 0 0 1 .46.37 2 2 0 0 1 .25.3 2 2 0 0 1 .03.04 2 2 0 0 1
              .13.31 2 2 0 0 1 .03.03 2 2 0 0 1 .1.44l4.62 18.84a2 2 0 0 1-1.91 2.5 2 2 0 0
              1-2-1.53l-3.22-13.25A39.14 39.14 0 0 1 48.6 89z"
              fill="#fff"
              overflow="visible"
              style="text-indent:0; text-transform:none; block-progression:tb"/>
          </svg>

          <p class="cta">Rotate in 360°</p>
        </div>
      </router-link>
      <div
        v-else
        class="iframe-container">
        <ButtonClose :to="`/${$route.params.gender}/${$route.params.franchise}/`" />
        <ProductInfo v-bind="product"/>
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
    active: {
      type: Boolean,
      default: false,
    },

    content: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    product() {
      return this.content.colourways.products[0];
    },

    modelId() {
      return this.content['sketch-fab-model'];
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

.transitional-page {
  display: flex;
  align-items: center;
  justify-content: center;
}

.transitional-page__img {
  width: auto;
  min-height: 100%;
  max-height: 80vh;
  opacity: 0;
  transition: opacity 0.2s ease-in, transform 0.3s ease-in;
  transform: translate3d(0, -20%, 0);
}

.transitional-page__img.active {
  opacity: 1;
  transition-delay: 0.5s;
  transform: translate3d(0, 0, 0);
}

.transitional-page__label {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: opacity 0.4s ease-in;
}

.transitional-page__label.active {
  opacity: 1;
  transition-delay: 1s;
}

.transitional-page__label p {
  margin: 0;
  line-height: 1.5;
}

.transitional-page__label .center {
  margin: 5rem 0 3rem;
}

.transitional-page__label .cta {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 900;
}

.rotate-svg {
  width: 150px;
  height: 150px;
  position: absolute;
  animation: spin 10s linear infinite reverse;
  opacity: 0.7;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
