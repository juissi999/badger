<template>
  <div id="app">
    <v-app>
      <NavBar color="light" />
      <v-main>
        <router-view />
      </v-main>
      <Footer color="light" />
    </v-app>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { NavBar, Footer },
  mounted () {
    this.$vuetify.theme.dark = this.$store.state.darkMode
  }
}
</script>
