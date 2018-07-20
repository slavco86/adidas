<template>
  <div class="section-colourways">
    <!-- <div class="brand-wrapper">
      <div class="brand">
        {{ franchise }}
      </div>
    </div> -->
    <div class="main-container">
      <div class="hotspot hotspot--invert"/>
      <div class="hotspot hotspot--invert hotspot--right"/>
      <div class="product-info">
        <span class="title">{{ franchise }}</span>
        <span class="price">£80.00</span>
      </div>
      <div class="main-image">
        <img :src="mainImage" class="mainshoe">
      </div>    
      <!-- <img src="../assets/shoppingbag.png" class="quickbuy-icon"> -->
    </div>
      <!-- <img class="adidas-logo" src="../assets/adidas_white.svg"> -->
      
        <!-- <Carousel
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
      </modal> -->
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
            contentPerView: 2,
            // spaceBetween: -90, //temporary space between while we fix issue with computed properties

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

<style lang="scss">
#content .section:last-of-type {
  display: none;
}
</style>

<style lang="scss" scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main-image {
  padding: 4rem;
}

.mainshoe {
  width: 100%;
  height: auto;
  display: block;
}

.product-info {
  color: white;
  position: absolute;
  right: 10%;
  top: 45%;

  span {
    font-size: 1rem;
    display: block;
    text-align: right;
  }

  .price {
    font-weight: bold;
  }
}

