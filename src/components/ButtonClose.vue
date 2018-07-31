<template>
  <router-link
    :to="to"
    class="close">
    <img src="../assets/close_white.png">
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
  },
};
</script>

<style scoped>
.close {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 5;
}

img {
  width: 45px;
  height: auto;
}
</style>
