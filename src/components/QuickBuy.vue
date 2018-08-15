<template>
  <Button
    :data-quickview-path="quickBuyPath"
    :data-productsku="sku"
    :data-ip-name="sku"
    class="cta quickView quickBuy">
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
  padding: 0;
  max-width: 45px;

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

.category--women .quickView {
  circle {
    fill: #fff;
    stroke: #fff;
    transition: fill 0.35s ease-in-out, stroke 0.35s ease-in-out;
  }
}

.influencer-carousel /deep/ .quickView {
  circle {
    fill: white;
    stroke: #fff;
    transition: fill 0.35s ease-in-out, stroke 0.35s ease-in-out;
  }

  polygon,
  polyline {
    fill: #fff;
    stroke: #222;
    transition: fill 0.35s ease-in-out, stroke 0.35s ease-in-out;
  }
}

// Women Influencer
.category--women {
  /deep/ .quickView:hover {
    circle {
      stroke: #222;
      fill: #222;
    }

    polygon,
    polyline {
      fill: #fff;
      stroke: #222;
    }
  }

  .section-colourways /deep/ .quickView {
    circle {
      stroke: #222;
    }
  }

  .influencer-carousel /deep/ .quickView {
    circle {
      fill: #fff;
      stroke: #fff;
    }
  }
}

.influencer-carousel /deep/ .quickView:hover {
  polygon,
  polyline {
    fill: #222;
    stroke: #fff;
  }

  circle {
    fill: #222;
    stroke: #222;
  }
}

</style>
