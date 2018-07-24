<template>
  <Button
    :data-quickview-path="url"
    :data-product-sku="sku"
    :context="context"
    :class="{'quickView--women': gender}"
    :sku="sku">
    <BasketLogo/>
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
  data() {
    return {
      genderPath: this.$route.params.gender,
      active: true,
    };
  },
  computed: {
    sku() {
      return this.url.split('/').pop();
    },
    gender() {
      return (this.genderPath === 'women') ? this.active : '';
    },
  },
};
</script>

