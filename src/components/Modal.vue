<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container"
            :class="{ podContainer: pod }">
            <img
            class="close"
            src="../assets/close_black.png"
            @click="$emit('close')">
          <div class="modal-body">
            <img
            :class="{ deeruptLogo: deerupt, podLogo: pod }"
            src="../assets/adidas-logo.svg">
            <div :class="{ franchiseTitle: deerupt, 
            franchisePOD: pod }">
              {{ franchise }}
              {{ franchiseUpdate }}
            </div>
            <slot>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modalFranchise: {
      type: String,
      required: false,
      default: 'defaultBrand',
    }
  },
  data() {
    return {
      franchise: this.modalFranchise,
      deerupt:   false,
      sambarose: false,
      pod:       false,
      allBrands: false
    }
  },
  computed: {
    franchiseUpdate() {
      var lcFranchise = this.franchise.toLowerCase();
        if  (lcFranchise == 'deerupt') {
            this.deerupt = true;
        } else if (lcFranchise == 'sambarose') {
            this.sambarose = true;
        } else if (lcFranchise == 'pod') {
            this.pod = true;
        } else {
          this.allBrands = true;
        }
    }
  }
};
</script>

<style scoped>

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
  background-image: url("../assets/swmobile.png");
  background-repeat: no-repeat;
}

.podContainer {
  background-image: none;
  background-color: #3333ff !important;
}

.modal-body {
  margin: 55% 0;
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

.close {
  position: absolute;
  top: 2%;
  right: 3%;
  width: 16%;
}

.deeruptLogo,
.podLogo {
  width: 22%;
}

.podLogo {
  position: absolute;
  filter: invert(1);
  bottom: -163%;
  right: 2%;
  width: 18%;
}

.franchiseTitle {
  font-size: 66px;
  font-weight: 600;
  color: #222;
}

.franchisePOD {
  color: white;
  position: absolute;
  top: 225%;
  left: 22%;
  font-size: 504%;
  font-weight: 300;
}

.franchiseInfo {
  background-color: black;
}

</style>
