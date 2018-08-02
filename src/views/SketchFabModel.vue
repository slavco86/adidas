<template>
  <div
    :style="background"
    :class="{ background : background, 'hide-tint': $route.name === '3d-view' }"
    class="content-slide">
    <div class="content-slide__inner">
      <Logo :color="logoColor" />
      <router-link
        v-if="$route.name === 'content'"
        class="transitional-page"
        to="3d-view"
        append>
        <picture class="transitional-page__pic">
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
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29.8 27"
            class="rotate-svg">
            <defs/>
            <g
              id="Layer_2"
              data-name="Layer 2">
              <g
                id="Layer_1-2"
                data-name="Layer 1">
                <path
                  d="M16.3 27a13.6 13.6 0 0 1-5.2-1l.8-1.9a11.4 11.4 0 1 0-7-10.5H3A13.5 13.5 0 1 1 16.3 27z"
                  class="cls-1"/>
                <path
                  d="M2.5 12.4h5.8v2H2.5z"
                  class="cls-1"
                  transform="rotate(-45.2 5.4 13.4)"/>
                <path
                  d="M1.7 10.5h2v5.7h-2z"
                  class="cls-1"
                  transform="rotate(-44.9 2.7 13.4)"/></g></g></svg>
          <p class="cta">click to rotate in 360°</p>
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
      <MouseDown
        v-if="this.$route.name !== '3d-view'"
        class="scroll"
        :height=50
        :width=35
        :fill="'transparent'"
        :stroke="'white'"
        :fillButton="'white'"
        :strokeButton="'white'">
      </MouseDown>
    </div>
  </div>
</template>

<script>
import ButtonClose from '@/components/ButtonClose.vue';
import ProductInfo from '@/components/ProductInfo.vue';
import Logo from '@/components/AdidasLogo.vue';
import MouseDown from '../components/MouseDown.vue';


export default {
  components: {
    ButtonClose,
    ProductInfo,
    Logo,
    MouseDown,
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
      return this.content['sketch-fab-model'].id;
    },

    modelSrc() {
      return `https://sketchfab.com/models/${this.modelId}/embed?autospin=0.2&amp;autostart=1&amp;camera=0&amp;preload=1&amp;transparent=1`;
    },

    logoColor() {
      return (this.$route.params.gender === 'women') ? '#222' : '#fff';
    },

    background() {
      const { background } = this.content['sketch-fab-model'];

      if (background) {
        if (background.charAt(0) === '#') {
          return {
            backgroundColor: background,
          };
        }

        return {
          backgroundImage: `url(${background})`,
        };
      }

      return undefined;
    },
  },
};
</script>

<style lang="scss" scoped>

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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.content-slide__inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-info {
  position: absolute;
  bottom: 4rem;
  right: 4rem;
  z-index: 1;
}

.transitional-page {
  display: flex;
  align-items: center;
  justify-content: center;
}

.transitional-page__img {
  max-height: 80vh;
  max-width: 100%;
  min-height: 100%;
  opacity: 0;
  transform: translate3d(0, -20%, 0);
  transition: opacity 0.2s ease-in, transform 0.3s ease-in;
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
  align-items: center;
  border-radius: 100%;
  color: #fff;
  display: flex;
  font-size: 1.25rem;
  font-weight: 900;
  height: 105px;
  justify-content: center;
  margin: 2.5rem 0 0.5rem;
  width: 105px;
  position: relative;
  left: 10px;
}

.transitional-page__label .cta {
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1rem;
  font-weight: 900;
  text-transform: uppercase;
}

.background::before {
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  content: '';
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: background-color 0.4s;
}

.samba .background::before,
.pod .background::before {
  background-color: transparent;
}

.background.hide-tint::before {
  background-color: transparent;
}

.is-content.deerupt .content-slide /deep/ .product-info {
  color: black;
}

.is-content.deerupt .content-slide /deep/ .product-info .cta svg circle,
.is-content.deerupt .content-slide /deep/ .product-info .cta svg polygon,
.is-content.deerupt .content-slide /deep/ .product-info .cta svg polyline {
  stroke: black;
}

.is-content.deerupt .content-slide /deep/ .product-info .cta:hover svg polygon,
.is-content.deerupt .content-slide /deep/ .product-info .cta:hover svg polyline {
  stroke: white;
}

.rotate-svg {
  width: 100px;
  height: 100px;
  position: absolute;
  fill: #fff;
}

.is-content.deerupt .content-slide /deep/ .close circle {
  fill: black;
  stroke: black;
}

.is-content.deerupt .content-slide /deep/ .close path {
  stroke: white;
}

.scroll {
  text-align: center;
}

.samba .scroll /deep/ .scrolltext {
  color: black;
}
</style>
