<template>
  <div class="section-colourways">
    <div class="brand">
      {{ franchise }}
    </div>
    <div class="main-container">
      <div class="hotspot hotspot--invert"/>
      <div class="hotspot hotspot--invert hotspot--right"/>
      <div class="product-info">
        <span class="title">{{ franchise }}</span>
        <span class="price">£80.00</span>
        <img src="../assets/basket-icon.svg" class="quickbuy-icon">
      </div>
      <div class="main-image">
        <img :src="mainImage" class="mainshoe">
      </div>    
    </div>
      <!-- <img class="adidas-logo" src="../assets/adidas_white.svg"> -->
    <Carousel
      ref="carousel"
      :slides="content.products"
      :options="options"
      class="carousel-container">
      <div
        slot-scope="{slide}"
        class="image-container">
      <img
        :src="slide.image.desktop"
        :class="{ isActive : slide.active }"
        class="image"
        @click="changeImage(slide.key)">
    </div>
  </Carousel>
  <modal
    v-if="showModal"
    @close="showModal = false" >
    <h1
      id="modalh"
      slot="header">
      {{ content.hotspots }}
    </h1>
    <h2 slot="body">
      <span id="modalb">DISRUPTIVELY SIMPLE</span>
      <br><br>
      <span class="modalc">With Deerupt, a silhouette becomes <br>
        the unexpected. Comfort becomes <br>
        the unprecedented. Fit becomes <br>
        an experience.
      </span>
    </h2>
  </modal>
</div>
</template>

<script>
import Carousel from '@/containers/Carousel.vue';
import modal from '@/components/Modal.vue';

export default {
  name: 'ColourwaysContainer',
  components: {
    Carousel,
    modal,
  },

  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      showModal: false,
      selectedIndex: 0,
      activeHotspot: 0,
      options: {
        slidesPerView: 4,
        breakpoints: {
          764: {
            slidesPerView: 2,
          },
        },
      },
    };
  },

  computed: {
    franchise() {
      return this.$route.params.franchise;
    },

    mainImage() {
      return this.content.products[this.selectedIndex].image.desktop;
    },
    content() {
      return this.data;
    },
  },

  methods: {
    changeImage(selectedSlide) {
      this.content[this.selectedIndex].active = false;
      this.content[selectedSlide].active = true;

      this.selectedIndex = selectedSlide;
    },
  },

};

</script>


<style lang="scss" scoped>
.section-colourways {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-image {
  padding: 4rem;
  margin-top: 5rem;
}

.mainshoe {
  width: 100%;
  height: auto;
  display: block;

  @media screen and (min-width: 765px) {
    width: 70%;
    margin: 0 auto;
  }
}

.product-info {
  color: white;
  position: absolute;
  right: 10%;
  top: 45%;
  text-align: right;

  span {
    font-size: 1rem;
    display: block;
    text-align: right;
    margin: 5px;
  }

  .price {
    font-weight: bold;
  }

  .quickbuy-icon {
    width: 35%;
    height: auto;
    filter: invert(100);
    margin-top: 10px;
  }
}

.carousel-container {
  width: 100%;
  margin-top: 3rem;
}

.carousel-container /deep/ .image {
  width: 100%;

  @media screen and (min-width: 765px) {
    width: 70%;
  }
}

.hotspot {
  position: absolute;
  top: 45%;
  left: 16%;
  width: 45px;
  height: 45px;
  color: black;

  &::before,
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    border-bottom: 1px solid;
    left: 0;
    top: -54%;
    position: absolute;
  }

  &::after {
    top: 0;
    left: 48%;
    border-bottom: none;
    border-left: 1px solid;
  }

  &--invert {
    &::after,
    &::before {
      border-color: white;
    }
  }

  &--right {
    left: 60%;
    top: 58%;
  }
}

.brand {
  font-size: 8rem;
  position: absolute;
  color: #333;
  font-weight: 900;
  height: 60%;
  transform: rotate(-90deg);

  @media only screen and (min-width: 765px) {
    font-size: 18rem;
    transform: rotate(0deg);
  }
}
</style>