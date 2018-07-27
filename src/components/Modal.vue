<template>
  <transition name="modal">
    <div class="modal-mask">
      <div
        :class="{deWrapper: deerupt,srWrapper: sambarose,pWrapper: pod,abWrapper: allBrands}"
        class="modal-wrapper">
        <div
          :class="{podContainer: pod,srContainer: sambarose,dContainer: deerupt,abContainer: allBrands}"
          class="modal-container">
          <img
            :class="{deeruptCloseB: deerupt,sambaRoseB: sambarose,podB: pod,allBrandsB: allBrands}"
            class="close"
            src="../assets/close_black.png"
            @click="$emit('close')">
          <img
            :class="{deeruptCloseW: deerupt,sambaRoseW: sambarose,podW: pod,allBrandsW: allBrands}"
            class="close"
            src="../assets/close_white.png"
            @click="$emit('close')">
          <div class="modal-body">
            <img
              :class="{deeruptLogo: deerupt,podLogo: pod,
                       sambaroseLogo: sambarose,allBrandsLogo: allBrands}"
              src="../assets/adidas-logo.svg">
            <div
              :class="{franchiseDeerupt: deerupt,franchisePOD: pod,franchiseSR: sambarose,
                       allBrandsF: allBrands}">
              {{ franchiseUpdate() }}
            </div>
            <slot/>
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
    },
  },
  data() {
    return {
      franchise: this.modalFranchise,
      deerupt: false,
      sambarose: false,
      pod: false,
      allBrands: false,
    };
  },
  methods: {
    franchiseUpdate() {
      const lcFranchise = this.franchise.toLowerCase();
      if (lcFranchise === 'deerupt') {
        this.deerupt = true;
      } else if (lcFranchise === 'samba rose') {
        this.sambarose = true;
      } else if (lcFranchise === 'pod') {
        this.pod = true;
      } else {
        this.allBrands = true;
      }
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
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  background-image: url("../assets/swmobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media screen and (min-width: 765px) {
    background-image: url("../assets/swtablet.png");
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: 1366px) {
    height: 81%;
    width: 62%;
    background-image: url("../assets/swdesktop.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.dContainer,
.abContainer {
  @media screen and (min-width: 1366px) {
    height: 60%;
    width: 49%;
  }
}

.podContainer {
  background-image: none;
  background-color: #33f !important;

  @media screen and (min-width: 1366px) {
    height: 60%;
    width: 49%;
  }
}

.modal-body {
  margin: 55% 0;

  @media screen and (min-width: 765px) {
    margin: 38% 0;
  }

  @media screen and (min-width: 1366px) {
    margin: 14% 0;
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  transform: scale(1.1);
}

.close {
  position: absolute;
  top: 2%;
  right: 3%;
  width: 16%;
}

.sambaroseLogo,
.allBrandsLogo {
  width: 22%;

  @media screen and (min-width: 765px) {
    width: 30%;
  }

  @media screen and (min-width: 1366px) {
    width: 35%;
  }
}

.deeruptLogo {
  width: 22%;

  @media screen and (min-width: 1366px) {
    display: none;
  }
}

.sambaroseLogo {
  position: absolute;
  top: 186%;
  left: 39%;

  @media screen and (min-width: 765px) {
    top: 165%;
    left: 41%;
    width: 19%;
  }

  @media screen and (min-width: 1366px) {
    top: 116%;
  }
}

.podLogo {
  display: none;
}

.franchiseDeerupt {
  font-size: 66px;
  font-weight: 600;
  color: #222;
  padding-top: 4.5%;
}

.srContainer {
  background: none;
  background-color: white !important;

  @media screen and (min-width: 1366px) {
    height: 60%;
    width: 49%;
  }
}

.franchisePOD {
  color: #33f;
  position: absolute;
  top: 216%;
  left: 10%;
  background: url(../assets/podpink.svg);
  background-repeat: no-repeat;
  width: 85%;
  height: 100%;

  @media screen and (min-width: 765px) {
    top: 245%;
  }

  @media screen and (min-width: 1366px) {
    top: 164%;
    left: 27%;
    width: 50%;
  }
}

.franchiseSR {
  font-size: 0;
  background: url(../assets/sambarosepinklogo.svg);
  background-repeat: no-repeat;
  position: absolute;
  top: 16%;
  right: 0;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 765px) {
    top: 26%;
  }

  @media screen and (min-width: 1366px) {
    top: 17%;
  }
}

.franchiseInfo {
  background-color: black;
}

.allBrandsF {
  font-size: 4em;
}

.deeruptCloseB,
.sambaRoseB,
.allBrandsB {
  @media screen and (min-width: 1366px) {
    display: none;
  }
}

.deeruptCloseW,
.sambaRoseW,
.allBrandsW {
  display: none;

  @media screen and (min-width: 1366px) {
    display: inline;
    position: absolute;
    top: -8%;
    right: -4%;
    width: 11%;
  }
}

.podB {
  display: none;
}

.podW {
  @media screen and (min-width: 1366px) {
    display: inline;
    position: absolute;
    top: -8%;
    right: -4%;
    width: 11%;
    color: white;
  }
}

.deWrapper,
.pWrapper,
.abWrapper {
  height: 100vh;
}

.srWrapper {
  background: none;
  height: 100vh;
}

.allBrandsLogo {
  @media screen and (min-width: 1366px) {
    width: 110px;
    position: absolute;
    top: -32%;
    left: 42%;
  }
}
</style>
