<template>
  <v-app>
    <v-app-bar app color="white">
      <AppNavigation class="navigation"></AppNavigation>
    </v-app-bar>
    <v-main>
      <router-view :key="$route.path" />
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/Navigation.component.vue'

export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh
}
html,
body {
  margin: 0;
  height: 100vh;
  /* width: 100%; */
  /* overflow: hidden; */
}

</style>
