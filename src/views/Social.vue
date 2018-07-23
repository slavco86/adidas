<template>
  <div
    class="social">
    <div class="social__inner">
      <p class="social__text">Get Social</p>
      <h2 class="social__title">#Creator</h2>
      <div
        :class="{'grid--animate': active}"
        class="grid">
        <Spot
          v-for="(slide,key) in content.slides"
          :key="key"
          v-bind="slide"
          class="grid__product">
          <QuickBuy
            :context="context"
            url="/product/black-nike-air-force-1-low/047951">
            <img
              src="../assets/shoppingbag.png"
              alt="shopping-basket">
          </QuickBuy>
          <span class="grid__product__text">{{ slide.text }}</span>
        </Spot>
      </div>

      <a
        href="#"
        class="social__cta">
        Follow us
      </a>
    </div>
  </div>
</template>

<script>
import Spot from '@/components/Spot.vue';
import QuickBuy from '@/components/QuickBuy.vue';
import json from '@/content/social.json';

export default {
  name: 'Social',
  components: {
    Spot,
    QuickBuy,
  },

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    context: {
      type: String,
      default: undefined,
    },
  },


  data() {
    return {
      activateAnimation: true,
      content: json,
    };
  },
};
</script>

<style lang="scss" scoped>
.social {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;

  &__text {
    margin: 1rem 0;
    text-transform: uppercase;
    color: #fff;
  }

  &__title {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  &__cta {
    align-self: flex-end;
    border: 2px solid #fff;
    color: #fff;
    margin: 0 1rem;
    padding: 1rem 1.5rem;
    text-transform: uppercase;
  }
}

.grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 1rem auto;
  overflow: hidden;

  &__product {
    flex: 0 0 50%;
    height: auto;
    max-width: 635px;
    padding: 0.5rem;
    transition: transform 1s ease-in-out;

    /deep/ .quickView {
      background: none;
      display: block;
      max-height: 50px;
      max-width: 50px;
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
  }

  .social__inner {
    background-color: #222;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .grid__product {
    transform: translate3d(0, 0, 0);

    @media only screen and (min-width: 1024px) {
      margin: 0 10px;

      &:nth-child(odd) {
        transform: translate3d(0, -50px, 0);
      }

      &:nth-child(even) {
        transform: translate3d(0, 50px, 0);
      }
    }
  }

  .grid {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 1rem auto;
    overflow: hidden;

    &__product {
      flex: 0 0 50%;
      height: auto;
      max-width: 635px;
      padding: 0.5rem;
      transition: transform 1s ease-in-out;

      @media only screen and (min-width: 1024px) {
        flex: 0 0 19%;
      }
    }

    @media only screen and (min-width: 1024px) {
      flex: 0 0 19%;
    }

    &:first-child {
      transform: translate3d(-100%, -100%, 0);
    }

    &:nth-child(2) {
      transform: translate3d(100%, -100%, 0);
    }

    &:nth-child(3) {
      transform: translate3d(-100%, 100%, 0);
    }

    &:last-child {
      transform: translate3d(100%, 100%, 0);
    }

    &__text {
      color: #ccc;
      display: block;
      margin: 0.75rem 0;
      text-align: left;
      font-size: 1rem;
    }
  }
}
</style>
