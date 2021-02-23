<template>
  <v-app>
    <v-navigation-drawer
      :right="true"
      v-if="c_isTesting"
      v-model="drawer"
      absolute
      :temporary="true"
      width="400"
    >
      <AppTest></AppTest>
    </v-navigation-drawer>
    <v-app-bar app color="white" dense>
      <AppNavigation class="navigation"></AppNavigation>
      <v-app-bar-nav-icon
        v-if="c_isTesting"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main class="main">
      <transition name="slide" mode="out-in">
        <router-view :key="$route.path" />
      </transition>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/Navigation.component.vue";
import AppTest from "@/components/Test.component.vue";

export default {
  name: "App",
  components: {
    AppTest,
    AppNavigation
  },
  data: () => ({
    drawer: false,
    group: null
  }),
  computed: {
    c_isTesting() {
      return this.$store.getters.isTesting;
    }
  },

  watch: {
    group() {
      this.drawer = false;
    }
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
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
