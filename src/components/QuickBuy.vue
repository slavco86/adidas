<template>
  <Button
    :data-quickview-path="url"
    :data-product-sku="sku"
    :section="section"
    :sku="sku">
    <img
      src="../assets/shoppingbag.png"
      alt="shopping-basket">
  </Button>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
  props: {
    url: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: undefined,
    },
    section: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    sku() {
      return this.url.split('/').pop();
    },
  },
};
</script>
