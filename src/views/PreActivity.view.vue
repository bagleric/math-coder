<template>
  <div class="pre-activity-view">
    <AppTestActivity
      :moduleId="moduleId"
      test="pre"
      @test-complete="goToActivity"
    ></AppTestActivity>
  </div>
</template>

<script>
// import FormulateInput from
import AppTestActivity from "@/components/TestActivity.component.vue";

export default {
  name: "PreActivity",
  data: function() {
    return {};
  },
  props: {
    moduleId: { required: true, type: String }
  },
  components: { AppTestActivity },
  methods: {
    goToActivity() {
      this.$router.push({
        name: "Activity",
        params: {
          moduleId: this.moduleId,
          activityNum: 0
        }
      });
    }
  }
};
</script>

<style scoped>
.pre-activity-view {
  height: 100%;
  overflow: auto;
}
</style>
