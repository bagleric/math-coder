<template>
  <div class="nav-bar">
    <div class="app-navigation">
      <app-logo></app-logo>
      <span>|</span>
      <span>{{ c_location }}</span>
    </div>
    <v-chip v-if="c_userName" color="primary">{{ c_userName }}</v-chip>
  </div>
</template>

<script>
import AppLogo from "@/components/Logo.component.vue";
const get = require("lodash/get");

export default {
  name: "AppNavigation",
  components: {
    AppLogo
  },
  computed: {
    c_userName() {
      return this.$store.getters.firstName;
    },
    c_location() {
      const routeName = get(this.$route, ["matched", 0, "name"], "");
      const breadcrumb = get(this.$route, ["meta", "breadcrumb"], routeName);
      return breadcrumb;
    }
  }
};
</script>

<style scoped>
.app-navigation {
  display: grid;
  gap: 1em;
  align-items: center;
  grid-auto-flow: column;
}

.nav-bar {
  display: grid;
  width: 100%;
  justify-content: space-between;
  grid-auto-flow: column;
}
</style>
