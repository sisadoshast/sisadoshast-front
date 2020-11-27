import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default function() {
  return new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
}