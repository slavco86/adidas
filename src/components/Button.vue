<template>
  <a
    :is="aButton"
    :data-ip-position="position"
    :data-ip-name="sku"
    href="#"
    class="ga-ip cta">
    <slot/>
  </a>
</template>

<script>
export default {
  props: {
    sku: {
      type: String,
      default: undefined,
    },
    section: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    aButton() {
      return (this.url) ? 'a' : 'button';
    },
    position() {
      return `${this.$route.params.gender}-${this.$route.params.franchise}-${this.section}`;
    },
  },
};
</script>

<style scoped>
  .cta {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
</style>
