<template>
  <button
    :data-ip-position="text"
    :data-ip-name="text"
    class="ga-ip quickBuy"
    @click="quickBuy">
    <!-- <slot/> -->
    <img
      src="../assets/basket-icon.svg"
      alt="quick-buy">Quick Buy
  </button>
</template>

<script>
export default {
  inject: {
    name: {
      default: undefined,
    },
  },
  props: {
    url: {
      type: String,
      default: undefined,
    },
    text: {
      type: String,
      default: undefined,
    },
  },

  methods: {
    quickBuy() {
      console.log('Clicked!');
    },
  },
};
</script>
