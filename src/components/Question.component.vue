<template>
  <!-- usage
<AppForm :inputs="" :results=""></AppForm>
  -->
  <div>
    <div v-if="c_isTesting">
      <div><strong>Standard:</strong> {{ question.standard }}</div>
      <div>Justification: {{ question.justification }}</div>
      <v-divider></v-divider>
    </div>
    <div v-if="question.forQuestion">
      {{ question.forQuestion }}
    </div>
    <div>
      <strong>{{ question.question }}</strong>
    </div>
    <div :style="c_containerStyle">
      <span
        :style="input.isInput ? c_inputStyle : c_textStyle"
        v-for="(input, index) in question.inputs"
        v-bind:key="index"
      >
        <input
          :ref="'__' + input.name"
          autocomplete="off"
          v-if="input.isInput"
          :name="input.name"
          v-model="input.value"
          v-on:focus="$event.target.select()"
          v-on:keyup="inputUpdated(index, input)"
        />
        <span v-else>{{ input.value }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppQuestion",
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {};
  },
  methods: {
    inputUpdated(index, input) {
      console.log(index, input);
      this.$emit("input-changed", {
        index,
        input
      });
    }
  },
  computed: {
    c_isTesting() {
      return this.$store.getters.isTesting;
    },
    c_containerStyle() {
      if (this.question.containerStyle) return this.question.containerStyle;
      return "";
    },
    c_inputStyle() {
      if (this.question.inputStyle) return this.question.inputStyle;
      return "";
    },
    c_textStyle() {
      if (this.question.textStyle) return this.question.textStyle;
      return "";
    }
  }
};
</script>

<style scoped>
input {
  border: 1px solid lightgrey;
  padding: 0.5em;
  width: 3em;
  text-align: center;
  margin: 1em;
}

input:hover {
  outline: 3px solid lightblue;
}
</style>
