<template>
  <div class="parent-view-container">
    <div class="parent-view">
      <AppInfo />
      <v-btn
        color="primary"
        :to="{
          name: 'Hello'
        }"
      >
        Continue to second grade page
      </v-btn>
    </div>
  </div>
</template>

<script>
import AppInfo from "@/components/Info.component.vue";
export default {
  name: "ViewParent",
  components: { AppInfo },
  beforeCreate() {
    this.$store.commit("resetUser");
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.parent-view-container {
  overflow: auto;
  height: 100%;
}
.parent-view {
  display: grid;
  gap: 1em;
  margin: auto;
  padding: 2em;
  max-width: 40em;
}

.instructions {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1em;
  margin: 1em;
  align-items: center;
}

.instructions > :nth-child(odd) {
  align-self: start;
}

.coder-text {
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  font-size: larger;
}
</style>
