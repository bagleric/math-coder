<template>
  <div class="view-activity">
    <AppActivity
      v-if="!c_activitiesComplete"
      :moduleId="moduleId"
      :activity="c_activity"
      @activity-complete="completeActivity"
    ></AppActivity>
    <div class="complete-view" v-else>
      <AppAudio :source="c_wellDoneAudio" :key="c_wellDoneAudio" playOnMounted>
      </AppAudio>
      <h2>Well done! Continue to the last section.</h2>
      <v-btn
        outlined
        color="primary"
        :to="{ name: 'PostActivity', params: { moduleId } }"
        >Continue</v-btn
      >
    </div>
  </div>
</template>

<script>
import AppActivity from "@/components/Activity.component.vue";
import AppAudio from "@/components/Audio.component.vue";

export default {
  name: "ViewActivity",
  components: { AppActivity, AppAudio },
  props: {
    moduleId: { type: String, required: true },
    activityNum: { type: Number, required: false }
  },
  data: () => ({
    activity: {},
    module: {},
    activitiesComplete: false
  }),
  computed: {
    c_audios() {
      return require.context("@/assets/", false, /\.mp3$/);
    },
    c_wellDoneAudio() {
      return this.c_audios("./continue-to-last.mp3") || "";
    },
    c_module() {
      return this.$store.getters.getModule(this.moduleId);
    },
    c_activitiesComplete() {
      return this.activitiesComplete;
    },
    c_activity() {
      if (
        this.activityNum >= 0 &&
        this.c_module.activities.length > this.activityNum
      ) {
        return this.c_module.activities[this.activityNum];
      }
      // return {};
      throw Error(
        `Error, activity number [ ${this.activityNum} ] is not valid. Number of activities [ ${this.c_module.activities.length} ]`
      );
    }
  },
  beforeCreate() {
    this.module = this.$store.getters.getModule(this.$route.params.moduleId);
    if (this.module.activities.length <= this.$route.params.activityNum) {
      this.activitiesComplete = true;
    }
  },
  methods: {
    completeActivity(code) {
      if (this.activityNum + 1 < this.c_module.activities.length) {
        this.$router.push({
          name: "Activity",
          params: {
            moduleId: this.moduleId,
            activityNum: this.activityNum + 1
          }
        });
      } else {
        this.activitiesComplete = true;
      }
    }
  }
};
</script>

<style scoped>
.view-activity {
  height: 100%;
}
.complete-view {
  display: grid;
  place-items: center;
  gap: 1em;
  padding: 1em;
}
</style>
