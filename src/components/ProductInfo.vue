<template>
  <div class="product-info">
    <div class="product-info__title">{{ title }}</div>
    <div class="product-info__price">£{{ price }}</div>
    <QuickBuy :url="url"/>
  </div>
</template>

<script>
import QuickBuy from '@/components/QuickBuy.vue';

export default {
  components: {
    QuickBuy,
  },

  props: {
    title: {
      type: String,
      default: '',
    },

    price: {
      type: String,
      default: '0',
    },

    url: {
      type: String,
      default: '/',
    },
  },
};
</script>

<style>
.product-info {
  display: inline-block;
  text-align: right;
  text-transform: uppercase;
  width: 40%;
}

.product-info__title,
.product-info__price {
  font-size: 22px;
}

.product-info__title {
  display: block;
  text-align: right;
}

.product-info__price {
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>
