<template>
  <v-app-bar app color="primary" :height="$mobile">
  </v-app-bar>
</template>

<script>
import { SetToken } from '@/utils/api-config';

export default {
    name: 'CoreAppBar',

    computed: {
      $mobile() {
        return this.$vuetify.breakpoint.mobile ? '50px' : '30px'
      }
    },

    created() {
      const token = JSON.parse(sessionStorage.getItem('token'));
      SetToken(token);
    },
}
</script>