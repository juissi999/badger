<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
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
        <v-row justify="center">
          <v-btn @click="addVisitor(1)" class="primary mx-1 my-1">Add 1</v-btn>
          <v-btn @click="addVisitor(5)" class="mx-1 my-1">Add 5</v-btn>
          <v-btn @click="substractVisitor(1)" class="mx-1 my-1">Remove 1</v-btn>
          <PopUp />
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          Today's number
        </h2>

        <v-row justify="center"
          ><h1>{{ this.$store.state.count.length }}</h1></v-row
        >
      </v-col>

      <v-card class="mx-auto" max-width="400">
        <SumChart :chartdata="datacollection" :options="options" />
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import PopUp from './PopUp'
import SumChart from './SumChart'

export default {
  name: 'MainPage',

  components: { PopUp, SumChart },
  data: () => ({
    datacollection: {
      datasets: [
        {
          label: 'Clients',

          data: [
            {
              x: new Date(),
              y: 1
            },
            {
              t: new Date(),
              y: 10
            }
          ]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Ticks on timeline',

        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                distribution: 'series'
              }
            }
          ]
        }
      }
    }
  }),
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
