<template>
  <div class="c-container">
    <h2>Shoppable Video</h2>
    <iframe
      :src="src"
      allowfullscreen
      frameborder="0"/>
    <a :href="cta.href">{{ cta.text }}</a>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'https://ssl-dot-player-dot-smartzer-editor.appspot.com/video?video=jpNti3sr7TwPxohDN3tdiVZR&companyId=58331cf19f43139bd4702949'
    },
    cta: {
      type: Object,
      default: () => ({
        href: '/campaign/Summer+Advert/?facet-campaign=summer-advert',
        text: 'SHOP THE SUMMER ADVERT',
      }),
    },
  },
};
</script>

<style scoped>
iframe {
  height: 100vh;
  max-height: 500px;
  min-height: 400px;
  width: 100%;
}
</style>
