<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-3 ma-md-4 pa-0 pa-md-5">
        <h1 class="display-2 font-weight-bold mb-1 mb-md-3">Chart</h1>
      </v-col>
    </v-row>
    <v-card class="mx-auto" max-width="400">
      <SumChart :chartdata="datacollection" :options="options" />
    </v-card>
  </v-container>
</template>

<script>
import SumChart from '../components/SumChart'
export default {
  components: { SumChart },
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
  })
}
</script>
