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
  max-width: 60px;

  @media only screen and (min-width: 1024px) {
    max-width: 80px;
    padding-right: 0%;
  }

  circle {
    fill: transparent;
    transition: fill 0.35s ease-in-out;
  }

  polygon,
  polyline {
    fill: transparent;
    transition: fill 0.35s ease-in-out, stroke 0.35s ease-in-out;
  }

  &:hover {
    circle {
      fill: #fff;
    }

    polygon,
    polyline {
      fill: #222;
      stroke: #fff;
    }
  }
}

.influencer-carousel /deep/ .quickView {
  circle {
    fill: white;
    stroke: #222;
    transition: fill 0.35s ease-in-out, stroke 0.35s ease-in-out;
  }

  polygon,
  polyline {
    fill: #fff;
    stroke: #222;
    transition: fill 0.35s ease-in-out, stroke 0.35s ease-in-out;
  }

  &:hover {
    circle,
    polygon,
    polyline {
      fill: #222;
      stroke: #fff;
    }
  }
}

.category--women .quickView {
  circle {
    fill: #fff;
    stroke: #222;
    transition: fill 0.35s ease-in-out, stroke 0.35s ease-in-out;
  }

  &:hover {
    circle {
      fill: #222;
      stroke: #fff;
    }

    & /deep/ polygon,
    & /deep/ polyline {
      fill: #fff;
      stroke: #222;
    }
  }
}

.category--women .section-colourways /deep/ .quickView {
  circle {
    fill: transparent;
  }

  &:hover {
    circle {
      stroke: #222;
      fill: #222;
    }

    polygon,
    polyline {
      fill: white;
      stroke: #222;
    }
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
</style>
