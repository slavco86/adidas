<template>
  <div class="vSpotVideo">
    <slot/>
    <div class="video">
      <Picture
        v-if="imageShouldDisplay"
        :image="image"
        class="video__picture"
        @click.native="showVideo(videoRef)"/>
      <video
        ref="videoRef"
        :autoplay="autoplay"
        :class="{ 'video__video--displayed ' : videoShow || !image }"
        class="video__video"
        controls
        @click="playPauseVideo(videoRef)">
        <source
          :src="`${videoUrl}/mp4_720p`"
          type="video/mp4">
        <source
          :src="`${videoUrl}/webm_720p`"
          type="video/webm">
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
    video: {
      type: [String, Object],
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

    videoUrl() {
      if (typeof this.video === 'object') {
        return window.innerWidth >= 765 ? this.video.desktop : this.video.mobile;
      }

      return this.video;
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
  cursor: pointer;
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

