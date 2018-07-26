<template>
  <div class="section-colourways">
    <div
      class="brand">
      {{ franchise }}
    </div>
    <Logo
      :color="logoColor"
      class="logo"/>
    <div class="main-container">
      <div
        class="hotspot"
        @click="displayModal(0)"/>
      <div
        class="hotspot hotspot--right"
        @click="displayModal(1)"/>
      <ProductInfo v-bind="colourways[selectedIndex]"/>
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
      :responsive="true"
      :class="{ 'flex-container': desktop }"
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
      :modal-franchise="franchise"
      @close="showModal = false">
      <Titles
        :headline="hotspots[activeHotspot].title"
        :subtext="hotspots[activeHotspot].subtext"
        :class="{'modal-container--pod': this.$route.params.franchise === 'POD',
                 'modal-container--samba': this.$route.params.franchise === 'Samba Rose',
                 'modal-container--deerupt': this.$route.params.franchise === 'Deerupt',
                 'modal-container--allBrands': (this.$route.params.franchise !== 'Deerupt'
                   || this.$route.params.franchise !== 'Samba rose'
                   || this.$route.params.franchise !== 'POD')
        }"
        class="modal-container"/>
    </modal>
  </div>
</template>

<script>
import Carousel from '@/containers/Carousel.vue';
import Modal from '@/components/Modal.vue';
import Titles from '@/components/Titles.vue';
import Logo from '@/components/AdidasLogo.vue';
import QuickBuy from '@/components/QuickBuy.vue';
import ProductInfo from '@/components/ProductInfo.vue';

export default {
  name: 'ColourwaysContainer',
  components: {
    Carousel,
    Modal,
    Titles,
    Logo,
    QuickBuy,
    ProductInfo,
  },

  provide: {
    trackingName: 'colourways',
  },

  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
    context: {
      type: String,
      default: undefined,
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
      desktop: window.innerWidth > 765,
      options: {
        slidesPerView: 4,
        breakpoints: {
          764: {
            slidesPerView: 2.5,
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

    logoColor() {
      return (this.$route.params.gender === 'women') ? '#222' : '#fff';
    },
  },

  created() {
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
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.carousel-container /deep/ .image.isActive {
  opacity: 1;
}

.section-colourways {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  text-align: center;
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
  position: absolute;
  right: 10%;
  top: 75%;
  text-align: right;
  z-index: 1;

  span {
    font-size: 1rem;
    display: block;
    text-align: right;
    margin: 5px;
  }

  .price {
    font-weight: bold;
  }

  /deep/ .quickView {
    fill: transparent;
    stroke: #fff;
  }
}

.carousel-container {
  width: 100%;
  margin-top: 3rem;
}

.carousel-container /deep/ .image {
  opacity: 0.5;
  width: 170px;
  transition: opacity 0.5s;
  transform: translateZ(0);
}

.carousel-container /deep/ .image-container:hover .image {
  opacity: 1;
}

.hotspot {
  position: absolute;
  top: 34%;
  left: 22%;
  width: 30px;
  height: 30px;
  z-index: 2;

  @media only screen and (min-width: 765px) {
    top: 42%;
    left: 27%;
    width: 34px;
    height: 34px;
  }

  @media only screen and (min-width: 1366px) {
    top: 39%;
    left: 21%;
    width: 70px;
    height: 70px;
  }

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

  &:hover {
    transform: scale(1.01) rotate(90deg);
    transition: transform 0.5s ease-in-out;
  }

  &--right {
    left: 56%;
    top: 59%;

    @media only screen and (min-width: 765px) {
      left: 56%;
      top: 66%;
    }
  }

  &--right:hover {
    transform: scale(1.01) rotate(90deg);
    transition: transform 0.8s ease-in-out;
  }
}

.category--women .hotspot {
  &::after,
  &::before {
    border-color: #222;
  }
}

.brand {
  color: #666;
  font-size: 8rem;
  font-weight: 900;
  height: 60%;
  opacity: 0.5;
  position: absolute;
  transform: rotate(-90deg);
  user-select: none;

  @media only screen and (min-width: 765px) {
    font-size: 14rem;
    transform: rotate(0deg);
  }
}

.modal-container /deep/ .title1 {
  font-size: 3em;
  font-weight: lighter;

  @media screen and (min-width: 765px) {
    font-size: 4em;
  }
}

.modal-container /deep/ .title2 {
  font-size: 1.5em;
  font-weight: lighter;

  @media screen and (min-width: 765px) {
    font-size: 2.5em;
  }
}

.modal-container--pod /deep/ .title1 {
  color: pink;
  font-weight: 900;

  @media screen and (min-width: 765px) {
    font-size: 5em;
  }
}

.modal-container--pod /deep/ .title2 p {
  color: white;
  font-weight: 300;
  font-size: 24px;
  line-height: 1;

  @media screen and (min-width: 765px) {
    padding-top: 5%;
    font-size: 32px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1366px) {
    padding-top: 0%;
    font-size: 26px;
  }
}

.modal-container--samba /deep/ .title1 {
  @media screen and (min-width: 1366px) {
    font-size: 3em;
  }
}

.modal-container--samba /deep/ .title2 p {
  padding-top: 15%;
  color: #222;
  font-weight: 400;

  @media screen and (min-width: 765px) {
    font-size: 33px;
    line-height: 1.5;
    font-weight: bold;
  }

  @media screen and (min-width: 1366px) {
    padding-top: 0%;
    font-weight: normal;
  }
}

.modal-container--deerupt /deep/ .title1 {
  color: #222;
  @media screen and (min-width: 1366px) {
    font-size: 50px;
  }
}

.modal-container--deerupt /deep/ .title2 p {
  color: #222;
  @media screen and (min-width: 765px) {
    font-size: 32px;
    line-height: 1.5;
    font-weight: 400;
  }

  @media screen and (min-width: 1366px) {
    font-size: 32px;
    line-height: 1.5;
    font-weight: 400;
  }
}

.modal-container--deerupt /deep/ .title1 {
  color: #222;
}

.modal-container--allBrands /deep/ .title1 {
  color: #222;
  font-weight: normal;
  @media screen and (min-width: 1366px) {
    padding-top: 2%;
  }
}
.modal-container--allBrands /deep/ .title2 p {
  color: #222;

  @media screen and (min-width: 1366px) {
    line-height: 1.5;
  }
}

</style>
