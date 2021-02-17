<template>
  <!-- usage
<AppForm :inputs="" :results=""></AppForm>
  -->
  <div>
    <div v-if="question.forQuestion">{{ question.forQuestion }}</div>
    <div>{{ question.question }}</div>
    <div :style="c_style">
      <span v-for="(input, index) in question.inputs" v-bind:key="index">
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
    },
    gridTemplateRows: {
      type: String,
      required: false
    },
    gridTemplateColumns: {
      type: String,
      required: false
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
    c_style() {
      if (this.inputGridTemplate) {
        return `
        display: grid;
        grid-template-rows: ${this.gridTemplateRows};
        grid-template-columns: ${this.gridTemplateColumns};
        `;
      }
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
