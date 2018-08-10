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
        <MouseDown
        class="scroll"
        :height=50
        :width=35
        :fill="'transparent'"
        :stroke="'white'"
        :fillButton="'white'"
        :strokeButton="'white'">
      </MouseDown>
    </div>
  </div>
</template>

<script>
import Video from '@/components/Video.vue';
import MouseDown from '../components/MouseDown.vue';

export default {
  name: 'ShoppableVideo',
  components: {
    Video,
    MouseDown,
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

<style lang="scss" scoped>

.scroll {
  position: absolute;
  bottom: 10%;
  text-align: center;
}

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
  align-items: center;
}
</style>
