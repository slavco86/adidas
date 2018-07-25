<template>
  <Button
    :data-quickview-path="quickBuyPath"
    :data-product-sku="sku"
    :data-ip-name="sku"
    class="cta quickView">
    <BasketLogo :color="color"/>
  </Button>
</template>

<script>
import Button from '@/components/Button.vue';
import BasketLogo from '@/components/BasketLogo.vue';

export default {
  components: {
    Button,
    BasketLogo,
  },

  props: {
    url: {
      type: String,
      default: undefined,
      required: true,
    },
  },

  computed: {
    sku() {
      return this.url.split('/').pop();
    },

    quickBuyPath() {
      return `${this.url.slice(1)}/quickview/`;
    },

    color() {
      return (this.$route.params.gender === 'women') ? '#222' : '#fff';
    },
  },
};
</script>

<style lang="scss" scoped>
  .quickView {
    background: none;
    cursor: pointer;
    fill: transparent;
    margin: 0;
    max-height: 60px;
    max-width: 60px;
    padding: 0;

    img {
      display: block;
      height: auto;
      width: 100%;
    }
  }
</style>
