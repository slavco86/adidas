<template>
  <router-link
    :to="href"
    :class="{ 'spot--odd' : odd }"
    class="ga-ip spot"
    @click.native="destroyCarousel">

    <div class="overlay-container">
      <div class="overlay"/>
      <picture v-if="tile.image">
        <source
          v-if="responsiveImg"
          :srcset="tile.image.mobile"
          media="(max-width: 765px)">
        <img
          :src="tile.image.desktop"
          alt="">
      </picture>
    </div>


    <span
      data-swiper-parallax="-500"
      data-swiper-parallax-duration="600"
      class="franchise-name">{{ tile.franchise }}</span>

    <div class="plus"/>

    <Countdown
      v-show="displayCountDown"
      :date="tile.launch"
      @active="hasCountdown = true"
      @expired="hasCountdown = false"/>
  </router-link>
</template>

<script>
import Countdown from '@/components/Countdown.vue';

export default {
  name: 'FranchiseTile',

  components: {
    Countdown,
  },

  props: {
    tile: {
      type: Object,
      default: () => ({
        image: {},
      }),
    },
  },

  data() {
    return {
      hasCountdown: false,
    };
  },

  computed: {
    href() {
      return (this.hasCountdown) ? this.$route.path : `${this.$route.params.gender}/${this.tile.franchise}`;
    },

    responsiveImg() {
      if (this.tile.image
      && Object.prototype.hasOwnProperty.call(this.tile.image, 'mobile')
      && Object.prototype.hasOwnProperty.call(this.tile.image, 'desktop')) {
        return true;
      }
      return false;
    },

    odd() {
      return this.tile.key % 2;
    },
    displayCountDown() {
      return ((Math.trunc(Date.parse(this.tile.launch) / 1000) -
      Math.trunc((new Date()).getTime() / 1000)) < 604800);
    },
  },

  methods: {
    destroyCarousel() {
      this.$emit('destroy', this.hasCountdown);
    },
  },
};
</script>

<style lang="scss" scoped>
picture,
img {
  display: block;
}

img {
  height: auto;
  width: 100%;
}

.franchise-name {
  position: absolute;
  transition-timing-function: ease-out;
  bottom: -20px;
  left: 20px;
  font-size: 3.2rem;
  font-weight: 900;
  text-align: left;
  line-height: 45px;

  // .spot--odd & {
  //   bottom: auto;
  //   top: -20px;
  // }
}

.countdown {
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  width: 100%;
  align-items: center;

  & /deep/ .countdown__value {
    width: 33%;

    &::after {
      content: ':';
      position: absolute;
      right: 0;
      top: 0;
      font-size: 2rem;

      @media only screen and (min-width: 765px) {
        font-size: 2rem;
      }
    }

    &:last-of-type {
      &::after {
        display: none;
      }
    }

    &__num i {
      font-size: 2rem;

      @media only screen and (min-width: 765px) {
        font-size: 2rem;
      }
    }

    &__label {
      text-transform: uppercase;
      font-size: 1rem;
      margin-top: 5px;

      @media only screen and (min-width: 765px) {
        font-size: 1rem;
      }
    }
  }
}

.plus {
  $thickness: 2px;

  height: 35px;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 35px;
  transform: rotate(0);
  transition: all 0.5s;

  &::before,
  &::after {
    border-bottom: $thickness solid;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: calc(-50% - #{$thickness});
    width: 100%;
  }

  &::after {
    border-bottom: none;
    border-left: $thickness solid;
    left: calc(50% - #{$thickness});
    top: 0;
  }
}

.spot:hover {
  .plus {
    transform: rotate(90deg);
  }
}

.grid-view {
  .franchise-name {
    font-size: 1.7rem;
    bottom: 0;
  }

  .countdown /deep/ .countdown__value {
    &::after,
    &__num i,
    &__label {
      font-size: 0.8rem;
    }
  }
}
</style>
