<template>
  <div
    id="app"
    :class="[
      {'category--women' : isWomen },
      {'is-content' : isContentPage },
      franchiseStyleHooks
    ]"
    class="category">
    <div
      v-if="error"
      class="error">
      Cannot find content file, please check path
    </div>
    <transition
      name="fade"
      @enter="pageTransitionStart"
      @afterEnter="pageTransitionEnd">
      <router-view
        :route-animating="routeAnimating"
        :content="servedContent" />
    </transition>
  </div>
</template>

<script>
import config from '@/config';

export default {
  name: 'App',

  data() {
    return {
      error: null,
      content: {
        men: [],
        women: [],
      },
      routeAnimating: false,
    };
  },

  computed: {
    servedContent() {
      if (this.$route.params.franchise) {
        return this.franchise(this.$route, this.content);
      }

      return this.content[this.$route.params.gender];
    },

    isWomen() {
      return (this.$route.params.gender === 'women') === true;
    },

    isContentPage() {
      return this.$route.name === 'content' || this.$route.name === '3d-view';
    },

    franchiseStyleHooks() {
      if (this.$route.params.franchise) {
        return this.$route.params.franchise.split(' ')[0].toLowerCase();
      }
      return false;
    },
  },

  watch: {
    '$route.params.gender': function gender() {
      this.getContent();
    },
  },

  mounted() {
    this.getContent();
  },


  methods: {
    pageTransitionStart() {
      this.routeAnimating = true;
    },

    pageTransitionEnd() {
      this.routeAnimating = false;
    },

    franchise(route, data) {
      const { gender = 'men', franchise } = route.params;

      const franchiseContent = data[gender].filter(obj => obj.franchise === franchise).pop();

      if (typeof franchiseContent === 'undefined') {
        return {};
      }

      return franchiseContent.content;
    },

    contentPath(gender = 'men') {
      const environment = (window.environment || 'Live').toLowerCase();
      const country = (window.countryISO || 'GB').toLowerCase();

      const location = `${config.baseUrl}content/${environment}/${country}/`;

      return gender === 'men' ? `${location}men.json` : `${location}women.json`;
    },

    getContent() {
      this.getJSON(this.contentPath(this.$route.params.gender), this.$route.params.gender);
    },

    getJSON(path, gender = 'men') {
      if (this.content[gender].length === 0) {
        return fetch(path)
          .then(data => data.json())
          .then((json) => {
            this.content[gender] = json;
            return json;
          })
          .catch((err) => {
            this.error = err.toString();
          });
      }

      return false;
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

.error {
  padding: 1rem;
  font-size: 1rem;
  background-color: #e05f5f;
  text-align: center;
}
</style>
