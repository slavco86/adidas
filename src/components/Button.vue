<template>
  <a
    :is="aButton"
    :data-ip-position="position"
    :data-ip-name="sku"
    :href="href"
    class="ga-ip">
    <slot/>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: undefined,
    },
    sku: {
      type: String,
      default: undefined,
    },
    context: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    aButton() {
      return (this.url) ? 'a' : 'button';
    },
    position() {
      return `${this.$route.params.gender}-${this.$route.params.franchise}-${this.context}`;
    },
  },
};
</script>
