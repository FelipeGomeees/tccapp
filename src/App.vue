<template>
  <v-app>
    <core-navigator class="d-print-none"
    v-if="$route.fullPath !='/' && $route.fullPath !='/cadastro' && $route.fullPath !='/preambiente'">
    </core-navigator>
    <core-app-bar class="d-print-none"
    v-if="$route.fullPath !='/' && $route.fullPath !='/cadastro' && $route.fullPath !='/preambiente'">
    </core-app-bar>
    <v-main class="imagem">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import CoreAppBar from './components/appbar/CoreAppBar.vue';
import CoreNavigator from './components/navigator/CoreNavigator.vue';

export default {
  name: 'App',
  components: {
    CoreNavigator,
    CoreAppBar,
  },

  data: () => ({
    
  }),
};
</script>

<style>
.imagem {
  background-image: linear-gradient(#fff, #e5e5e5);
}

/* @media print {
  @page { margin: 0; }
  body { margin: 1.6cm; }
} */


</style>
