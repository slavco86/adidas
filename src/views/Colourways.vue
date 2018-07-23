<template>
  <div class="section-colourways">
    <div class="brand">
      {{ franchise }}
    </div>
    <Logo
      color="#ffffff"
      class="logo"/>
    <div class="main-container">
      <div
        class="hotspot hotspot--invert"
        @click="displayModal(0)"/>
      <div
        class="hotspot hotspot--invert hotspot--right"
        @click="displayModal(1)"/>
      <div class="product-info">
        <span class="title">{{ franchise }}</span>
        <span class="price">£{{ colourways[selectedIndex].price }}</span>
        <img
          src="../assets/basket-icon.svg"
          class="quickbuy-icon">
      </div>
      <div class="main-image">
        <img
          :src="mainImage"
          class="mainshoe">
      </div>
    </div>
    <Carousel
      ref="carousel"
      :slides="colourways"
      :options="options"
      class="carousel-container">
      <div
        slot-scope="{slide}"
        class="image-container">
        <img
          :src="slide.image.desktop"
          :class="{ isActive : slide.active }"
          class="image"
          @click="selectColourway(slide.key)">
      </div>
    </Carousel>
    <modal
      v-if="showModal"
      @close="showModal = false">

      <Titles
        :headline="hotspots[activeHotspot].title"
        :subtext="hotspots[activeHotspot].subtext"/>
    </modal>
  </div>
</template>

<script>
import Carousel from '@/containers/Carousel.vue';
import Modal from '@/components/Modal.vue';
import Titles from '@/components/Titles.vue';
import Logo from '@/components/AdidasLogo.vue';

export default {
  name: 'ColourwaysContainer',
  components: {
    Carousel,
    Modal,
    Titles,
    Logo,
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
      activeHotspot: null,
      showModal: false,
      selectedIndex: 0,
      options: {
        slidesPerView: 4,
        breakpoints: {
          764: {
            slidesPerView: 2,
          },
        },
      },
      colourways: JSON.parse(JSON.stringify(this.data.products)),
    };
  },

  computed: {
    franchise() {
      return this.$route.params.franchise;
    },

    mainImage() {
      return this.colourways[this.selectedIndex].image.desktop;
    },

    hotspots() {
      return this.data.hotspots;
    },
  },

  mounted() {
    this.colourways.map((obj) => {
      const colourway = obj;
      colourway.active = false;
      return colourway;
    });

    this.selectColourway(0);
  },

  methods: {
    displayModal(contentIndex) {
      this.showModal = true;
      this.activeHotspot = contentIndex;
    },

    selectColourway(selectedSlide) {
      this.colourways[this.selectedIndex].active = false;
      this.colourways[selectedSlide].active = true;

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

.logo {
  width: 70px;
  position: absolute;
  top: 1rem;
  left: 1rem;
  opacity: 0;
  transition: opacity 1s;

  @media screen and (min-width: 765px) {
    opacity: 1;
  }
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-image {
  padding: 4rem;
  margin-top: 0;

  @media screen and (min-width: 765px) {
    margin-top: 5rem;
  }
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
  z-index: 2;

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
      border-color: #fff;
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
