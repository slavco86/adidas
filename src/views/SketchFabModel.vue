<template>
  <div class="content-slide">
    <div class="content-slide__inner">
      <iframe
        :src="src"
        width="640"
        height="480"
        frameborder="0"
        allow="autoplay; fullscreen; vr"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"/>
    </div>
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
iframe {
  width: 100%;
  height: 90vh;
}

.content-slide {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
}

.content-slide__inner {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
}
</style>
