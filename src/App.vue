<template>
  <div
    id="app"
    :class="{'category--women' : isWomen, 'is-content' : isContentPage,
             'samba': this.$route.params.franchise === 'Samba Rose',
             'pod': this.$route.params.franchise === 'POD',
             'deerupt': this.$route.params.franchise === 'Deerupt',
             'falcon': this.$route.params.franchise === 'Falcon' }"
    class="category">
    <transition
      name="fade"
      @enter="pageTransitionStart"
      @afterEnter="pageTransitionEnd">
      <router-view :route-animating="routeAnimating"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      routeAnimating: false,
    };
  },

  computed: {
    isWomen() {
      return (this.$route.params.gender === 'women') === true;
    },

    isContentPage() {
      return this.$route.name === 'content' || this.$route.name === '3d-view';
    },
  },

  methods: {
    pageTransitionStart() {
      this.routeAnimating = true;
    },

    pageTransitionEnd() {
      this.routeAnimating = false;
    },

    home(route) {
      return (route.path === '/men') ? { franchises: 'Men' } : { franchises: 'Women' };
    },

    franchise(route, content) {
      const { gender, franchise } = route.params;

      return { content: content[gender].filter(obj => obj.franchise === franchise).pop().content };
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
  position: absolute;
  width: 100%;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

$desktop-header-height: 150px;
$mobile-header-height: 50px;

.category {
  background-color: #222;
  color: #fff;
  top: 0;
  min-height: calc(100vh - #{$mobile-header-height});
  transition: background-color 1s, top 1s;

  @media only screen and (min-width: 765px) {
    min-height: calc(100vh - #{$desktop-header-height});
    top: $desktop-header-height;
  }
}

.category--women {
  background-color: #fff;
  color: #222;
}

.is-content {
  left: 0;
  position: absolute;
  min-height: 100vh;
  top: -34px;
  width: 100%;
  z-index: 1;
  margin-top: 0;
  transition: top 1s;

  @media only screen and (min-width: 765px) {
    top: 0;
  }
}
</style>
