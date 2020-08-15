<template>
  <div id="app">
    <v-app>
      <NavBar />
      <v-main>
        <router-view />
      </v-main>
      <v-footer>
        <Footer />
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { NavBar, Footer }
}
</script>
