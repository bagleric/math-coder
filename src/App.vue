<template>
  <v-app>
    <v-app-bar app color="white">
      <AppNavigation class="navigation"></AppNavigation>
    </v-app-bar>
    <v-main class="main">
      <transition name="slide" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/Navigation.component.vue";

export default {
  name: "App",
  components: {
    AppNavigation
  }
};
</script>

<style>
.main {
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
html,
body {
  margin: 0;
  height: 100vh;
  /* width: 100%; */
  /* overflow: hidden; */
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  /* transform: translateX(30%); */
}
</style>
