<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="ma-2 ma-md-4 pa-0 pa-md-5">
        <h1 class="display-2 font-weight-bold mb-1 mb-md-3">Chart</h1>
      </v-col>
    </v-row>
    <v-card class="mx-auto" max-width="600">
      <SumChart :chart-data="chartdata" :options="options" />
    </v-card>
  </v-container>
</template>

<script>
import SumChart from '../components/SumChart'

export default {
  components: { SumChart },
  computed: {
    chartdata: function () {
      let allCount = 0
      const data = {
        // labels: this.$store.state.count.map(el => new Date(el)),
        datasets: [
          {
            label: 'Ticks',
            borderColor: this.$vuetify.theme.currentTheme.accent,
            data: this.$store.state.ticks.map(el => {
              allCount++
              return { t: new Date(el), y: allCount }
            })
          }
        ]
      }
      return data
    }
  },
  data: function () {
    return {
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
    }
  }
}
</script>
