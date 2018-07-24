<template>
  <div class="social">
    <p class="social__text">Get Social</p>
    <h2 class="social__title">#Creator</h2>
    <!-- Social Grid Section -->
    <div class="social__inner-wrapper">
      <div
        :class="{'grid--animate': active}"
        class="grid">
        <Spot
          v-for="(slide,key) in content"
          :key="key"
          v-bind="slide"
          class="grid__product">
          <QuickBuy
            :url="slide.url"/>
          <span class="grid__product__text">{{ slide.handle }}</span>
        </Spot>
      </div>
    </div>
    <!-- Social CTA -->
    <a
      href="#"
      class="social__cta">
      Follow us
    </a>
  </div>
</template>

<script>
import Spot from '@/components/Spot.vue';
import QuickBuy from '@/components/QuickBuy.vue';

export default {
  name: 'Social',

  provide: {
    trackingName: 'social',
  },

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
.category--women .social__cta {
  border: 1px solid #000;
  color: #000;
  font-weight: 600;

  &:hover {
    background-color: #000;
    color: #fff;
  }
}

.category--women .social__text,
.category--women .social__title {
  color: #222;
}

.category--women .grid__product__text {
  color: #222;
}

.social {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // padding: 1rem;
  height: calc(100vh - 50px);
  // background: orange;

  @media only screen and (min-width: 1024px) {
    align-items: center;
    height: 100vh;
  }

  &__inner-wrapper {
    height: auto;
    max-height: 670px;
    background: hotpink;
    overflow: hidden;
  }

  &__text {
    // margin: 1rem 0;
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
    max-width: 150px;
    position: relative;
    text-transform: uppercase;

    @media only screen and (min-width: 1024px) {
      align-self: center;
      position: static;
    }
  }
}

.grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 1rem auto;
  max-height: 670px;
  overflow: hidden;

  &__product {
    flex: 0 0 50%;
    height: auto;
    max-width: 25rem;
    padding: 0.5rem;
    transition: transform 1s ease-in-out;

    /deep/ .quickView {
      position: absolute;
      right: 0;
      top: 0;
      margin: 0.75rem;
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
      margin: 0.1rem 0;
      text-align: left;
      font-size: 0.8rem;

      @media only screen and (min-width: 1024px) {
        font-size: 1rem;
        margin: 0.75rem 0;
      }
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
  padding: 0.5rem 0;

  @media only screen and (min-width: 1024px) {
    padding: 3rem 0;
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
}
</style>
