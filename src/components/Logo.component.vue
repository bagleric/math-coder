<template>
  <div @click="update()" class="app-logo">
    <span class="math-text primary--text">MATH-</span>
    <span class="code-text primary--text">coder</span>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "AppLogo",
  data: () => ({
    count: 0
  }),
  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      anime({
        targets: ".app-logo span",
        rotate: "2turn",
        duration: 200
      });
    });
  },
  methods: {
    update() {
      this.count++;
      if (this.count === 3) {
        this.count = 0;
        this.$store.commit("toggleIsTesting");
      }
    }
  }
};
</script>

<style scoped>
.app-logo .math-text {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.25em;
  font-weight: bolder;
}

.app-logo .code-text {
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  font-size: 1.5em;
}
</style>
