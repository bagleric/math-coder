<template>
  <div class="post-activity">
    <AppPostActivity :moduleId="moduleId"></AppPostActivity>
  </div>
</template>

<script>
import AppPostActivity from "@/components/PostActivity.component.vue";

export default {
  name: "ViewPostActivity",
  props: {
    moduleId: { required: true, type: String }
  },
  data: function() {
    return {};
  },
  components: { AppPostActivity }
};
</script>

<style scoped>
.post-activity {
  height: 100%;
  overflow: auto;
  padding: 2em;
}
</style>
