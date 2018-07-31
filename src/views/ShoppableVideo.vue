<template>
  <div class="content-slide">
    <div class="content-slide__inner">
      <div v-if="this.$route.params.franchise === 'Deerupt' & width <= 375">
        <Video
        :url="data.normal.url"/>
      </div>
      <div v-else-if="this.$route.params.franchise === 'Deerupt' & width >= 376">
        <Video
        :url="data.normal.url"/>
      </div>
      <div v-else-if="this.$route.params.franchise === 'POD' & width <= 375">
        <Video
        :url="data.normal.url"/>
      </div>
      <div v-else-if="this.$route.params.franchise === 'POD' & width >= 376">
        <Video
        :url="data.normal.url"/>
      </div>
      <div v-else-if="this.$route.params.franchise === 'Samba Rose' & width <= 375">
        <Video
        :url="data.normal.url"/>
      </div>
      <div v-else-if="this.$route.params.franchise === 'Samba Rose' & width >= 376">
        <Video
        :url="data.normal.url"/>
      </div>
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
