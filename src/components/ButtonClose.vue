<template>
  <router-link
    :to="to">
    <svg class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle cx="22.5" cy="22.5" r="22" :fill="this.$route.params.gender === 'men' ? 'white' : 'black'" :stroke="this.$route.params.gender === 'men' ? 'white' : 'black'" stroke-miterlimit="10"/><path :stroke="this.$route.params.gender === 'men' ? 'black' : 'white'" d="M16.46 28.54l12.08-12.08M28.54 28.54L16.46 16.46"/></g></g></svg>
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

svg {
  width: 45px;
  height: auto;
}
</style>
