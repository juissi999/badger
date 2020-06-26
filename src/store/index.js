import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, n) {
      state.count += n
    },
    decrement (state, n) {
      const newCount = state.count - n
      newCount >= 0 ? (state.count = newCount) : (state.count = 0)
    },
    reset (state) {
      state.count = 0
    }
  },
  actions: {},
  modules: {}
})
