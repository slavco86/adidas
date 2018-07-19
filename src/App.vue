<template>
  <div id="app">
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

<style lang="scss">
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
