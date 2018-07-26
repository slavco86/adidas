<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 43.74 43.74">
    <circle
      :stroke="color"
      cx="21.87"
      cy="21.87"
      r="21.37"/>
    <polygon
      :stroke="color"
      class="basket-icon"
      points="12.62 20 31.12 20 28.66 30.2 15.43 30.2 12.62 20"/>
    <polyline
      :stroke="color"
      class="basket-icon"
      points="16.1 20.05 21.82 13.54 27.64 20.05"/>
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#fff',
    },
  },
};
</script>


<style scoped>
  svg {
    display: block;
    height: auto;
    width: 100%;
  }
</style>
