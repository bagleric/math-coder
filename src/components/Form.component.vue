<template>
  <!-- usage
<AppForm :inputs="" :results=""></AppForm>
  -->
  <div class="app-form">
    <div class="form-container" v-if="!stepper">
      <FormulateForm
        @submit="submitHandler"
        @input="formUpdated"
        :schema="c_inputs"
        v-model="formValues"
      />
      <span class="controls">
        <v-btn outlined color="primary" @click="submitForm">Submit</v-btn>
      </span>
    </div>
    <div v-else class="form-container">
      <FormulateForm
        v-model="formValues"
        v-for="item in c_inputsAsArrays"
        :key="item[0].name"
        v-bind="item"
        :schema="item"
        v-show="c_inputsAsArrays[iter - 1][0].name == item[0].name"
      >
      </FormulateForm>
      <span class="controls">
        <v-btn text color="primary" v-show="iter > 1" @click="decrementIter"
          >Previous</v-btn
        >
        <v-btn
          outlined
          color="primary"
          v-if="iter < c_inputs.length"
          @click="incrementIter"
          >Skip</v-btn
        >
        <v-btn
          outlined
          color="primary"
          v-if="iter < c_inputs.length"
          @click="incrementIter"
          >Next</v-btn
        >
        <v-btn outlined color="primary" v-else @click="submitForm"
          >Submit</v-btn
        >
      </span>
    </div>
  </div>
</template>

<script>
const shuffle = require("lodash/shuffle");

export default {
  name: "AppForm",
  props: {
    inputs: Array, // array of form inputs
    results: Object, // object with the results
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
      iter: 1
    };
  },
  methods: {
    formUpdated(newValues) {
      this.$emit("form-updated", newValues);
    },
    incrementIter() {
      this.iter++;
    },
    decrementIter() {
      if (this.iter > 1) this.iter--;
    },
    submitHandler(data) {
      this.$emit("form-complete", data);
    },
    submitForm() {
      this.$emit("form-complete", this.formValues);
    }
  },
  computed: {
    c_inputs() {
      if (this.shuffle) return shuffle(this.inputs);
      return this.inputs;
    },
    c_inputsAsArrays() {
      let newInputs = [];
      for (var i = 0; i < this.c_inputs.length; i++) {
        newInputs.push([this.c_inputs[i]]);
      }
      return newInputs;
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
}
</style>
