<template>
  <div class="vSpotVideo">
    <slot/>
    <div class="video">
      <Picture v-if="imageShouldDisplay" :image="image" class="video__picture"
               @click.native="showVideo(videoRef)"/>
      <video ref="videoRef" :autoplay="autoplay" :class="{ 'video__video--displayed ' : videoShow || !image }"
             class="video__video" controls @click="playPauseVideo(videoRef)">
        <source :src="`${url}/mp4_720p`" type="video/mp4">
        <source :src="`${url}/webm_720p`" type="video/webm">
      </video>
    </div>
  </div>
</template>

<script>
import Picture from '@/components/Picture.vue';

export default {
  components: {
    Picture,
  },

  props: {
    image: {
      type: [Object, String],
      default: '',
    },
    url: {
      type: String,
      default: '#',
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      videoShow: false,
    };
  },

  computed: {
    imageShouldDisplay() {
      return !this.autoplay && (!this.videoShow && this.image);
    },

    videoRef: {
      get() {
        return this.$refs.videoRef;
      },
      set(value) {
        this.$refs.videoRef = value;
      },
    },
  },

  methods: {
    showVideo(ref) {
      this.videoShow = true;
      this.$nextTick(() => {
        ref.play();
      });
    },

    playPauseVideo(ref) {
      if (ref.paused) {
        return ref.play();
      }

      return ref.pause();
    },
  },
};
</script>
<style lang="scss" scoped>
.video {
  position: relative;
}

.video__picture {
  position: relative;
  z-index: 1;
}

.video__video {
  width: 100%;
  display: none;
}

.video__video--displayed {
  position: relative;
  display: block;
}
</style>

