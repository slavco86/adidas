<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <img
            id="closem"
            class="close"
            src="../assets/close_white.png"
            @click="$emit('close')">
          <div
            id="modalh"
            class="modal-header">
            <slot name="header" >
              default header
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
};
</script>

<style>

@font-face {
font-family: 'HCo Gotham SSm';
src:url('../assets/fonts/F4715F49B60D9B144.woff2') format('woff2'),
url('../assets/fonts/F4715F49B60D9B144.woff') format('woff');
font-weight: 400;
font-style: normal;
}


@font-face {
font-family: 'HCo Gotham SSm';
src:url('../assets/fonts/725262BC71949F842.woff2') format('woff2'),
url('../assets/fonts/725262BC71949F842.woff') format('woff');
font-weight: 500;
font-style: normal;
}


@font-face {
  font-family: 'HCo Gotham SSm';
  src: url('../assets/fonts/B5416F0FED9EA9CD2.woff2') format('woff2'),
  url('../assets/fonts/B5416F0FED9EA9CD2.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

#modalh {
  padding-top: 23%;
}

#closem {
  position: relative;
  left: 45%;
  width: 50px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;

}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 375px;
  height: 678px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
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
    font-family: Helvetica, Arial, sans-serif;
}

#closem {
  position: relative;
  left: 45%;
  width: 63px;
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
    font-family: Helvetica, Arial, sans-serif;

  }

  #closem {
    position: relative;
    margin-top: -7%;
    left: 53%;
    width: 53px;
  }

  #modalh {
    padding-top: 8%;
  }

  }

}


</style>
