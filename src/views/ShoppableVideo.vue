<template>
  <div class="content-slide">
    <div class="content-slide__inner">
      <iframe
        :src="src"
        allowfullscreen
        frameborder="0"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'https://ssl-dot-player-dot-smartzer-editor.appspot.com/video?video=jpNti3sr7TwPxohDN3tdiVZR&companyId=58331cf19f43139bd4702949',
    },
  },
};
</script>

<style scoped>
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
