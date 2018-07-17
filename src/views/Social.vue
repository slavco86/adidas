<template>
  <div
    class="social">

    <p class="social__text">Get Social</p>
    <h2 class="social__title">#Creator</h2>
    <div
      :class="{'grid--animate': activateAnimation}"
      class="grid">
      <Spot
        v-for="(slide,key) in slides"
        :key="key"
        v-bind="slide"
        class="grid__product">
        <span class="grid__product__text">{{ slide.text }}</span>
      </Spot>

    </div>

    <a
      href="#"
      class="social__cta">
      Follow us
    </a>
  </div>
</template>

<script>
import inView from 'in-view';
import Spot from '@/components/Spot.vue';

inView.threshold(0.05);

export default {
  name: 'Social',
  components: {
    Spot,
  },
  data() {
    return {
      activateAnimation: false,
      activeSocial: false,
      slides: [
        {
          image: {
            desktop: 'http://via.placeholder.com/350x350',
            mobile: 'http://via.placeholder.com/350x350',
          },
          url: '#',
          text: '@socialhandle',
        },
        {
          image: {
            desktop: 'http://via.placeholder.com/350x350',
            mobile: 'http://via.placeholder.com/350x350',
          },
          url: '#',
          text: '@socialhandle',
        },
        {
          image: {
            desktop: 'http://via.placeholder.com/350x350',
            mobile: 'http://via.placeholder.com/350x350',
          },
          url: '#',
          text: '@socialhandle',
        },
        {
          image: {
            desktop: 'http://via.placeholder.com/350x350',
            mobile: 'http://via.placeholder.com/350x350',
          },
          url: '#',
          text: '@socialhandle',
        },
      ],
    };
  },

  mounted() {
    inView('.grid')
      .once('enter', () => {
        this.activateAnimation = true;
      });

    inView('.social')
      .once('enter', () => {
        this.activeSocial = true;
      });
  },
};
</script>

<style lang="scss" scoped>
  .social {
    background-color: #222;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    &__text {
      margin: 1rem 0;
      text-transform: uppercase;
    }

    &__title {
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
      // min-width: 150px;
      padding: 0.5rem;
      transition: transform 1s ease-in-out;

      &:first-child {
        transform: translate3d(-600px, -600px, 0);
      }

      &:nth-child(2) {
        transform: translate3d(600px, -600px, 0);
      }

      &:nth-child(3) {
        transform: translate3d(-600px, 600px, 0);
      }

      &:last-child {
        transform: translate3d(600px, 600px, 0);
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

  .grid--animate .grid__product {
    transform: translate3d(0, 0, 0);
  }
</style>
