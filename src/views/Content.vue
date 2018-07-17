<template>
  <div>
    <Colourways/>
    <Social/>
  </div>
</template>

<script>
import Colourways from '@/views/Colourways.vue';
import Social from '@/views/Social.vue';

export default {
  name: 'ContentContainer',
  components: {
    Colourways,
    Social,
  },
};
</script>

