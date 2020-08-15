<template>
  <v-footer :color="color">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} -
      <a href="http://github.com/juissi999">juissi999</a>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  props: ['color']
}
</script>
