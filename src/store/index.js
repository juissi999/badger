import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ticks: []
  },
  mutations: {
    increment (state, n) {
      for (let i = 0; i < n; i++) {
        state.ticks.push(new Date())
      }
    },
    decrement (state) {
      state.ticks.length > 0 ? state.ticks.pop() : (state.ticks = [])
    },
    reset (state) {
      state.ticks = []
    },
    initialiseStore (state) {
      // Check if the ID exists
      if (localStorage.getItem('badgerStore')) {
        // Replace the state object with the stored item
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('badgerStore')))
        )
      }
    }
  },
  actions: {},
  modules: {}
})
