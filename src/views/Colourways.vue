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
      <div
        v-if="data.modal.content.length >= 3"
        class="hotspot hotspot--special"
        @click="displayModal(2)"/>
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
      :breakpoint="breakpoint"
      :class="{ 'flex-container': desktop || breakpoint === 0 }"
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
    <Modal
      :display="showModal"
      v-bind="currentModal"
      @close="showModal = false"/>
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
      currentModal: {},
      showModal: false,
      selectedIndex: 0,
      desktop: window.innerWidth > 765,
      options: {
        slidesPerView: 4,
        breakpoints: {
          764: {
            slidesPerView: 3.5,
          },
        },
      },
      colourways: JSON.parse(JSON.stringify(this.data.products)),
    };
  },

  computed: {
    franchise() {
      return (this.$route.params.franchise === 'POD') ? `${this.$route.params.franchise}-S3.1` :
        this.$route.params.franchise;
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

    breakpoint() {
      return this.colourways.length > 3 ? 765 : 0;
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

      const modal = {
        background: this.data.modal.background,
        textColor: this.data.modal.textColor,
        content: this.data.modal.template,
      };

      modal.content.forEach((content) => {
        if (content.component === 'titles') {
          content.content = this.data.modal.content[contentIndex];
        }
      });

      this.currentModal = modal;
      this.showModal = true;
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
  margin-bottom: 3rem;
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
  padding: 1rem;
  margin-top: 94px;

  @media screen and (min-width: 765px) {
    margin-top: 5rem;
  }
}

.mainshoe {
  width: 100%;
  height: auto;
  display: block;

  @media screen and (min-width: 765px) {
    width: 77%;
    margin: 0 auto;
  }
}

.product-info {
  position: absolute;
  right: 10%;
  top: 70%;
  text-align: right;
  z-index: 1;
  width: 30%;

  @media screen and (min-width: 765px) {
    top: 50%;
    right: 8%;
  }

  @media screen and (min-width: 1366px) {
    top: 54%;
    right: -12%;
  }

  span {
    font-size: 1rem;
    display: block;
    text-align: right;
    margin: 5px;
  }

  .price {
    font-weight: bold;
  }
}

.product-info /deep/ .product-info__title,
.product-info /deep/ .product-info__price {
  font-size: 18px;
}

.product-info /deep/ .quickView {
  max-width: 50px;
}

.carousel-container {
  width: 100%;
  margin: 3rem 0;
}

.carousel-container /deep/ .image {
  opacity: 0.5;
  width: 100px;
  transition: opacity 0.5s;
  transform: translateZ(0);
}

.carousel-container /deep/ .image-container:hover .image {
  opacity: 1;
}

.hotspot {
  position: absolute;
  top: 37%;
  left: 12%;
  width: 40px;
  height: 40px;
  z-index: 2;
  transition: all 0.5s ease-in-out;
  transform: scale(0.75) rotate(0);
  cursor: pointer;

  @media only screen and (min-width: 765px) {
    top: 42%;
    left: 27%;
    width: 34px;
    height: 34px;
  }

  @media only screen and (min-width: 1366px) {
    top: 39%;
    left: 15%;
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
    transform: rotate(90deg);
  }

  &--right {
    left: 76%;
    top: 24%;
    transition: all 0.5s ease-in-out;
    transform: scale(0.75) rotate(0);

    @media only screen and (min-width: 765px) {
      left: 72%;
      top: 10%;
    }
  }

  &--right:hover {
    transform: rotate(90deg);
  }

  &--special {
    top: 93%;
    left: 35%;

    @media only screen and (min-width: 765px) {
      left: 22%;
      top: 87%;
    }

    @media only screen and (min-width: 1366px) {
      left: 12%;
      top: 79%;
    }
  }
}

.category--women.deerupt .hotspot--right {
  @media only screen and (max-width: 765px) {
    top: 20%;
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
  font-size: 9rem;
  font-weight: 900;
  opacity: 0.2;
  height: 60%;
  position: absolute;
  transform: rotate(-90deg);
  user-select: none;
  white-space: nowrap;

  @media only screen and (min-width: 765px) {
    font-size: 14rem;
    transform: rotate(0deg);
  }

  @media only screen and (min-width: 1366px) {
    font-size: 19rem;
    transform: rotate(0deg);
  }
}

.category--women .brand {
  opacity: 0.05;
}

.category--women.samba .brand {
  font-size: 6.5rem;
  white-space: nowrap;

  @media only screen and (min-width: 765px) {
    font-size: 14rem;
    display: flex;
    align-items: center;
  }
}

.is-content.deerupt .brand {
  height: 67%;
  font-size: 10rem;

  @media only screen and (min-width: 765px) {
    font-size: 20rem;
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
  font-size: 2em;
  margin-top: 0%;
  padding-top: 16%;

  @media screen and (min-width: 765px) {
    font-size: 3em;
    margin-top: 0%;
  }

  @media screen and (min-width: 1366px) {
    font-size: 2em;
    margin-top: -9%;
  }
}

.modal-container--pod /deep/ .title2,
.modal-container--pod /deep/ .title2 p {
  color: pink;
  font-weight: 200;
  font-size: 15px;
  padding-top: 4%;
  line-height: 1.5;

  @media screen and (min-width: 765px) {
    padding-top: 5%;
    font-size: 28px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1366px) {
    padding-top: 2%;
    font-size: 19px;
    width: 84%;
    padding-left: 16%;
  }
}

.modal-container--samba,
.modal-container--falcon {
  @media screen and (min-width: 1366px) {
    margin-top: 19%;
  }
}

.modal-container--samba /deep/ .title1,
.modal-container--falcon /deep/ .title1 {
  font-size: 2.2em;
  font-weight: bold;

  @media screen and (min-width: 1366px) {
    font-size: 3em;
    margin-top: -5%;
  }
}

.modal-container--falcon /deep/ .title1 {
  bottom: -70px;
  text-transform: uppercase;
}

.modal-container--samba /deep/ .title2,
.modal-container--falcon /deep/ .title2 {
  font-size: 1em;
  margin-top: -4%;

  @media screen and (min-width: 1366px) {
    margin-top: -17%;
  }
}

.modal-container--samba /deep/ .title2,
.modal-container--falcon /deep/ .title2,
.modal-container--samba /deep/ .title2 p,
.modal-container--falcon /deep/ .title2 p {
  font-size: 1.5em;
  font-weight: normal;
  padding-top: 36%;
  line-height: 1.5;

  @media screen and (min-width: 765px) {
    font-size: 2.5em;
    line-height: 1.3;
    margin-top: -6%;
  }

  @media screen and (min-width: 1366px) {
    padding-top: 19%;
    padding-bottom: 5%;
    font-weight: normal;
    font-size: 1.5em;
    width: 84%;
    padding-left: 20%;
  }
}

.modal-container--deerupt /deep/ .title1 {
  color: #222;
  font-weight: 900;
  letter-spacing: 1.5px;

  @media screen and (min-width: 1366px) {
    font-size: 28px;
    font-weight: 900;
    padding-top: 4%;
    letter-spacing: 1.5px;
  }
}

.modal-container--deerupt /deep/ .title2 p:first-child {
  font-weight: bold;
  letter-spacing: 1.5px;

  @media screen and (min-width: 1366px) {
    font-weight: 900;
    letter-spacing: 1.5px;
    margin-top: 0%;
  }
}

.modal-container--deerupt /deep/ .title2 p {
  color: #222;

  @media screen and (min-width: 765px) {
    font-size: 21px;
    line-height: 1.5;
    font-weight: 600;
  }

  @media screen and (min-width: 1366px) {
    font-size: 17px;
    font-weight: 500;
    line-height: 1.2;
    padding-top: 1%;
    width: 54%;
    padding-left: 23%;
  }
}

</style>
