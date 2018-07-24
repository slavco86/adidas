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
          v-for="(slide,key) in content"
          :key="key"
          v-bind="slide"
          class="grid__product">
          <QuickBuy
            :context="context"
            v-bind="slide"/>
          <span class="grid__product__text">{{ slide.handle }}</span>
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
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      activateAnimation: false,
      content: JSON.parse(JSON.stringify(this.data.products)),
    };
  },
};
</script>

<style lang="scss" scoped>
.social {
  // align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0 1rem;

  @media only screen and (min-width: 1024px) {
    align-items: center;
  }

  &__inner {
    display: flex;
    flex-direction: column;
  }

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
    margin: 1rem;
    padding: 1rem 1.5rem;
    position: relative;
    top: -0.75rem;
    text-transform: uppercase;

    @media only screen and (min-width: 1024px) {
      position: static;
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
    // min-width: 150px;
    padding: 0.5rem;
    transition: transform 1s ease-in-out;

    /deep/ .quickView {
      fill: transparent;
      position: absolute;
      right: 0;
      stroke: #fff;
      top: 0;
      margin: 0.75rem;

      &--women {
        fill: #fff;
        stroke: #000;

        circle {
          stroke: transparent;
        }
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

    img {
      display: block;
      height: auto;
      width: 100%;
    }
  }
}

// Animate
.grid--animate {
  padding: 1rem 0;

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
}
</style>
