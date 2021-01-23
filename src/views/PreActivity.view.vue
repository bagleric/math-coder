<template>
  <div class="pre-activity-view">
    <AppPreActivity :moduleId="moduleId"></AppPreActivity>
  </div>
</template>

<script>
// import FormulateInput from
import AppPreActivity from "@/components/PreActivity.component.vue";

export default {
  name: "PreActivity",
  data: function() {
    return {};
  },
  props: {
    moduleId: { required: true, type: String }
  },
  components: { AppPreActivity }
};
</script>

<style scoped>
.pre-activity-view {
  height: 100%;
  overflow: auto;
}
</style>
