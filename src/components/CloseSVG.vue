<template>
  <svg
    :class="{'close--alt' : invert}"
    viewBox="0 0 45 45"
    clas="close">
    <circle
      cx="22.5"
      cy="22.5"
      r="22"
      class="circle"/>
    <path
      d="M16.46 28.54l12.08-12.08m0 12.08L16.46 16.46"
      class="cross"/>
  </svg>
</template>

<script>
export default {
  props: {
    invert: {
      type: Boolean,
      default: false,
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

.close .cross {
  stroke: #000;
}

.close .circle {
  fill: white;
}

.close--alt .cross {
  stroke: #fff;
}

.close--alt .circle {
  fill: #000;
}
</style>

