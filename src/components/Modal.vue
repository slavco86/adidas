<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container"
            :class="{ podContainer: pod,
                      srContainer: sambarose
                     }">
            <img
            class="close"
            src="../assets/close_black.png"
            @click="$emit('close')">
          <div class="modal-body">
            <img
            :class="{ deeruptLogo: deerupt, 
                      podLogo: pod, 
                      sambaroseLogo: sambarose,
                      allBrandsLogo: allBrands 
                    }"
            src="../assets/adidas-logo.svg">
            <div :class="{ franchiseDeerupt: deerupt, 
                          franchisePOD: pod,
                          franchiseSR: sambarose 
                        }">
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

.srContainer {
  background-image: none;
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
.sambaroseLogo,
.allBrandsLogo {
  width: 22%;
}

.sambaroseLogo {
  position: absolute;
  top: 149%;
  left: 41%;
}

.podLogo {
  display: none;
}

.franchiseDeerupt {
  font-size: 66px;
  font-weight: 600;
  color: #222;
}

.franchisePOD {
  color: #3333ff;
  position: absolute;
  top: 238%;
  left: 10%;
  background: url(../assets/podpink.svg);
  background-repeat: no-repeat;
  width: 85%;
  height: 100%;
}

.franchiseSR {
  font-size: 0;
  background: url(../assets/sambarosepinklogo.svg);
  background-repeat: no-repeat;
  position: absolute;
  top: 17%;
  left: 0%;
  height: 24px;
  width: 314px;
}

.franchiseInfo {
  background-color: black;
}

</style>
