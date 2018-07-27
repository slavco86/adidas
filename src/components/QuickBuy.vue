<template>
  <Button
    :data-quickview-path="quickBuyPath"
    :data-product-sku="sku"
    :data-ip-name="sku"
    class="cta quickView">
    <BasketLogo :color="color"/>
  </Button>
</template>

<script>
import Button from '@/components/Button.vue';
import BasketLogo from '@/components/BasketLogo.vue';

export default {
  components: {
    Button,
    BasketLogo,
  },

  props: {
    url: {
      type: String,
      default: undefined,
      required: true,
    },
  },

  computed: {
    sku() {
      return this.url.split('/').pop();
    },

    quickBuyPath() {
      return `${this.url.slice(1)}/quickview/`;
    },

    color() {
      return (this.$route.params.gender === 'women') ? '#222' : '#fff';
    },
  },
};
</script>

<style lang="scss">
.quickView {
  background-color: transparent;
  cursor: pointer;
  margin: 0;
  max-width: 80px;
  fill: transparent;
  stroke: transparent;
  transition: fill 0.35s ease-in-out;

  &:hover {
    fill: #fff;

    polygon,
    polyline {
      fill: #222;
      stroke: #fff;
    }
  }
}

.influencer-carousel /deep/ .quickView {
  circle {
    fill: transparent;
    transition: fill 0.35s ease-in-out;

    &:hover {
      fill: #fff;
    }

    polygon,
    polyline {
      fill: #222;
      stroke: #fff;
    }
  }

  &:hover {
    circle {
      fill: #fff;
    }
  }
}

// Women
.category--women .quickView {
  fill: #fff;
  transition: fill 0.35s ease-in-out;

  &:hover {
    fill: #222;

    & /deep/ polygon,
    & /deep/ polyline {
      fill: #fff;
      stroke: #222;
    }
  }

  /deep/ circle {
    stroke: transparent;
  }
}

// Women Influencer
.category--women .influencer-carousel /deep/ .quickView {
  circle {
    fill: #fff;
  }

  &:hover {
    circle {
      fill: #222;

      polygon,
      polyline {
        fill: #fff;
        stroke: #222;
      }
    }
  }
}

// .category--women .influencer-carousel /deep/ .quickView:hover {
//   fill: #222;
// }
</style>
