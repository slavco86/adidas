<template>
  <div class="colourwayscontainer">
    <div class="franchise-container">
      <h1 class="derupt">{{ franchise }}</h1>
    </div>

    <img
      id="addafter"
      class="addafter"
      src="../assets/add.png"
      @click="showModal = true; activeHotspot = 1">

    <h3 class="shoppingbagtexttitle">{{ franchise }}</h3>
    <h4 class="shoppingbagtext">£80.00</h4>
    <img
      src="../assets/shoppingbag.png"
      class="shoppingbagicon">

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
        contentPerView: 7,
        breakpoints: {
          764: {
            contentPerView: 4.5,
            spaceBetween: 10,

          },
          1024: {
            contentPerView: 5.2,
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

.adidas {
  display: none;
}

.mainimage {
  position: relative;
  z-index: 1;
}

.franchise-container {
 width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.derupt {
  font-family: 'HCo Gotham SSm';
  color: #333333;
  letter-spacing: -10px;
  font-size: 169px;
  font-weight: 900;
  z-index: 0;
  transform: rotate(270deg);
  width: 100%;
}

.add {
  position: absolute;
  top: 51%;
  left: 15%;
  width: 24px;
}

.mainshoe {
  margin-top: 30%;
  width: 85%;
  height: 85%;
}

.addafter {
  position: absolute;
  top: 73%;
  right: 35%;
  width: 24px;
  z-index: 2;
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

.shoppingbagicon {
  position: absolute;
  width: 50px;
  top: 62%;
  right: 6%;
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


.adidas {
    display: inline;
    position: absolute;
    width: 100px;
    top: 4%;
    left: 7%;
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

// .franchise-container {
//     transform: rotate(360deg);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     margin-top: -90%;
//     margin-left: -1%;
//     height: 41%;
//   }

//   .derupt {
//     font-family: 'HCo Gotham SSm';
//     color:#333333;
//     letter-spacing: -10px;
//     transform: rotate(0deg);
//     font-size: 192px;
//     flex: 1 0 auto;
//   }


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

  // .franchise-container {
  //   transform: rotate(360deg);
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   width: 100%;
  //   margin-top: -41%;
  //   margin-left: -2%;
  //   height: 43%;
  // }

  // .derupt {
  //   font-family: 'HCo Gotham SSm';
  //   transform: rotate(0deg);
  //   font-size: 342px;
  //   flex: 1 0 auto;
  // }

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

