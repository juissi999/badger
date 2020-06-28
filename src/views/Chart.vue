<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-3 ma-md-4 pa-0 pa-md-5">
        <h1 class="display-2 font-weight-bold mb-1 mb-md-3">Chart</h1>
        <p class="subheading font-weight-regular mb-0 mb-md-3">
          Displays a sum chart of ticks (y-axis) against time (x-axis).
        </p>
      </v-col>
    </v-row>
    <v-card class="mx-auto" max-width="600">
      <SumChart :chartdata="count" :options="options" />
    </v-card>
  </v-container>
</template>

<script>
import SumChart from '../components/SumChart'

export default {
  components: { SumChart },
  computed: {
    count () {
      //return store.state.count
      let allCount = 0
      const data = {
        // labels: this.$store.state.count.map(el => new Date(el)),
        datasets: [
          {
            label: 'Ticks',
            borderColor: '#8e5ea2',
            data: this.$store.state.count.map(el => {
              allCount++
              return { t: new Date(el), y: allCount }
            })
          }
        ]
      }
      return data
    }
  },
  data: () => ({
    options: {
      title: {
        display: true,
        text: 'Ticks on timeline'
      },
      scales: {
        xAxes: [
          {
            type: 'time',
            distribution: 'linear',
            ticks: {
              source: 'auto'
            }
          }
        ]
      }
    }
  })
}
</script>
