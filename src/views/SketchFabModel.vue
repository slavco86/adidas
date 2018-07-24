<template>
  <div class="content-slide">
    <div class="content-slide__inner">
      <router-link
        v-if="$route.name === 'content'"
        to="3d-view"
        append>
        Display 3D Content
      </router-link>
      <div
        v-else
        class="iframe-container">
        <ButtonClose :to="`/${$route.params.gender}/${$route.params.franchise}/`" />
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
  </div>
</template>

<script>
import ButtonClose from '@/components/ButtonClose.vue';

export default {
  components: {
    ButtonClose,
  },

  props: {
    contentView: {
      type: Boolean,
      default: true,
    },
    src: {
      type: String,
      default: 'https://sketchfab.com/models/a06e9aca74b74cb3920123b21baf6140/embed',
    },
  },
};
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100vh;
}

.iframe-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
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
  width: 100%;
}
</style>
