// Written by Ali K last modified 13/07/2018
<template>
  <div class="colourwayscontainer">
    <!-- This is the main container which contains the adidas logo, close button (called error),
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
        class="addafter"
        src="../assets/add.png">
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
        <!-- On click the slide url is passed to the click event handler -->
        <img
          :src="slide.image"
          class="image"
          @click="mainImage($refs.carousel.$children[0].$children[0].swiper.clickedIndex)">
      </div>
    </Carousel>
    <!-- Derupt title -->
    <h1 class="derupt">Derupt</h1>
  </div>
</template>

<script>
import Carousel from '@/containers/Carousel.vue'; // imports the casrousel component (part of swiper)

// exports the carousel component and gives it a name for future use.
export default {
  name: 'ColourwaysContainer',
  components: {
    Carousel,
  },

  // the date method sets up the vue component. First it declares the main image variable which will change when the user clicks it.
  // the slides array contains all the images. They are hosted at http://assets.jdsports.com/
  data() {
    return {
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
        slidesPerView: 6,
        breakpoints: {
          376: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  mounted() {
    this.mainImage(0);
  },
  // computed: {
  //       defaultImage() {
  //         return this.slides[0].image
  //       }
  //     },
  // This method receives a click event when the user clicks on an image in the carousel. It is then assigned to the
  // main image variable which will change the main shoe display image.
  methods: {
    mainImage(index) {
      this.defaultImage = this.slides[index].image;
      console.log(this.$refs);
    },
  },
};

</script>

<style lang="scss" scoped>

// The fonts below are the Gotham font used by JD. They are stored in the assets folder.
// They are differnent weights.

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

.derupt {
  position: absolute;
  top: 207px;
  left: -236px;
  font-family: 'HCo Gotham SSm';
  transform: rotate(270deg);
  font-size: 49vw;
  font-weight: 900;
  z-index: 0;
  color:#333333;
  letter-spacing: -10px;

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
.addafter {
  position: absolute;
  top: 76%;
  right: 39%;
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

.image:hover {
  opacity: 1;
}

//----------------------------------//Media query for larger screens------------------------------------------

@media only screen and (min-width: 766px) {

.colourwayscontainer {
     background: #222222;
     height: 100vh;
  }

 .mainimage {
    position: relative;
  }


  .adidas {
    position: absolute;
    height: 18%;
    width: 14%;
    top: 0%;
    left: 4%;
}

  .close {
    position: absolute;
    top: 4%;
    height: 10%;
    right:  5%;
  }

.add {
    position: absolute;
    top: 35%;
    left: 35%;
    width: 2%;
    height: 5%;
  }

.mainshoe {
  margin-top: 5%;
  width: 30%;
  height: 30%;
  z-index: 1;
}

.addafter {
    position: absolute;
    top:   44%;
    left: 58%;
    width: 2%;
    height: 5%;
  }

  .derupt {
    position: absolute;
    font-family: Gotham Black;
    font-size: 28vw;
    top: 10%;
    color:#333333;
    letter-spacing: 100%;
  }

.shoppingbag {
  position: fixed;
  right: 10%;
  top: 40%;
  height: 10%;
  width: 10%;
  z-index: 1;
}

.shoppingbagtext {
  color: white;
}

.swiper-container {
    width: 600px;
    height: 300px;
}

.carousel-container {
  padding-top: 5%;
  margin-left: 220px;

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

}


</style>

