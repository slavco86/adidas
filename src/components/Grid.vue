<template>
  <div class="grid" :class="{ 'grid__product--animate' : activateAnimation }">

    <a href="#"
      class="grid__product">

      <img src="http://via.placeholder.com/350x350"
        alt="">
    </a>

    <a href="#"
      class="grid__product">
      <img src="http://via.placeholder.com/350x350"
        alt="">
    </a>

    <a href="#" class="grid__product">
      <img src="http://via.placeholder.com/350x350"
        alt="">
    </a>

    <a href="#" class="grid__product">
      <img src="http://via.placeholder.com/350x350"
        alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {

  },

  data() {
    return {
      activateAnimation: false
    }
  }
}
</script>

<style lang="scss" scoped>
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
      min-width: 150px;
      padding: 0.5rem;
      transition: transform 0.7s;

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

      &--animate {
        .grid__product {
          transform: translate3d(0, 0, 0);
        }
      }

      img {
        display: block;
        height: auto;
        width: 100%;
      }
    }
  }
</style>

