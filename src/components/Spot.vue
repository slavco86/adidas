<template>
  <a
    :href="url"
    class="ga-ip spot">
    <picture v-if="image">
      <source
        v-if="responsiveImg"
        :srcset="image.mobile"
        media="(max-width: 975px)">
      <img
        :src="image.desktop"
        alt="">
    </picture>
    <slot/>
  </a>
</template>

<script>
export default {
  name: 'Spot',
  props: {
    image: {
      type: Object,
      default() {
        return {};
      },
    },
    url: {
      type: String,
      default() {
        return '';
      },
    },
  },

  computed: {
    responsiveImg() {
      if (this.image && Object.prototype.hasOwnProperty.call(this.image, 'mobile') && Object.prototype.hasOwnProperty.call(this.image, 'desktop')) {
        return true;
      }

      return false;
    },
  },
};
</script>
