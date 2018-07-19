<template>
  <div class="colourwayscontainer">
    <div class="mainimage">
      <img
        class="adidas"
        src="../assets/adidas_white.svg">
      <img
        class="add"
        src="../assets/add.png">
      <div class="mainShoeContainer">
        <img
          :src="mainImage"
          class="mainshoe">
      </div>
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
          :class="{ isActive : slide.active }"
          class="image"
          @click="changeImage(slide)">
      </div>
    </Carousel>
    <div class="franchise-container">
      <h1 class="derupt">{{ franchise }}</h1>
    </div>
    <modal
      v-if="showModal"
      @close="showModal = false" >
      <h1
        id="modalh"
        slot="header">
        DEERUPT
      </h1>
      <h2 slot="body"><span id="modalb">DISRUPTIVELY SIMPLE</span><br><br>
        <span class="modalc">With Deerupt, a silhouette becomes <br>
          the unexpected. Comfort becomes <br>
          the unprecedented. Fit becomes <br>
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
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-2-57ac562da9a5af2fbd89974727329a02.png',
          active: true,
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-0-04670ce96db4cc1da203cc6895aa85e0.png',
          active: false,
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-1-6e0103d3b8a1653704b09acad135b6a9.png',
          active: false,
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-3-48065ea7006370f09ba101c518513105.png',
          active: false,
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-4-0ea11a1bd092bb5eacdc608aac48d64c.png',
          active: false,
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-5-6fae8c215df40f8eac27d0a2d34c1cf3.png',
          active: false,
        },
        {
          image: 'https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-6-2001fef6fd965b9b7ff7456d1f103818.png',
          active: false,
        },
      ],

      options: {
        // responsive: true,
        slidesPerView: 7,
        // spaceBetween: -100,
        breakpoints: {
          764: {
            slidesPerView: 4.5,
            spaceBetween: 10,

          },
          1024: {
            slidesPerView: 5.2,
            spaceBetween: 100,
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
      return this.slides.filter(slide => slide.active).pop().image;
    },
  },

  methods: {
    changeImage(selectedSlide) {
      this.slides.map((slide) => {
        const newSlide = slide;

        if (newSlide.image === selectedSlide.image) {
          newSlide.active = true;
          return true;
        }

        newSlide.active = false;
        return false;
      });
    },
  },

};

</script>

<style lang="scss" scoped>

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


.image.isActive {
  opacity: 1;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -109%;
  width: 40%;
  height: 44%;
}

.derupt {
  font-family: 'HCo Gotham SSm';
  color:#333333;
  letter-spacing: -10px;
  font-size: 169px;
  font-weight: 900;
  z-index: 0;
  flex: 1 0 auto;
}

.add {
  position: absolute;
  top: 50%;
  left: 18%;
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

.carousel-container {
  margin-top: 15%;
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


@media only screen and (min-width: 765px) {

.colourwayscontainer {
    position: relative;
    background: #222;
    height: 98vh;
  }

.mainimage {
    position: relative;
  }


.adidas {
    display: inline;
    position: absolute;
    width: 100px;
    top: 4%;
    left: 7%;
  }

.close {
    position: absolute;
    top: 3%;
    right: 3%;
    width: 67px;
    height: 70px;
  }

  .add {
    position: absolute;
    top: 53%;
    left: 21%;
    width: 48px;
    height: 48px;
    opacity: 0.55;
  }

  .mainshoe {
    width: 61%;
    z-index: 1;
  }

  #addafter {
    position: absolute;
    top: 73%;
    left: 58%;
    width: 48px;
    height: 48px;
    opacity: 0.55;
    z-index: 2;
  }

.franchise-container {
    transform: rotate(360deg);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 139%;
    margin-top: -90%;
    margin-left: -20%;
    height: 41%;
  }

  .derupt {
    font-family: 'HCo Gotham SSm';
    color:#333333;
    letter-spacing: -10px;
    transform: rotate(0deg);
    font-size: 192px;
    flex: 1 0 auto;
  }


  .shoppingbagtexttitle {
    position: absolute;
    top: 59%;
    right: 11%;
    color: white;
    font-size: 23px;
  }

  .shoppingbagtext {
    position: absolute;
    top: 64%;
    right: 11%;
    color: white;
    font-size: 21px;
  }

  .shoppingbagicon {
    right: 11%;
    top: 70%;
    width: 72px;
    z-index: 1;
  }

  .carousel-container {
    margin-top: 6%;
    margin-left: 5%;
  }

  .image {
    display: block;
    width: 155px;
    height: 154px;
    opacity: 0.5;
  }

  #modalh {
  font-family: 'HCo Gotham SSm';
  font-size: 110px;
  font-weight: 900;
}

  #modalb {
  font-family: 'HCo Gotham SSm';
  font-size: 37px;
  font-weight: 700;
}

 .modalc {
  font-family: 'HCo Gotham SSm';
  font-size: 24px;
}

}


@media only screen and (min-width: 1025px) {
  .colourwayscontainer {
    background: #222;
    height: 100%;
  }

  .mainimage {
    position: relative;
  }

  .mainShoeContainer{
    padding-top: 5%;
  }

  .adidas {
    display: inline;
    position: absolute;
    width: 72px;
    top: 9%;
    left: 6%;
  }

  .close {
    position: absolute;
    top: 8%;
    height: 10%;
    right: 3%;
  }

  .add {
    position: absolute;
    top: 48%;
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
    top: 72%;
    left: 55%;
    width: 48px;
    height: 48px;
    opacity: 0.55;
    z-index: 2;
  }

  .franchise-container {
    transform: rotate(360deg);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 103%;
    margin-top: -41%;
    margin-left: -2%;
    height: 43%;
  }

  .derupt {
    font-family: 'HCo Gotham SSm';
    transform: rotate(0deg);
    font-size: 342px;
    flex: 1 0 auto;
  }

  .shoppingbagtexttitle {
    position: absolute;
    top: 52%;
    right: 13%;
    color: white;
    font-size: 23px;
  }

  .shoppingbagtext {
    position: absolute;
    top: 59%;
    right: 13%;
    color: white;
    font-size: 21px;
  }

  .shoppingbagicon {
    right: 13%;
    top: 65%;
    width: 72px;
    z-index: 1;
  }

  .carousel-container {
    margin: 0 auto;
    margin-top: 3%;
    width: 50%;
  }

  .image {
    display: block;
    width: 93px;
    height: 97px;
    // opacity: 0.5;
  }

  #modalh {
  font-family: 'HCo Gotham SSm';
  font-size: 53px;
  font-weight: 900;
}

  #modalb {
  font-family: 'HCo Gotham SSm';
  font-size: 27px;
  font-weight: 700;
}

 .modalc {
  font-family: 'HCo Gotham SSm';
  font-size: 20px;
}

}

</style>

