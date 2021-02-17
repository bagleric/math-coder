<template>
  <!-- usage
<AppForm :inputs="" :results=""></AppForm>
  -->
  <div v-if="!isComplete" class="app-form">
    <div class="form-container" v-if="!stepper">
      <span v-for="(item, index) in test" v-bind:key="index">
        <AppQuestion class="question" :question="item" />
        <v-divider />
      </span>
      <span class="controls">
        <v-btn outlined color="primary" @click="submitForm">Next</v-btn>
      </span>
    </div>
    <div v-else class="form-container">
      <AppQuestion class="question" v-if="c_question" :question="c_question" />
      <span class="controls">
        <v-btn
          text
          color="primary"
          v-show="!c_isFirstIter"
          @click="decrementIter"
          >Previous</v-btn
        >
        <v-btn
          outlined
          color="primary"
          @click="c_isLastIter ? submitForm() : answerQuestion()"
        >
          Skip
        </v-btn>
        <v-btn
          color="primary"
          @click="c_isLastIter ? submitForm() : answerQuestion()"
        >
          Next
        </v-btn>
      </span>
    </div>
  </div>
</template>

<script>
const shuffle = require("lodash/shuffle");
import AppQuestion from "@/components/Question.component.vue";
import timestamp from "time-stamp";
import { TIMESTAMP_FORMAT } from "@/constants.js";
import filter from "lodash/filter";

export default {
  name: "AppForm",
  components: { AppQuestion },
  props: {
    test: Array, // array of form inputs
    stepper: {
      type: Boolean,
      default: false
    },
    shuffle: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      formValues: {},
      iter: 0,
      startTime: timestamp.utc(TIMESTAMP_FORMAT),
      isComplete: false
    };
  },
  methods: {
    formUpdated(newValues) {
      this.$emit("form-updated", newValues);
    },
    incrementIter() {
      this.startTime = timestamp.utc(TIMESTAMP_FORMAT);
      this.iter++;
    },
    decrementIter() {
      if (this.iter > 1) this.iter--;
    },
    submitHandler(data) {
      this.$emit("form-complete", data);
    },
    answerQuestion() {
      this.submitQuestion();
      this.incrementIter();
    },
    submitQuestion() {
      this.$emit("question-answered", {
        inputs: filter(this.c_question.inputs, "isInput"),
        stats: {
          startTime: this.startTime,
          endTime: timestamp.utc(TIMESTAMP_FORMAT)
        }
      });
    },
    submitForm() {
      this.isComplete = true;
      this.answerQuestion();
      this.$emit("form-complete", this.formValues);
    }
  },
  computed: {
    c_inputs() {
      if (this.shuffle) return shuffle(this.test);
      return this.test;
    },
    c_inputsAsArrays() {
      let newInputs = [];
      for (var i = 0; i < this.c_inputs.length; i++) {
        newInputs.push([this.c_inputs[i]]);
      }
      return newInputs;
    },
    c_isLastIter() {
      return this.iter >= this.c_inputs.length - 1;
    },
    c_isFirstIter() {
      return this.iter === 0;
    },
    c_question() {
      return this.test[this.iter];
    }
  }
};
</script>

<style scoped>
.form-container {
  height: 100%;
}
.app-form {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
.controls {
  justify-content: flex-end;
  display: grid;
  grid-auto-flow: column;
  gap: 1em;
  padding: 1em;
}
.question {
  padding: 1em;
}
</style>
