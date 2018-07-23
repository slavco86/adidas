<template>
  <Button
    :data-quickview-path="url"
    :data-product-sku="sku"
    :context="context"
    :sku="sku">
    <slot/>
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
    // name: {
    //   type: String,
    //   default: undefined,
    // },
    context: {
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
