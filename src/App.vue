<template>
  <v-app>
    <core-navigator
    v-if="$route.fullPath !='/' && $route.fullPath !='/cadastro' && $route.fullPath !='/preambiente'">
    </core-navigator>
    <core-app-bar
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
    //
  }),
};
</script>

<style>
.imagem {
  background-image: linear-gradient(#fff, #e5e5e5);
}

</style>
