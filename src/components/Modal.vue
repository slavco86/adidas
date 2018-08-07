<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        Hello World
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Modal',
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
  width: 100%;
  height: 100%;
  max-width: 830px;
  max-height: 580px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  text-align: center;
}
</style>
