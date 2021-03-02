<template>
  <div>
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-hover>
          <v-btn icon>
            <v-icon v-bind="attrs" v-on="on">mdi-information</v-icon>
          </v-btn>
        </v-hover>
      </template>
      <div class="dialog-container">
        <AppInfo />
        <div class="actions">
          <v-btn color="primary" fab @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import AppInfo from "@/components/Info.component.vue";
export default {
  name: "AppInfoDialog",
  components: {
    AppInfo
  },
  data() {
    return { dialog: false };
  }
};
</script>

<style scoped>
.dialog-container {
  background: white;
  position: relative;
}
.actions {
  position: absolute;
  bottom: 1em;
  right: 1em;
}
</style>
