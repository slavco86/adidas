<template>
  <div class="social">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel error recusandae, nulla
    iure amet necessitatibus consequuntur temporibus quis rerum ratione minus reiciendis. Totam
    corrupti ipsum iure. Illum deleniti obcaecati quibusdam maxime laudantium culpa, earum
    dignissimos, repellendus labore incidunt laborum vel alias tempore. Iure qui quam dicta magnam
    temporibus doloremque fugit voluptates perspiciatis, libero consequuntur aliquid maxime odit
    quo inventore deleniti tempora nesciunt, necessitatibus, vel ipsum quasi fugiat provident
    harum vitae! Libero, corrupti accusantium. Sint magnam eum animi tempore fuga incidunt fugit
    explicabo saepe dolorem consequuntur repellendus eius placeat enim porro, error ut culpa,
    cum et nulla laudantium aperiam aliquam!</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel error recusandae, nulla
    iure amet necessitatibus consequuntur temporibus quis rerum ratione minus reiciendis. Totam
    corrupti ipsum iure. Illum deleniti obcaecati quibusdam maxime laudantium culpa, earum
    dignissimos, repellendus labore incidunt laborum vel alias tempore. Iure qui quam dicta magnam
    temporibus doloremque fugit voluptates perspiciatis, libero consequuntur aliquid maxime odit
    quo inventore deleniti tempora nesciunt, necessitatibus, vel ipsum quasi fugiat provident
    harum vitae! Libero, corrupti accusantium. Sint magnam eum animi tempore fuga incidunt fugit
    explicabo saepe dolorem consequuntur repellendus eius placeat enim porro, error ut culpa,
    cum et nulla laudantium aperiam aliquam!</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel error recusandae, nulla
    iure amet necessitatibus consequuntur temporibus quis rerum ratione minus reiciendis. Totam
    corrupti ipsum iure. Illum deleniti obcaecati quibusdam maxime laudantium culpa, earum
    dignissimos, repellendus labore incidunt laborum vel alias tempore. Iure qui quam dicta magnam
    temporibus doloremque fugit voluptates perspiciatis, libero consequuntur aliquid maxime odit
    quo inventore deleniti tempora nesciunt, necessitatibus, vel ipsum quasi fugiat provident
    harum vitae! Libero, corrupti accusantium. Sint magnam eum animi tempore fuga incidunt fugit
    explicabo saepe dolorem consequuntur repellendus eius placeat enim porro, error ut culpa,
    cum et nulla laudantium aperiam aliquam!</p>

    <p class="social__text">Get Social</p>
    <h2 class="social__title">#Creator</h2>

    <Grid
      v-inview:on="test"
      :class="{'grid--animate': activateAnimation}"/>

    <a
      href="#"
      class="social__cta">
      Follow us
    </a>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue';

export default {
  name: 'Social',
  components: {
    Grid,
  },
  data() {
    return {
      activateAnimation: false,
    };
  },

  methods: {
    test(el) {
      console.log(el);
    }
  },
};
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
