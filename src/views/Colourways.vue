<template>
  <div class="colourwayscontainer">
    <div class="mainimage">
      <img
        class="adidas"
        src="../assets/adidas_white.svg">
      <img
        class="add"
        src="../assets/add.png">
      <img
        :key="defaultImage"
        :src="defaultImage"
        class="mainshoe">
      <img
        id="addafter"
        class="addafter"
        src="../assets/add.png"
        @click="showModal = true">
      <h3 class="shoppingbagtexttitle">{{ franchise }}</h3>
      <h4 class="shoppingbagtext">£80.00</h4>
      <img
        src="../assets/shoppingbag.png"
        class="shoppingbagicon">
    </div>
    <Carousel
      ref="carousel"
      :slides="slides"
      :options="options"
      class="carousel-container">
      <div
        slot-scope="{slide}"
        class="image-container">
        <img
          :src="slide.image"
          class="image"
          @click="mainImage($refs.carousel.$children[0].$children[0].swiper.clickedIndex)">
      </div>
    </Carousel>
    <div class="franchise-container">
      <h1 class="derupt">{{ franchise }}</h1>
    </div>
    <modal v-if="showModal" @close="showModal = false" >
      <h1 slot="header" id="modalh">DEERUPT</h1>
      <h2 slot="body"><span id="modalb">DISRUPTIVELY SIMPLE</span><br /><br />
      <span class="modalc">With Deerupt, a silhouette becomes <br />
          the unexpected. Comfort becomes </br >
          the unprecedented. Fit becomes <br />
          an experience. </span>
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

  data() {
    return {
      showModal: false,
      defaultImage: '',
      slides: [
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-0-04670ce96db4cc1da203cc6895aa85e0.png',
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-1-6e0103d3b8a1653704b09acad135b6a9.png',
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-2-57ac562da9a5af2fbd89974727329a02.png',
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-3-48065ea7006370f09ba101c518513105.png',
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-4-0ea11a1bd092bb5eacdc608aac48d64c.png',
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-5-6fae8c215df40f8eac27d0a2d34c1cf3.png',
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-6-2001fef6fd965b9b7ff7456d1f103818.png',
        },
      ],

      options: {
        responsive: true,
        breakpoints: {
          765: {
            slidesPerView: 4.5,
          },
          1600: {
            slidesPerView: 7,
            // spaceBetween: -400,
          },
        },
      },
    };
  },

  computed: {
    franchise() {
      return this.$route.params.franchise;
    },
  },

  mounted() {
    this.mainImage(0);
  },

  methods: {
    mainImage(index = 0) {
      this.defaultImage = this.slides[index].image;
    },
  },

};

</script>

<style lang="scss" scoped>

@font-face {
font-family: 'HCo Gotham Cond SSm';
src:url('../assets/fonts/B1CFB00FA67031B66.woff2') format('woff2'),
url('../assets/fonts/B1CFB00FA67031B66.woff') format('woff');
font-weight: 400;
font-style: normal;
}


@font-face {
font-family: 'HCo Gotham Cond SSm';
src:url('../assets/fonts/9AF882D5BD620EB9E.woff2') format('woff2'),
url('../assets/fonts/9AF882D5BD620EB9E.woff') format('woff');
font-weight: 500;
font-style: normal;
}


@font-face {
font-family: 'HCo Gotham Cond SSm';
src:url('../assets/fonts/DD21C5786A9E30A24.woff2') format('woff2'),
url('../assets/fonts/DD21C5786A9E30A24.woff') format('woff');
font-weight: 600;
font-style: normal;
}


@font-face {
font-family: 'HCo Gotham SSm';
src:url('../assets/fonts/F4715F49B60D9B144.woff2') format('woff2'),
url('../assets/fonts/F4715F49B60D9B144.woff') format('woff');
font-weight: 400;
font-style: normal;
}


@font-face {
font-family: 'HCo Gotham SSm';
src:url('../assets/fonts/725262BC71949F842.woff2') format('woff2'),
url('../assets/fonts/725262BC71949F842.woff') format('woff');
font-weight: 500;
font-style: normal;
}


