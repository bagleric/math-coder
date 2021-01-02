<template>
  <div class="app-navigation">
    <app-logo></app-logo>
    <span>|</span>
    <span>{{ c_location }}</span>

  </div>
</template>

<script>
import AppLogo from '@/components/Logo.component.vue'
const get = require('lodash/get')

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
  gap: 1em;
  align-items: center;
  grid-auto-flow: column;
}
</style>
