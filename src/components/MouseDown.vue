<template>
  <div>
    <svg
      :width="widthZ + 'px'"
      :height="heightZ + 'px'"
      class="mouse"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29.12 45.43">
      <g
        id="Layer_2"
        data-name="Layer 2"><g
          id="Layer_3"
          data-name="Layer 3">
          <rect
            :style="{ fill:fillZ, stroke:strokeZ}"
            class="cls-1"
            x="0.5"
            y="0.5"
            width="28.12"
            height="44.43"
            rx="14.06"
            ry="14.06"/>
          <rect
            :style="{ fill:fillButtonZ, stroke:strokeButtonZ}"
            class="cls-2"
            x="12.45"
            y="9.21"
            width="4.23"
            height="6.68"
            rx="2.11"
            ry="2.11"/></g></g>
    </svg>
    <p class="scrolltext">SCROLL TO VIEW MORE</p>
  </div>
</template>

<script>
export default {
  name: 'MouseDown',

  props: {
    height: {
      type: Number,
      required: true,
      default: 100,
    },
    width: {
      type: Number,
      required: true,
      default: 100,
    },
    fill: {
      type: String,
      required: false,
      default: 'transparent',
    },
    stroke: {
      type: String,
      required: false,
      default: 'white',
    },
    fillButton: {
      type: String,
      required: false,
      default: 'white',
    },
    strokeButton: {
      type: String,
      required: false,
      default: 'black',

    },
  },

  data() {
    return {
      heightZ: this.height,
      widthZ: this.width,
      fillZ: this.fill,
      strokeZ: this.stroke,
      fillButtonZ: this.fillButton,
      strokeButtonZ: this.strokeButton,
    };
  },
};
</script>

<style lang="scss" scoped>


.scrolltext {
  color: white;
}
</style>