@font-face {
  font-family: 'HCo Gotham SSm';
  src: url('../assets/fonts/B5416F0FED9EA9CD2.woff2') format('woff2'),
  url('../assets/fonts/B5416F0FED9EA9CD2.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

.colourwayscontainer {
  position: relative;
  background: #222;
  height: 100%;
}

.adidas {
  display: none;
}

.mainimage {
  position: relative;
  z-index: 1;
}

.close {
  position: absolute;
  top: 2%;
  right: 4%;
  height: 42px;
}

.franchise-container {
  transform: rotate(270deg);
  bottom: 17%;
  left: -39%;
  width: 100vh;
  height: 64vh;
  position: absolute;
}


.derupt {
  font-family: 'HCo Gotham SSm';
  font-size: 162px;
  font-weight: 900;
  z-index: 0;
  color:#333333;
  letter-spacing: -10px;
}

.add {
  position: absolute;
  top: 36%;
  left: 19%;
  width: 4.5%;
  height: 4%;
}

.mainshoe {
  margin-top: 30%;
  width: 85%;
  height: 85%;
}

.addafter {
  position: absolute;
  top: 76%;
  right: 36%;
  width: 4.5%;
  height: 4%;
  z-index: 2;
}

.shoppingbagicon {
  position: absolute;
  width: 50px;
  top: 62%;
  right: 6%;
}

.shoppingbagtexttitle {
  position: absolute;
  top: 50%;
  right: 6%;
  color: white;
  font-size: 11px;
}

.shoppingbagtext {
  position: absolute;
  top: 54%;
  right: 6%;
  color: white;
  font-size: 10px;
}

.image-container {
  position: relative;
}

.image {
  display: block;
  width: 80px;
  height: 74px;
  opacity: 0.5;
}

.image:hover {
  opacity: 1;
}

#modalh {
  font-family: 'HCo Gotham SSm';
  font-size: 32px;
  font-weight: 900;
}

#modalb {
  font-family: 'HCo Gotham SSm';
  font-size: 16px;
  font-weight: 700;
}

#modalc {
  font-family: 'HCo Gotham SSm';
}

@media only screen and (min-width: 1366px) {
  .colourwayscontainer {
    background: #222;
    height: 100%;
  }

  .mainimage {
    position: relative;
  }

  .adidas {
    display: inline;
    position: absolute;
    width: 72px;
    top: 5%;
    left: 6%;
  }

  .close {
    position: absolute;
    top: 4%;
    height: 10%;
    right: 5%;
  }

  .add {
    position: absolute;
    top: 41%;
    left: 35%;
    width: 48px;
    height: 48px;
    opacity: 0.55;
  }

  .mainshoe {
    margin-top: 5%;
    width: 30%;
    height: 30%;
    z-index: 1;
  }

#addafter {
    position: absolute;
    top: 69%;
    left: 54%;
    width: 48px;
    height: 48px;
    opacity: 0.55;
    z-index: 2;
  }

  .franchise-container {
    transform: rotate(360deg);
    position: absolute;
    top: 19%;
    left: -1%;
    width: 100vh;

  }

  .derupt {
    font-family: 'HCo Gotham SSm';
    transform: rotate(0deg);
    font-size: 25vw;
    font-weight: 900px;
    letter-spacing: -10px;
    width: 180vh;
    font-size: 337px;
  }

  .shoppingbagtexttitle {
    position: absolute;
    top: 60%;
    right: 14%;
    color: white;
    font-size: 23px;
  }

  .shoppingbagtext {
    position: absolute;
    top: 66%;
    right: 14%;
    color: white;
    font-size: 21px;
  }

  .shoppingbagicon {
    right: 14%;
    top: 73%;
    width: 72px;
    z-index: 1;
  }

  .carousel-container {
    margin: 0 auto;
    margin-top: 6%;
    width: 50%;
  }

  .image {
    display: block;
    width: 80px;
    height: 74px;
    opacity: 0.5;
  }

  .image:hover {
    opacity: 1;
  }
}

</style>

