import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Subscribe to store updates
store.subscribe((mutation, state) => {
  // Store the state object as a JSON string to local storage
  localStorage.setItem('badgerStore', JSON.stringify(state))
})

new Vue({
  router,
  store,
  vuetify,
  beforeCreate () {
    this.$store.commit('initialiseStore')
  },
  render: h => h(App)
}).$mount('#app')
