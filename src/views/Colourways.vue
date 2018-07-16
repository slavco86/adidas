<template>
  <div class="container">
    <!-- First Content -->
    <div class="content">
      <!-- Content Title -->
      <h1 class="content__title">360 Degree</h1>
      <!-- Content Overlay -->
      <div
        class="content__overlay"
        data-start="height: 0;"
        data-970-end="height: 100%;">
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
          <div class="content__overlay__text">
            <h4>Deerupt</h4>
            <p>£80.00</p>
            <span class="quick-buy"/>
          </div>
        </div>
        <!-- Colourways List -->
        <ul
          class="content__overlay__list"
          data-500-start="bottom: 2.55rem;"
          data-600-end="bottom: 1rem;">
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
import Skrollr from 'skrollr';

export default {
  name: 'Colourways',
  mounted() {
    Skrollr.init({
      forceHeight: true,
    });
  },
};
</script>

<style lang="scss" scoped>
  .container {
    background-color: #333;
    color: #fff;
    margin: 0 auto;
    max-width: 1950px;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-padding: 100px 0 0;
    scroll-snap-type: y proximity;
  }

  .content {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    overflow: hidden;
    position: relative;
    scroll-snap-align: start none;
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
      position: absolute;
      width: 100%;
      transition: all 1.5s linear;
      z-index: 1;

      &__list {
        list-style: none;
        padding: 0;
        margin: 3rem 0;
        position: relative;
        display: flex;
        margin-bottom: 0;
        transition: all 0.5s linear;

        li {
          margin: 0 0.2rem;
          flex: 0 0 23%;
        }
      }

      &__info {
        display: flex;
        max-height: 750px;
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
        right: 35%;
        margin: 0 1rem;

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
