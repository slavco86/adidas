<template>
  <div class="product-info">
    <div class="product-info__title">{{ title }}</div>
    <div
      v-if="was"
      class="product-info__price--was">£{{ was }}</div>
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

    was: {
      type: String,
      default: undefined,
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
  margin: 0.5rem 0;
}

.product-info__price--was {
  margin: 0.5rem 0;
  text-decoration: line-through;
  font-size: 0.8rem;
}

</style>
