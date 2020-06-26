<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn color="secondary" dark v-on="on">Reset counter</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">Reset counter?</v-card-title>
      <v-card-text
        >Are you sure you want to reset the badger counter?</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false"
          >Cancel</v-btn
        >
        <v-btn color="red darken-1" text @click="resetCounter()">Reset</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    resetCounter () {
      this.$store.commit('reset')
      this.dialog = false
    }
  }
}
</script>
