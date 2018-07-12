// Written by Ali K last modified 11/07/2018
<template>
  <div class="colourwayscontainer">
    <div class="mainimage">
      <img class="error"       src="../assets/close_white.png">
      <img class="adidas"      src="../assets/adidas_white.svg">
      <img class="add"         src="../assets/add.png">
      <img class="mainshoe"    :src="mainImage">
      <h1 class="derupt">Derupt</h1>
      <img class="addafter"    src="../assets/add.png">
    </div>
    <div class="shoppingbag">
      <h3 class="shoppingbagtext">Derupt</h3>
      <h4 class="shoppingbagtext">£80.00</h4>
      <br />
       <img src="../assets/shoppingbag.png">
    </div>
    <Carousel :slides="slides" :options="options" class="carousel-container">
      <div class="image-container" slot-scope="{slide}">
        <img :src="slide.image" class="image" @click="testMethod(slide.image)"/>
      </div>
    </Carousel>
  </div>
</template>

<script>
  import Carousel from '@/containers/Carousel.vue';

  export default {
  name: 'Colourways-container',
  components: {
    Carousel,
  },

  data() {
    return {
      mainImage: "https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-1-6e0103d3b8a1653704b09acad135b6a9.png",
      slides: [
        {
          image: "https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-0-04670ce96db4cc1da203cc6895aa85e0.png"
        },
        {
          image:"https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-1-6e0103d3b8a1653704b09acad135b6a9.png"
        },
        {
          image:"https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-2-57ac562da9a5af2fbd89974727329a02.png"
        },
        {
          image:"https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-3-48065ea7006370f09ba101c518513105.png"
        },
        {
          image:"https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-4-0ea11a1bd092bb5eacdc608aac48d64c.png"
        },
        {
          image:"https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-5-6fae8c215df40f8eac27d0a2d34c1cf3.png"
        },
        {
          image:"https://jdsports-client-resources.co.uk/jdsports-client-resources/img/2018/0712/shoe-desktop-6-2001fef6fd965b9b7ff7456d1f103818.png"
        },
        ],
      options: {
        slidesPerView: 6,
        speed: 400,
        spaceBetween: -550
        }
      }
    },
  methods:{
    testMethod(event) {
      this.mainImage=event
      }
  }
}

</script>

<style lang="scss" scoped>


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
    colour: white;
}

  .error {
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
    top:   74%;
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

</style>


