<template>
  <div class="addition-sentence">
    {{ c_additionSentence }}
  </div>
</template>

<script>
import reduce from "lodash/reduce";
import join from "lodash/join";
export default {
  name: "AdditionSentence",
  components: {},
  props: {
    values: { type: Array, default: [] }
  },
  computed: {
    c_additionSentence() {
      if (this.values.length > 1)
        return `${join(this.values, " + ")} = ${reduce(
          this.values,
          (sum, value) => {
            return sum + value;
          },
          0
        )}`;
    }
  }
};
</script>

<style scoped>
.addition-sentence {
  padding: 0 1em;
  font-size: 2em;
  font-weight: bold;
}
</style>
