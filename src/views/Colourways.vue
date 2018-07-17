// Last modified by Ali K last modified 16/07/2018
<template>
  <div class="colourwayscontainer">
    <!-- This is the main container which contains the adidas logo, close button,
    the two plus buttons -->
    <div class="mainimage">
      <img
        class="close"
        src="../assets/close_white.png">
      <img
        class="adidas"
        src="../assets/adidas_white.svg">
      <img
        class="add"
        src="../assets/add.png">
      <!-- the main shoe image is given a dynamic html value based on what image the user clicks
      in the carousel -->
      <img
        :src="defaultImage"
        class="mainshoe">
      <img
        src="../assets/add.png"
        class="show-modal" @click="showModal = true"
        id="addafter"
        
      >
      <!-- This is the shopping  items which consist of the title of the shoe, price and bag picture -->
      <h3 class="shoppingbagtexttitle">DERUPT</h3>
      <h4 class="shoppingbagtext">£80.00</h4>
      <img
        src="../assets/shoppingbag.png"
        class="shoppingbagicon">
    </div>
    <!-- The carousel container shows different show images. On click will change the main show image -->
    <!-- The line below is the main container which sets up the slides and passes in the options -->
    <Carousel
      ref="carousel"
      :slides="slides"
      :options="options"
      class="carousel-container">
      <!-- The image container appears on the line below -->
      <div
        slot-scope="{slide}"
        class="image-container">
        <!-- On click the index of the clicked slide is passed to the mainimage -->
        <img
          :src="slide.image"
          class="image"
          @click="mainImage($refs.carousel.$children[0].$children[0].swiper.clickedIndex)">
      </div>
    </Carousel>
    <!-- Derupt title -->
    <h1 class="derupt">{{ shoeSize }}</h1>
    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
  <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">DEERUPT</h3>
    </modal>
  </div>
</template>

<script>
import Carousel from '@/containers/Carousel.vue'; // imports the casrousel component (part of swiper)
import modal from '@/components/Modal.vue';

// exports the carousel component and gives it a name for future use.
export default {
  name: 'ColourwaysContainer',
  components: {
    Carousel,
    modal,
  },

  props: {
    shoeSize: {
      type: String,
      required: false,
      default: "Deerupt"
    }
  },

  // the date method sets up the vue component. First it declares the main image variable which will change when the user clicks it.
  // the slides array contains all the images. They are hosted at http://assets.jdsports.com/
  data() {
    return {
      // isModalVisible: false,
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

      // The options are found at http://idangero.us/swiper/api/. They are swiper options which are fed into the carousel.
      options: {
        responsive: true,
        slidesPerView: 7,
        spaceBetween: -400,
        breakpoints: {
          376: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
        },
      },
    };
  },

  mounted() {
    this.mainImage(0);
  },

  // This method receives a click event when the user clicks on an image in the carousel. It is then assigned to the
  // main image variable which will change the main shoe display image.
  methods: {
    mainImage(index) {
      this.defaultImage = this.slides[index].image;
    },
    // destroyCarousel() {
    //   if(this.slides.length <= this.$refs.carousel.$children[0].$children[0].swiper.params.slidesPerView) {
    //     this.$refs.carousel.$children[0].$children[0].swiper.destroy(false, false);
    //     return true;
    //   }
    // }
    // shoeModal() {
    //   this.isModalVisible = true;
    // },
    // closeModal() {
    //   this.isModalVisible = false;
    // }
  },
  
};

</script>

<style lang="scss" scoped>

// The fonts below are the Gotham font used by JD. They are stored in the assets folder.
// They are different weights.

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
src:url('../assets/fonts/B5416F0FED9EA9CD2.woff2') format('woff2'),
url('../assets/fonts/B5416F0FED9EA9CD2.woff') format('woff');
font-weight: 700;
font-style: normal;
}

// --------------------------Start of the main styling. Mobile first----------------------------------------

//sets the maincontainer to the design back colour and sets the height.
.colourwayscontainer {
     background: #222222;
     height: 95vh;
    //  width:100%;
  }

//hides the adidas logo as it's not needed on the mobile view
.adidas {
  display: none;
}

//sets the mainiamge container to a relative position as the child components will be positioned by using
//the position property
.mainimage {
    position: relative;
    z-index: 1;
  }

