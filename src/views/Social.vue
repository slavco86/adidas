<template>
  <div class="social">
    <Titles v-bind="data.titles"/>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      class="creatorsocial">
      <path
        class="instasocial"
        d="M57.743,0h84.514A57.743,57.743,0,0,1,200,57.743v84.514A57.742,57.742,0,0,1,142.257,
        200H57.743A57.743,57.743,0,0,1,0,142.257V57.743A57.743,57.743,0,0,1,57.743,0Zm-2.1,
        18.373s23.185-1.05,46.544-1.05c20.856,0,42.17,1.05,42.17,1.05A36.745,36.745,0,0,1,181.1,
        55.118s1.05,23.782,1.05,46.719c0,21.364-1.05,41.995-1.05,41.995a36.745,36.745,0,0,1-36.745,
        36.745s-21.427,1.05-43.22,1.05c-22.551,0-45.494-1.05-45.494-1.05A36.745,36.745,0,0,1,18.9,
        143.832s-0.525-20.631-.525-41.995c0-22.937.525-46.719,0.525-46.719A36.745,36.745,0,0,1,
        55.643,18.373Zm97.638,15.748a12.074,12.074,0,1,1-12.074,12.074A12.073,12.073,0,0,1,153.281,
        34.121ZM100,48.294A51.706,51.706,0,1,1,48.294,100,51.706,51.706,0,0,1,100,48.294Zm0,
        17.848A33.333,33.333,0,1,1,66.667,99.475,33.333,33.333,0,0,1,100,66.142Z"/>
    </svg>
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
            v-if="slide.url"
            :url="slide.url"/>
          <span class="grid__product__text">{{ slide.handle }}</span>
        </Spot>
      </div>
    </div>
    <!-- Social CTA -->
    <a
      href="https://www.instagram.com/jdofficial/"
      class="social__cta">
      Follow us
    </a>
  </div>
</template>

<script>
import Spot from '@/components/Spot.vue';
import QuickBuy from '@/components/QuickBuy.vue';
import Titles from '@/components/Titles.vue';

export default {
  name: 'Social',

  provide: {
    trackingName: 'social',
  },

  components: {
    Spot,
    QuickBuy,
    Titles,
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

.creatorsocial {
  position: absolute;
  z-index: 0;
  top: 0%;
  left: 0%;
  width: 130px;
  height: 130px;

  @media only screen and (min-width: 765px) {
    top: 0%;
    left: 26%;
  }

  @media only screen and (min-width: 1024px) {
    top: 3%;
    left: 33%;
    width: 200px;
    height: 200px;
  }
}

.instasocial {
  fill-rule: evenodd;
  fill: #666;
  fill-opacity: 0.05;
}

.social {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 50px);
  overflow: hidden;

  @media only screen and (min-width: 1024px) {
    align-items: center;
    height: 100vh;
  }

  &__inner-wrapper {
    align-items: center;
    display: flex;
    max-height: 100%;
    overflow: hidden;
    margin: 2rem 0;
    width: 100%;

    @media only screen and (min-width: 765px) {
      padding-top: 14%;
    }

    @media only screen and (min-width: 1024px) {
      padding-top: 0%;
    }
  }

  &__cta {
    align-self: center;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    font-weight: 900;
    margin-right: 0.75rem;
    padding: 1rem 0;
    position: relative;
    top: -1.2rem;
    text-align: center;
    text-transform: uppercase;
    transition: 0.35s ease-in-out;
    width: 175px;

    &:hover {
      background-color: #fff;
      color: #222;
    }

    @media only screen and (min-width: 1024px) {
      align-self: center;
      padding: 1rem 0;
    }
  }
}

.grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 1rem auto;
  padding: 0 0.5rem;

  @media only screen and (min-width: 1024px) {
    max-height: 670px;
    overflow: hidden;
    padding: 3rem 0;
  }

  &__product {
    flex: 0 0 50%;
    height: auto;
    max-width: 400px;
    padding: 0.5rem;
    transition: transform 1s ease-in-out;

    @media only screen and (min-width: 1024px) {
      flex: 0 0 20%;
    }

    /deep/ .quickView {
      position: absolute;
      right: 3%;
      top: 1%;
      margin: 0.75rem;
      max-width: 40px;

      @media only screen and (min-width: 765px) {
        max-width: 60px;
      }

      @media only screen and (min-width: 1366px) {
        max-width: 50px;
      }
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
      font-weight: 500;

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

.category--women .social__text,
.category--women .social__title {
  color: #222;
}

.category--women .grid__product__text {
  color: #222;
}

.category--women .social__cta {
  color: #222;
  border: 1px solid #222;
  font-size: 12px;

  &:hover {
    color: #fff;
    background-color: #222;
  }
}

// Animate
.grid--animate {
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
