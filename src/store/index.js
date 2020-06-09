import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isGeoApproved: false,
    weatherDetails: undefined,
    date: undefined
  },
  mutations: {
    approveGeoLocation(state) {
      state.isGeoApproved = true;
    },
    updateWeatherDetails(state, weatherDetails) {
      state.weatherDetails = weatherDetails;
    },
    initiateDate(state, date) {
      state.date = date;

    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isDayTime: state => {
      return state.date.isDayTime === true
    },
    isNightTime: state => {
      console.log(state.date)
      return state.date.isNightTime === true
    },
  }
})
