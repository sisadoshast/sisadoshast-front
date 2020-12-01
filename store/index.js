import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const instance = new Vuex.Store({
  state: {
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    logout(state) {
      state.token = null
    }
  }
});

export { instance as storeInstance }

export default function() {
  return instance
};
