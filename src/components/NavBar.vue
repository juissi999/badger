<template>
  <v-app-bar absolute app :color="color" flat>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('@/assets/logo.png')"
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
    <v-btn @click="changePage('/')" text>
      <!-- <v-btn @click="$router.push('/')" text v-if="this.$route.path !== '/'"> -->
      <span class="mr-2 hidden-md-and-down">home</span>
      <v-icon>mdi-counter</v-icon>
    </v-btn>
    <v-btn @click="changePage('/chart')" text>
      <span class="mr-2 hidden-md-and-down">chart</span>
      <v-icon>mdi-chart-line</v-icon>
    </v-btn>
    <v-btn @click="changePage('/about')" text>
      <span class="mr-2 hidden-md-and-down">about</span>
      <v-icon>mdi-alphabetical</v-icon>
    </v-btn>
    <v-btn @click="toggleDarkMode" text>
      <span class="mr-2 hidden-md-and-down">dark mode</span>
      <v-icon>mdi-brightness-3</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  name: 'NavBar',
  props: ['color'],
  methods: {
    changePage (goto) {
      // this function checks that the link does not forward the user to the
      // same page he left. Fixes vue router NavigationDuplicated error.
      if (this.$route.path !== goto) {
        this.$router.push(goto)
      }
    },
    toggleDarkMode () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>