.hotspot {
  position: absolute;
  top: 45%;
  left: 16%;
  width: 25px;
  height: 25px;
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
</style>



<style lang="scss" scoped>

// @font-face {
// font-family: 'HCo Gotham SSm';
// src:url('../assets/fonts/F4715F49B60D9B144.woff2') format('woff2'),
// url('../assets/fonts/F4715F49B60D9B144.woff') format('woff');
// font-weight: 400;
// font-style: normal;
// }


// @font-face {
// font-family: 'HCo Gotham SSm';
// src:url('../assets/fonts/725262BC71949F842.woff2') format('woff2'),
// url('../assets/fonts/725262BC71949F842.woff') format('woff');
// font-weight: 500;
// font-style: normal;
// }


// @font-face {
//   font-family: 'HCo Gotham SSm';
//   src: url('../assets/fonts/B5416F0FED9EA9CD2.woff2') format('woff2'),
//   url('../assets/fonts/B5416F0FED9EA9CD2.woff') format('woff');
//   font-weight: 700;
//   font-style: normal;
// }

// .image.isActive {
//   opacity: 1;
// }

// .section-colourways {
//   position: relative;
//   padding-left: 35px;
//   height: 100%;
//   width: 100%;
//   font-family: 'HCo Gotham SSm';
// }

// .brand-wrapper {
//   position: absolute;
//   top: 0;
//   left: 10px;
//   bottom: 0;
//   width: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media only screen and (min-width: 765px) {
//     left: 40px;
//   }
// }

// .brand {
//   font-family: 'HCo Gotham SSm';
//   transform: rotate(-90deg);
//   font-weight: 900;
//   font-size: 1330%;
//   padding-left: 2%;
//   z-index: 0;
//   color: #333;
//   flex-wrap: wrap;

//   @media only screen and (min-width: 765px) {
//     font-size: 2030%;
//   }
// }

// .adidas-logo {
//   display: none;
//   z-index: 1;

//   @media only screen and (min-width: 765px) {
//     display: inline;
//     position: absolute;
//     top: 4%;
//     left: 8%;
//     width: 125px;
//   }
// }

// .add {
//   position: absolute;
//   top: 33%;
//   left: 19%;
//   width: 29px;
//   z-index: 1;
  
//   @media only screen and (min-width: 765px) {
//     position: absolute;
//     top: 32%;
//     left: 21%;
//     width: 54px;
//   }
// }

// .mainshoe {
//   position: absolute;
//   top: 19%;
//   left: 8%;
//   width: 330px;
//   z-index: 1;

//   @media only screen and (min-width: 765px) {
//     position: absolute;
//     top: 16%;
//     left: 11%;
//     width: 604px;
//   }
// }

// .addafter {
//   position: absolute;
//   top: 56%;
//   left: 61%;
//   width: 29px;
//   z-index: 1;

//   @media only screen and (min-width: 765px) {
//     width: 54px;
//   }
// }

// .shoppingbagtexttitle {
//   font-family: 'HCo Gotham SSm';
//   color: white;
//   position: absolute;
//   top: 44%;
//   right: 5%;
//   font-size: 16px;
//   z-index: 1;

//   @media only screen and (min-width: 765px) {
//     font-size: 57px;
//   }
// }

// .shoppingbagtext {
//   font-family: 'HCo Gotham SSm';
//   color: white;
//   position: absolute;
//   top: 49%;
//   left: 78%;
//   font-size: 16px;
//   z-index: 1;
//   right: 5%;

//   @media only screen and (min-width: 765px) {
//     font-size: 50px;
//     left: 67%;
//     top: 52%;
//   }
// }

// .shoppingbagicon {
//   position: absolute;
//   width: 50px;
//   top: 54%;
//   left: 81%;
//   z-index: 1;

//   @media only screen and (min-width: 765px) {
//     width: 111px;
//     left: 79%;
//     top: 61%;
//   }
// }

// .carousel-container {
//   position: absolute;
//   top: 83%;
//   left: 0%;
//   z-index: 1;
// }

// .image {
//   width: 100px;
//   height: 81px;
//   opacity: 0.5;
//   z-index: 1;

//   @media only screen and (min-width: 765px) {
//     ]width: 139px;
//     height: 142px;
//   }
// }


// .mainimage {
//   position: relative;
//   z-index: 1;
// }

// .franchise-container {
//  width: 100%;
//   height: 100%;
//   position: absolute;
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-end;
// }

// .derupt {
//   font-family: 'HCo Gotham SSm';
//   color: #333333;
//   letter-spacing: -10px;
//   font-size: 169px;
//   font-weight: 900;
//   z-index: 0;
//   transform: rotate(270deg);
//   width: 100%;
// }

// .add {
//   position: absolute;
//   top: 51%;
//   left: 15%;
//   width: 24px;
// }

// .mainshoe {
//   margin-top: 30%;
//   width: 85%;
//   height: 85%;
// }

// .addafter {
//   position: absolute;
//   top: 73%;
//   right: 35%;
//   width: 24px;
//   z-index: 2;
// }

// .shoppingbagtexttitle {
//   position: absolute;
//   top: 50%;
//   right: 6%;
//   color: white;
//   font-size: 11px;
// }

// .shoppingbagtext {
//   position: absolute;
//   top: 54%;
//   right: 6%;
//   color: white;
//   font-size: 10px;
// }

// .shoppingbagicon {
//   position: absolute;
//   width: 50px;
//   top: 62%;
//   right: 6%;
// }

// .carousel-container {
//   margin-top: 15%;
// }

// .image-container {
//   position: relative;
// }

// .image {
//   display: block;
//   width: 80px;
//   height: 74px;
//   opacity: 0.5;
// }

// #modalh {
//   font-family: 'HCo Gotham SSm';
//   font-size: 32px;
//   font-weight: 900;
// }

// #modalb {
//   font-family: 'HCo Gotham SSm';
//   font-size: 16px;
//   font-weight: 700;
// }

// #modalc {
//   font-family: 'HCo Gotham SSm';
// }


// @media only screen and (min-width: 765px) {


// .adidas {
//     display: inline;
//     position: absolute;
//     width: 100px;
//     top: 4%;
//     left: 7%;
//   }

//   .add {
//     position: absolute;
//     top: 53%;
//     left: 21%;
//     width: 48px;
//     height: 48px;
//     opacity: 0.55;
//   }

//   .mainshoe {
//     width: 61%;
//     z-index: 1;
//   }

//   #addafter {
//     position: absolute;
//     top: 73%;
//     left: 58%;
//     width: 48px;
//     height: 48px;
//     opacity: 0.55;
//     z-index: 2;
//   }

// // .franchise-container {
// //     transform: rotate(360deg);
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     width: 100%;
// //     margin-top: -90%;
// //     margin-left: -1%;
// //     height: 41%;
// //   }

// //   .derupt {
// //     font-family: 'HCo Gotham SSm';
// //     color:#333333;
// //     letter-spacing: -10px;
// //     transform: rotate(0deg);
// //     font-size: 192px;
// //     flex: 1 0 auto;
// //   }


//   .shoppingbagtexttitle {
//     position: absolute;
//     top: 59%;
//     right: 11%;
//     color: white;
//     font-size: 23px;
//   }

//   .shoppingbagtext {
//     position: absolute;
//     top: 64%;
//     right: 11%;
//     color: white;
//     font-size: 21px;
//   }

//   .shoppingbagicon {
//     right: 11%;
//     top: 70%;
//     width: 72px;
//     z-index: 1;
//   }

//   .carousel-container {
//     margin-top: 6%;
//     margin-left: 5%;
//   }

//   .image {
//     display: block;
//     width: 155px;
//     height: 154px;
//     opacity: 0.5;
//   }

//   #modalh {
//   font-family: 'HCo Gotham SSm';
//   font-size: 110px;
//   font-weight: 900;
// }

//   #modalb {
//   font-family: 'HCo Gotham SSm';
//   font-size: 37px;
//   font-weight: 700;
// }

//  .modalc {
//   font-family: 'HCo Gotham SSm';
//   font-size: 24px;
// }

// }


// @media only screen and (min-width: 1025px) {
//   .colourwayscontainer {
//     background: #222;
//     height: 100%;
//   }

//   .mainimage {
//     position: relative;
//   }

//   .mainShoeContainer{
//     padding-top: 5%;
//   }

//   .adidas {
//     display: inline;
//     position: absolute;
//     width: 72px;
//     top: 9%;
//     left: 6%;
//   }

//   .close {
//     position: absolute;
//     top: 8%;
//     height: 10%;
//     right: 3%;
//   }

//   .add {
//     position: absolute;
//     top: 48%;
//     left: 35%;
//     width: 48px;
//     height: 48px;
//     opacity: 0.55;
//   }

//   .mainshoe {
//     margin-top: 5%;
//     width: 30%;
//     height: 30%;
//     z-index: 1;
//   }

// #addafter {
//     position: absolute;
//     top: 72%;
//     left: 55%;
//     width: 48px;
//     height: 48px;
//     opacity: 0.55;
//     z-index: 2;
//   }

//   // .franchise-container {
//   //   transform: rotate(360deg);
//   //   display: flex;
//   //   align-items: center;
//   //   justify-content: center;
//   //   width: 100%;
//   //   margin-top: -41%;
//   //   margin-left: -2%;
//   //   height: 43%;
//   // }

//   // .derupt {
//   //   font-family: 'HCo Gotham SSm';
//   //   transform: rotate(0deg);
//   //   font-size: 342px;
//   //   flex: 1 0 auto;
//   // }

//   .shoppingbagtexttitle {
//     position: absolute;
//     top: 52%;
//     right: 13%;
//     color: white;
//     font-size: 23px;
//   }

//   .shoppingbagtext {
//     position: absolute;
//     top: 59%;
//     right: 13%;
//     color: white;
//     font-size: 21px;
//   }

//   .shoppingbagicon {
//     right: 13%;
//     top: 65%;
//     width: 72px;
//     z-index: 1;
//   }

//   .carousel-container {
//     margin: 0 auto;
//     margin-top: 3%;
//     width: 50%;
//   }

//   .image {
//     display: block;
//     width: 93px;
//     height: 97px;
//     // opacity: 0.5;
//   }

//   #modalh {
//   font-family: 'HCo Gotham SSm';
//   font-size: 53px;
//   font-weight: 900;
// }

//   #modalb {
//   font-family: 'HCo Gotham SSm';
//   font-size: 27px;
//   font-weight: 700;
// }

//  .modalc {
//   font-family: 'HCo Gotham SSm';
//   font-size: 20px;
// }

// }

</style>

