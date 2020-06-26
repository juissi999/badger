<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/badger.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          badger
        </h1>

        <p class="subheading font-weight-regular">
          Every bouncers necessary tool upgraded to 2020.
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Today's number
        </h2>

        <v-row justify="center"
          ><h1>{{ numberToday }}</h1></v-row
        >
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <v-btn @click="addVisitor(1)">Add 1</v-btn>
          <v-btn @click="addVisitor(5)">Add 5</v-btn>
          <v-btn @click="substractVisitor(1)">Remove 1</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MainPage',

  data: () => ({
    numberToday: 0,
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ]
  }),
  methods: {
    addVisitor (howmany) {
      this.numberToday += howmany
    },
    substractVisitor (howmany) {
      const newVisitors = this.numberToday - howmany
      newVisitors >= 0 ? (this.numberToday = newVisitors) : 0
    }
  }
}
</script>
