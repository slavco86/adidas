<template>
  <div class="content-slide">
    <div class="content-slide__inner">
      <iframe
        v-if="data.shoppable"
        :src="width > 765 ? data.shoppable.desktop : data.shoppable.mobile"
        allowfullscreen
        frameborder="0"/>
      <Video
        v-else
        v-bind="data.normal"/>
    </div>
  </div>
</template>

<script>
import Video from '@/components/Video.vue';

export default {
  name: 'ShoppableVideo',
  components: {
    Video,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      width: window.innerWidth,
    };
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
