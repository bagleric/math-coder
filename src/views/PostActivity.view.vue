<template>
  <div class="post-activity">
    <AppTestActivity
      :moduleId="moduleId"
      test="post"
      @test-complete="showDone"
    ></AppTestActivity>
  </div>
</template>

<script>
import AppTestActivity from "@/components/TestActivity.component.vue";

export default {
  name: "ViewPostActivity",
  props: {
    moduleId: { required: true, type: String }
  },
  data: function() {
    return {};
  },
  components: { AppTestActivity },
  methods: {
    showDone() {
      this.$router.push({
        name: "Goodbye"
      });
    }
  }
};
</script>

<style scoped>
.post-activity {
  height: 100%;
  overflow: auto;
  padding: 2em;
}
</style>
