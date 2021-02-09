<template>
  <!-- usage
<Appprompt :title="" :message=""></Appprompt>
  -->
  <div class="prompt">
    <AppRenderHtml parentTag="span" :html="c_prompt"></AppRenderHtml>
  </div>
</template>

<script>
import AppRenderHtml from "@/components/RenderHtml.component.vue";

const sample = require("lodash/sample");
const isArray = require("lodash/isArray");
export default {
  name: "AppPrompts",
  components: { AppRenderHtml },
  props: {
    prompts: {
      validator: function(prompts) {
        return isArray(prompts);
      }
    },
    message: String
  },
  computed: {
    c_prompt() {
      if (this.prompts.length > 0) {
        return this.prompts[this.iter];
      }
      return "";
    }
  },
  data: () => ({
    iter: 0
  }),
  methods: {
    incrementIter() {
      this.iter++;
      if (this.prompts.length < this.iter + 1) {
        this.$emit("prompts-complete");
      }
    },
    decrementIter() {
      if (this.iter > 0) this.iter--;
    }
  }
};
</script>

<style scoped>
.prompt {
}
</style>
