<template>
  <a
    :is="aButton"
    :data-ip-position="position"
    :href="href"
    class="ga-ip">
    <slot/>
  </a>
</template>

<script>
export default {
  inject: {
    trackingName: {
      type: String,
      default: undefined,
    },
  },

  props: {
    href: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    aButton() {
      return (this.url) ? 'a' : 'button';
    },
    position() {
      return `${this.$route.params.gender}-${this.$route.params.franchise}-${this.trackingName}`;
    },
  },
};
</script>