//this styles the close button. Essentially positioning in near the top right hand corner and setting its height.
.close {
  position: absolute;
  top: 2%;
  right: 4%;
  height: 42px;
}

//this styles the main derupt text

.derupt {
  position: absolute;
  top: 35%;
  left: -68%;
  font-family: 'HCo Gotham SSm';
  transform: rotate(270deg);
  font-size: 43vw;
  font-weight: 900;
  z-index: 0;
  color:#333333;
  letter-spacing: -10px

}

//this styles the plus icon above and to the left of the shoe
.add {
    position: absolute;
    top: 36%;
    left: 19%;
    width: 4.5%;
    height: 4%;
}

//this styles the main show placeholder which is dynamicallt changed
//when the user click on an image on the carousel
.mainshoe {
  margin-top: 30%;
  width: 85%;
  height: 85%;
}

//this styles the right plus icon
#addafter {
  position: absolute;
  top: 76%;
  right: 36%;
  width: 4.5%;
  height: 4%;
}

//this styles the shopping bag icon

.shoppingbagicon {
  position: absolute;
  width: 50px;
  top: 62%;
  right: 6%;
}

//this styles the Derupt title
.shoppingbagtexttitle {
  position: absolute;
  top: 50%;
  right: 6%;
  color: white;
  font-size: 11px;
}

//this styles the price
.shoppingbagtext {
  position: absolute;
  top: 54%;
  right: 6%;
  color: white;
  font-size: 10px;
}

//this styles the carousel container

.carousel-container {
  margin-top: 15%;
}

//this styles the main image container
.image-container {
  position: relative;
}

//this styles the actual slides, notice the opactity is set
.image {
  display: block;
  width: 80px;
  height: 74px;
  opacity: 0.5;
}

//when the user hovers over the image the opactity will be set to 1 so the 
//thumbnail is fully visible
.image:hover {
  opacity: 1;
}

//----------------------------------//Media query for larger screens------------------------------------------

@media only screen and (min-width: 1365px) {

//this styles the main colourways container
.colourwayscontainer {
     background: #222222;
     height: 98vh;
  }


  //this is the stylign for tha main shoe image
 .mainimage {
    position: relative;
  }

  //the main adidas logo now appears on the desktop site and is given a position
  .adidas {
    display: inline;
    position: absolute;
    width: 72px;
    top: 5%;
    left: 6%;
}

  //this is the styling for the close button which appears on the top right had side of 
  //the screen
  .close {
    position: absolute;
    top: 4%;
    height: 10%;
    right:  5%;
  }

//this styles the plus icon which appears on the left of the show
.add {
    position: absolute;
    top: 41%;
    left: 35%;
    width: 48px;
    height: 48px;
    opacity: 0.55;
  }

//this styles the main shoe container
.mainshoe {
  margin-top: 5%;
  width: 30%;
  height: 30%;
  z-index: 1;
}

//this styles the plus icon which appears to the right of the container
#addafter {
    position: absolute;
    top:   69%;
    left: 54%;
    width: 48px;
    height: 48px;
    opacity: 0.55;
    z-index: 2;
  }

//this syles the main derupt lettering which now appears across the screen.
  .derupt {
    position: absolute;
    font-family: 'HCo Gotham SSm';
    transform: rotate(0deg);
    font-size: 25vw;
    font-weight: 900px;
    letter-spacing: -10px;
    top: 8%;
    left: -3%;
  }

//this styles the Derupt title
.shoppingbagtexttitle {
  position: absolute;
  top: 51%;
  right: 14%;
  color: white;
  font-size: 23px;
}

//this text styles the price of the show
.shoppingbagtext {
  position: absolute;
  top: 57%;
  right: 14%;
  color: white;
  font-size: 21px;
}

//this styles the shopping bag icon
.shoppingbagicon {
  position: fixed;
  right: 14%;
  top: 50%;
  width: 72px;
  z-index: 1;
}

//this simpy positions the carousel container
.carousel-container {
  margin-top: 6%;
  margin-left: 20%;
}

//this stlyes the slides which are shown on the screen.
.image {
  display: block;
  width: 80px;
  height: 74px;
  opacity: 0.5;
}


//sets the image opactity to 1 when the user clicks on a shoe
.image:hover {
  opacity: 1;
}

}

</style>

