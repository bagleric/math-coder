<template>
  <div class="pre-activity">
    <div class="instruction-container" v-if="showInstructions">
      <h1 class="title">Pre-test instructions</h1>
      <AppTestInstructions></AppTestInstructions>
      <v-btn outlined color="primary" @click="completeInstructions()"
        >Start</v-btn
      >
    </div>
    <AppForm
      v-else
      :inputs="theModule.preModule.inputs"
      :results="theModule.preModule.results"
      :stepper="true"
      :shuffle="true"
      @form-complete="formComplete"
    ></AppForm>
  </div>
</template>

<script>
import AppForm from "@/components/Form.component.vue";
import AppTestInstructions from "@/components/TestInstructions.component.vue";
import { STORE_ANSWER_URL } from "@/constants.js";
import each from "lodash/each";

export default {
  name: "PreActivity",
  components: { AppForm, AppTestInstructions },
  props: {
    moduleId: { required: true, type: String }
  },
  data: () => ({
    showInstructions: true
  }),
  computed: {
    theModule() {
      return (this.module = this.$store.getters.getModule(
        this.$route.params.moduleId
      ));
    }
  },
  methods: {
    answerQuestion(userId, questionId, answer) {
      this.$http
        .post(STORE_ANSWER_URL, {
          user_id: userId,
          question_id: questionId,
          value: answer
        })
        .then(data => {
          // console.log(data);
        });
    },
    formComplete(data) {
      console.log({ data });
      const userId = this.$store.getters.userId;
      if (!this.$store.getters.isTesting) {
        each(data, (answer, questionId) => {
          this.answerQuestion(userId, questionId, answer);
        });
      }
      this.$router.push({
        name: "Activity",
        params: {
          moduleId: this.moduleId,
          activityNum: 0
        }
      });
    },
    completeInstructions() {
      this.showInstructions = false;
    }
  }
};
</script>

<style scoped>
.pre-activity {
  height: 100%;
  padding: 2em;
  max-width: 40em;
  margin: 0 auto;
}

.instruction-container {
  display: grid;
  justify-items: center;
}
</style>
