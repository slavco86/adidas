<template>
  <button
    :data-ip-position="position"
    :data-quickview-path="path"
    :data-ip-name="name"
    class="ga-ip quickBuy quickView">
    <slot/>
  </button>
</template>

<script>
export default {
  // inject: {
  //   name: {
  //     default: undefined,
  //   },
  // },
  props: {
    position: {
      type: String,
      default: undefined,
    },
    path: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    franchise() {
      return this.$route.params.franchise;
    },
  },
};
</script>
