<template>
  <transition
    v-if="display"
    name="modal">
    <div class="modal-mask">
      <div
        :style="inlineStyles"
        class="modal-container">
        <CloseBtn
          :invert="true"
          class="close"
          @click.native="closeModal"/>
        <component
          v-for="(item, key) in content"
          :key="key"
          :is="item.component"
          v-bind="item.content"/>
      </div>
    </div>
  </transition>
</template>

<script>
import Picture from '@/components/Picture.vue';
import Titles from '@/components/Titles.vue';
import CloseBtn from '@/components/CloseSVG.vue';

export default {
  name: 'Modal',

  components: {
    Picture,
    Titles,
    CloseBtn,

  },

  props: {
    background: {
      type: String,
      default: '#fff',
    },

    textColor: {
      type: String,
      default: '#000',
    },

    content: {
      type: Array,
      default: () => [],
    },

    display: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    inlineStyles() {
      const styles = {};

      styles.background = (this.background[0] === '#')
        ? this.background
        : `url(${this.background})`;

      styles.color = this.textColor;

      return styles;
    },
  },

  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};


</script>

<style lang="scss" scoped>

.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  -webkit-overflow-scrolling: touch;
  align-items: center;
  background-color: #fff;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  color: #000;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  margin: 0 auto;
  max-height: 580px;
  max-width: 830px;
  overflow-y: auto;
  padding: 1rem;
  text-align: center;
  width: 100%;
}

.titles /deep/ {
  max-width: 550px;

  .title1 {
    font-size: 2rem;
  }

  .title2 p {
    width: 100%;
    word-break: break-word;
    font-size: 1.25rem;
    line-height: 1.5;

    &:first-child {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
}

.close {
  position: absolute;
  top: 5%;
  right: 5%;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
</style>
