import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: []
  },
  mutations: {
    increment (state, n) {
      for (let i = 0; i < n; i++) {
        state.count.push(new Date())
      }
    },
    decrement (state) {
      state.count.length > 0 ? state.count.pop() : (state.count = [])
    },
    reset (state) {
      state.count = []
    }
  },
  actions: {},
  modules: {}
})
