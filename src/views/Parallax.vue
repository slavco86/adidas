<template>
  <div
    ref="container"
    class="container">
    <!-- First Content -->
    <div
      ref="fContent"
      class="content">
      <!-- Content Title -->
      <h1 class="content__title">360 Degree</h1>
      <!-- Content Overlay -->
      <div
        ref="overlay"
        :style="position"
        class="content__overlay">
        <!-- Overlay Title -->
        <div class="content__overlay__info">
          <!-- Image Container -->
          <span class="content__overlay__img-holder">
            <!-- <div class="content__overlay__more-info">+</div> -->
            <img
              src="//cdn.zeplin.io/5b3f79354781e8b30dae1eba/screens/cache/41200c67601c2624efeb330326af2ded700d1e43.png"
              alt="adidas-trainers">
              <!-- <div class="content__overlay__more-info">+</div> -->
          </span>
          <!-- Content Text -->
          <div
            :style="position"
            class="content__overlay__text">
            <h4>Deerupt</h4>
            <p>£80.00</p>
            <span class="quick-buy"/>
          </div>
        </div>
        <!-- Colourways List -->
        <ul
          :style="position"
          class="content__overlay__list">
          <li>
            <img
              src="//via.placeholder.com/70x70"
              alt="small-image">
          </li>
          <li>
            <img
              src="//via.placeholder.com/70x70"
              alt="small-image"></li>
          <li>
            <img
              src="//via.placeholder.com/70x70"
              alt="small-image">
          </li>
          <li>
            <img
              src="//via.placeholder.com/70x70"
              alt="small-image">
          </li>
        </ul>
      </div>
    </div>

    <!-- Second Content -->
    <div class="content">
      <!-- Content Title -->
      <h1 class="content__title">Other Content</h1>
    </div>
  </div>
</template>

<script>
// import Skrollr from 'skrollr';

export default {
  name: 'Colourways',
  data() {
    return {
      startPosition: 0,
      windowHeight: '',
      endLocation: '',
      distance: '',
      position: {},
      overlay: '',
    };
  },

  created() {
    window.addEventListener('scroll', this.animateScroll);
  },

  methods: {
    animateScroll() {
      this.startPosition = window.pageYOffset;
      this.overlay = this.$refs.overlay;
      this.endLocation = this.overlay.offsetTop;
      this.distance = (this.startPosition - this.endLocation);

      if (this.startPosition === this.endLocation) {
        this.position = {
          transform: 'translate3d(0px, 100%, 0px)',
        };
      } else {
        this.position = {
          transform: 'translate3d(0px, 0px, 0px)',
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1950px;
    margin: 0 auto;
    background-color: #333;
    color: #fff;
  }

  .content {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100%;

    &__title {
      font-size: 3rem;

      &:first-child {
        color: #fff;
      }
    }

    &:first-child {
      background-color: yellowgreen;
    }

    &:last-child {
      background-color: aquamarine;

      .content__title {
        color: #333;
      }
    }

    // Overlay
    &__overlay {
      align-items: center;
      background-color: #333;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      left: 0;
      height: 100%;
      position: absolute;
      width: 100%;
      transform: translate3d(0, 100%, 0);
      transition: transform 0.8s ease-in-out;
      z-index: 1;

      &__list {
        list-style: none;
        padding: 0;
        margin: 2rem 0;
        position: relative;
        display: flex;
        transform: translate3d(0, 200px, 0);
        transition: transform 1.6s cubic-bezier(0.76, -0.4, 0.28, 1.54);

        li {
          margin: 0 0.2rem;
          flex: 0 0 23%;
        }
      }

      &__info {
        display: flex;
        max-width: 500px;
        padding: 1rem;
        justify-content: center;
      }

      &__img-holder {
        max-width: 500px;
        position: relative;

        img {
          display: block;
          height: auto;
          width: 100%;
        }
      }

      &__text {
        position: absolute;
        top: 60%;
        right: 0;
        margin: 0 1rem;
        transform: translate3d(0, 500px, 0);
        transition: transform 1.6s cubic-bezier(0.76, -0.4, 0.28, 1.54);

        h4 {
          font-size: 1rem;
        }

        p {
          margin: 0;
        }
      }

      &__more-info {
        color: grey;
        cursor: pointer;
        font-size: 3rem;
        position: relative;
        z-index: 2;

        &:first-child {
          top: 50%;
          margin-top: -50px;
          left: 5%;
        }

        &:last-child {
          bottom: 5%;
          left: 55%;
        }
      }
    }
  }
</style>
