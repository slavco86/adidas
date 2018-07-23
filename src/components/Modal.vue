<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <ButtonClose
            :to="$route.path"
            class="close--modal"
            @click.native="$emit('close')" />
          <div class="modal-body">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ButtonClose from '@/components/ButtonClose.vue';

export default {
  name: 'Modal',

  components: {
    ButtonClose,
  },
};
</script>

<style scoped>
#modalh {
  padding-top: 58%;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 375px;
  height: 678px;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  background-image: url("../assets/swmobile.png");
  background-repeat: no-repeat;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  color: #222;
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media only screen and (min-width: 765px) {

  .modal-container {
    width: 765px;
    height: 1024px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    background-image: url("../assets/swtablet.png");
    background-repeat: no-repeat center center fixed;
    background-size: cover;
}

#modalh {
  padding-top: 20%;
}

@media only screen and (min-width: 1025px) {

.modal-container {
    width: 718px;
    height: 529px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  }

  #modalh {
    padding-top: 8%;
  }

  }

}

.close--modal {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>
