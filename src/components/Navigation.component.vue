<template>
  <div class="app-navigation">
    <app-logo></app-logo>
    <!-- TODO: Uncomment as needed -->
    <!-- <v-btn :to="{ name: 'Activity' }">Activity</v-btn> -->
    {{ c_location }}
  </div>
</template>

<script>
import AppLogo from '@/components/Logo.component.vue'
const get = require('lodash/get')
// import { Component, Vue } from "vue-property-decorator";
// import {} from "@/components/AppLogo";
export default {
  name: 'AppNavigation',
  components: {
    AppLogo
  },
  computed: {
    c_location () {
      const routeName = get(this.$route, ['matched', 0, 'name'], '')
      const breadcrumb = get(this.$route, ['meta', 'breadcrumb'], routeName)
      return breadcrumb
    }
  }
}
</script>

<style scoped>
.app-navigation {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1em;
  align-items: center;
  grid-auto-flow: column;
}
</style>
