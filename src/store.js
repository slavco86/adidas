import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    json: {},
  },
  mutations: {
    json(state, payload) {
      state.json = payload;
    },
  },
  actions: {

  }
})