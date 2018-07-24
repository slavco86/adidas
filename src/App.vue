<template>
  <div
    id="app"
    :class="{'category--women' : isWomen }"
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
  text-align: center;
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

.category {
  background-color: #222;
  color: #fff;
  transition: background-color 1s;
}

.category--women {
  background-color: #fff;
  color: #222;
}
</style>
