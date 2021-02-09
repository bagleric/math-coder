<template>
  <div class="multiplication-sentence">
    <span class="sentence" v-if="showSentence">
      {{ c_multiplicationSentence }}
    </span>
  </div>
</template>

<script>
import reduce from "lodash/reduce";
import join from "lodash/join";
export default {
  name: "MultiplicationSentence",
  components: {},
  props: {
    values: { type: Array, default: [] }
  },
  computed: {
    c_product() {
      return reduce(
        this.values,
        (sum, value) => {
          return sum * value;
        },
        1
      );
    },
    c_multiplicationSentence() {
      return `${join(this.values, " x ")} = ${this.c_product}`;
    },
    showSentence() {
      return this.c_product > 0;
    }
  }
};
</script>

<style scoped>
.multiplication-sentence {
  padding: 1em 0;
  font-size: 2em;
  font-weight: bold;
  display: grid;
  grid-template: ". sentence " auto / 80px auto;
  gap: 0.5em;
  color: black;
}

.sentence {
  grid-area: sentence;
}
</style>
