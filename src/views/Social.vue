<template>
  <div
    class="social">

    <p class="social__text">Get Social</p>
    <h2 class="social__title">#Creator</h2>

    <Grid :class="{'grid--animate': activateAnimation}"/>

    <a
      href="#"
      class="social__cta">
      Follow us
    </a>
  </div>
</template>

<script>
import inView from 'in-view';
import Grid from '@/components/Grid.vue';

inView.threshold(0.05);

export default {
  name: 'Social',
  components: {
    Grid,
  },
  data() {
    return {
      activateAnimation: false,
      activeSocial: false,
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
</style>
