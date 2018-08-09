<template>
  <svg
    viewBox="0 0 45 45"
    clas="close">
    <circle
      :fill="hexFill"
      cx="22.5"
      cy="22.5"
      r="22"
      class="circle"/>
    <path
      :stroke="stroke"
      d="M16.46 28.54l12.08-12.08m0 12.08L16.46 16.46"
      class="cross"/>
  </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: '#fff',
    },

    stroke: {
      type: String,
      default: '#000',
    },
  },

  computed: {
    hexFill() {
      return (this.fill[0] === '#') ? this.fill : '#fff';
    },
  },
};
</script>

<style lang="scss" scoped>
.cross,
.cirlce {
  fill: none;
  stroke-miterlimit: 10;
}

</style>

