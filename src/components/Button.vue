<template>
  <a
    :is="aButton"
    :data-ip-position="position"
    :data-ip-name="sku"
    class="ga-ip cta quickView">
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

<style lang="scss" scoped>
  .cta {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  .quickView {
    background: none;
    cursor: pointer;
    max-height: 70px;
    max-width: 70px;
    position: absolute;

    img {
      display: block;
      height: auto;
      width: 100%;
    }
  }
</style>
