<template>
  <div
    id="app"
    :class="{'category--women' : isWomen, 'is-content' : isContentPage }"
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
      return this.$route.name === 'content';
    },
  },

  methods: {
    pageTransitionStart() {
      this.routeAnimating = true;
    },

    pageTransitionEnd() {
      this.routeAnimating = false;
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

.category {
  background-color: #222;
  color: #fff;
  transition: background-color 1s;
}

.category--women {
  background-color: #fff;
  color: #222;
}

.is-content {
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
}
</style>
