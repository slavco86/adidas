<template>
  <div class="sketchfab-embed-wrapper">
    <iframe
      :src="src"
      width="640"
      height="480"
      frameborder="0"
      allow="autoplay; fullscreen; vr"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"/>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'https://sketchfab.com/models/a06e9aca74b74cb3920123b21baf6140/embed'
    },
  },
};
</script>

<style>

</style>
