<template>
  <div class="social">
    <p
      class="social__text">Get Social</p>
    <h2
      class="social__title">#Creator</h2>
    <Grid/>

    <a
    href="#"
    class="social__cta"
    >Follow us</a>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';

export default {
  name: 'Spocial',
  components: {
    Grid
  }
}
</script>

<style lang="scss" scoped>
  .social {
    background-color: #333;
    color: #fff;
    display: flex;
    padding: 1rem;
    flex-direction: column;

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

