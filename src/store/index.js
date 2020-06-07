import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isGeoApproved: false
  },
  mutations: {
    approveGeoLocation(state) {
      state.isGeoApproved = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
