<template>
  <Button
    :data-quickview-path="url"
    :data-product-sku="sku"
    :context="context"
    :sku="sku">
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
    },
    context: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    sku() {
      return this.url.split('/').pop();
    },

    color() {
      return (this.$route.params.gender === 'women') ? '#222' : '#fff';
    },
  },
};
</script>

