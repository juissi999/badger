<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo.png')"
          transition="scale-transition"
          width="40"
        />

        <span
          alt="badger Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          width="100"
          >badger</span
        >
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/" target="_blank" text>
        <span class="mr-2">Landing page</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <MainPage />
    </v-main>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',

  components: {
    MainPage
  },

  data: () => ({
    //
  })
}
</script>
