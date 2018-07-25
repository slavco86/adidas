<template>
  <router-link
    :to="href"
    class="ga-ip spot">

    <picture v-if="tile.image">
      <source
        v-if="responsiveImg"
        :srcset="tile.image.mobile"
        media="(max-width: 765px)">
      <img
        :src="tile.image.desktop"
        alt="">
    </picture>

    <span
      data-swiper-parallax="-500"
      data-swiper-parallax-duration="600"
      class="franchise-name">{{ tile.franchise }}</span>
    <div class="plus"/>

    <Countdown
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
  },
};
</script>

<style lang="scss" scoped>
.grid-view {
  .franchise-name {
    font-size: 1rem;
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

picture,
img {
  display: block;
}

img {
  width: 100%;
  height: auto;
}

.franchise-name {
  position: absolute;
  transition-timing-function: ease-out;
  bottom: -20px;
  left: 20px;
  font-size: 3.5rem;
  font-weight: 900;
  text-align: left;
  line-height: 45px;
}

.countdown {
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  position: absolute;
  top: 35%;
  left: 0;
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
</style>
