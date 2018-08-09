<template>
  <transition
    v-if="display"
    name="modal">
    <div class="modal">
      <div class="modal__wrapper">
        <CloseBtn
          :fill="background"
          :stroke="textColor"
          class="modal__wrapper__close"
          @click.native="closeModal"/>
        <div
          :style="inlineStyles"
          class="modal__content">
          <component
            v-for="(item, key) in content"
            :key="key"
            :is="item.component"
            v-bind="item.content"/>
        </div>
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
.modal {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  z-index: 9998;

  @media screen and (min-width: 600px) {
    padding: 0 15%;
  }
}

.modal__wrapper {
  max-width: 710px;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 600px) {
    height: auto;
  }
}

.modal__content {
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
  height: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  overflow-y: auto;
  padding: 15% 1rem;
  text-align: center;
  transform: scale(1);
  transition: transform 0.3s ease;
  width: 100%;

  @media screen and (min-width: 600px) {
    max-height: 540px;
  }
}

.modal__wrapper__close {
  border-radius: 50%;
  cursor: pointer;
  height: 50px;
  position: absolute;
  right: 5%;
  top: 5%;
  width: 50px;
  z-index: 2;

  @media screen and (min-width: 765px) {
    right: -15px;
    top: -15px;
  }
}

.titles /deep/ {
  max-width: 450px;
  margin: 2rem 0;

  .title1 {
    font-weight: 900;
    font-size: 2rem;
  }

  .title2,
  .title2 p {
    font-size: 1rem;
  }

  .title2 p {
    width: 100%;
    word-break: break-word;
    line-height: 1.5;

    &:first-child {
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal__content,
.modal-leave-active .modal__content {
  transform: scale(1.1);
}
</style>
