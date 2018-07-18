<template>
  <div
    class="grid">

    <a
      href="#"
      class="grid__product">

      <img
        src="https://via.placeholder.com/350x350"
        alt="">
      <span class="grid__product__text">@socialhandle</span>
    </a>

    <a
      href="#"
      class="grid__product">
      <img
        src="https://via.placeholder.com/350x350"
        alt="">
      <span class="grid__product__text">@socialhandle</span>
    </a>

    <a
      href="#"
      class="grid__product">
      <img
        src="https://via.placeholder.com/350x350"
        alt="">
      <span class="grid__product__text">@socialhandle</span>
    </a>

    <a
      href="#"
      class="grid__product">
      <img
        src="https://via.placeholder.com/350x350"
        alt="">
      <span class="grid__product__text">@socialhandle</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {

  },
};
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

