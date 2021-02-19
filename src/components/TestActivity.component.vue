<template>
  <div class="test">
    <AppForm
      :test="c_test"
      :stepper="!c_viewAllQuestions"
      :shuffle="!c_viewAllQuestions"
      @question-answered="answerQuestion"
      @form-complete="completeForm"
    ></AppForm>
  </div>
</template>

<script>
import AppForm from "@/components/Form.component.vue";
import AppQuestion from "@/components/Question.component.vue";
import { STORE_ANSWER_URL } from "@/constants.js";
import each from "lodash/each";
import filter from "lodash/filter";

export default {
  name: "AppTestActivity",
  components: { AppForm, AppQuestion },
  props: {
    moduleId: { required: true, type: String },
    test: { required: true, type: String }
  },
  data: () => ({}),
  computed: {
    theModule() {
      return (this.module = this.$store.getters.getModule(
        this.$route.params.moduleId
      ));
    },
    c_isPreTest() {
      return this.test === "pre";
    },
    c_isPostTest() {
      return this.test === "post";
    },
    c_test() {
      if (this.c_isPreTest) {
        return filter(this.theModule.test, { testType: "pre" });
      } else if (this.c_isPostTest) {
        return filter(this.theModule.test, { testType: "post" });
      }
      throw Error("No test matches. Value must be 'pre' or 'post'");
    },
    c_viewAllQuestions() {
      return this.$store.getters.viewAllQuestions;
    }
  },
  methods: {
    updateAnswer(update) {
      this.c_test[0].inputs[update.index] = update.input;
    },
    completeForm() {
      this.$emit("test-complete");
    },
    submitQuestion(userId, question, stats) {
      console.log("submitting question", question, stats);
      return this.$http
        .post(STORE_ANSWER_URL, {
          user_id: userId,
          question_id: question.name,
          value: question.value,
          start_time: stats.startTime,
          end_time: stats.endTime
        })
        .then(data => {
          console.log("Pre Test submitted. Response:", data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    answerQuestion(data) {
      console.log({ data });
      const userId = this.$store.getters.userId;
      if (!this.$store.getters.isTesting) {
        each(data.inputs, input => {
          this.submitQuestion(
            userId,
            { name: input.name, value: input.value },
            data.stats
          );
        });
      }
    }
  }
};
</script>

<style scoped>
.test {
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
