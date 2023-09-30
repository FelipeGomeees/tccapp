<template>
  <v-app-bar app color="primary" :height="$mobile">
  </v-app-bar>
</template>

<script>
export default {
    name: 'CoreAppBar',

    computed: {
      $mobile() {
        return this.$vuetify.breakpoint.mobile ? '50px' : '30px'
      }
    }
}
</script>