<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="pa-0 pa-md-5">
        <v-flex xs2 offset-xs5 sm6 offset-sm3>
          <v-img
            :src="require('../assets/logo.png')"
            contain
            max-height="200"
          />
        </v-flex>
      </v-col>

      <v-col class="mb-0 mb-md-4">
        <h1 class="display-2 font-weight-bold mb-1 mb-md-3">
          badger
        </h1>

        <p class="subheading font-weight-regular mb-0 mb-md-3">
          Every bouncers necessary tool upgraded to 2020.
        </p>
      </v-col>

      <v-col class="mb-0 mb-md-5" cols="12">
        <v-row justify="center">
          <v-btn @click="addVisitor(1)" class="primary mx-1 my-1">Add 1</v-btn>
          <v-btn @click="addVisitor(5)" class="mx-1 my-1">Add 5</v-btn>
          <v-btn @click="substractVisitor(1)" class="mx-1 my-1">Remove 1</v-btn>
        </v-row>
      </v-col>

      <v-col class="mb-0 mb-md-5" cols="12">
        <h2 class="headline font-weight-bold mb-1 mb-md-3">
          Today's number
        </h2>

        <v-row justify="center">
          <h1>{{ this.$store.state.count.length }}</h1>
        </v-row>
      </v-col>

      <v-col class="mb-0 mb-md-5" cols="12">
        <v-row justify="center">
          <PopUp />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PopUp from './PopUp'

export default {
  name: 'MainPage',

  components: { PopUp },

  methods: {
    addVisitor (howmany) {
      this.$store.commit('increment', howmany)
    },
    substractVisitor (howmany) {
      this.$store.commit('decrement', howmany)
    }
  }
}
</script>
