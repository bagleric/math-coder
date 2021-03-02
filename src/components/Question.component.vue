<template>
  <!-- usage
<AppForm :inputs="" :results=""></AppForm>
  -->
  <div>
    <div class="question-info" v-if="c_isTesting">
      <div><strong>Standard:</strong> {{ question.standard }}</div>
      <div>Justification: {{ question.justification }}</div>
      <v-divider></v-divider>
    </div>
    <div class="question-container">
      <AppAudio
        v-if="question.questionAudio"
        ref="prompt-sound"
        :source="question.questionAudio"
        playOnMounted
        iconClass="black--text"
      ></AppAudio>
      <div class="question">
        <div class="question-text" v-if="question.forQuestion">
          {{ question.forQuestion }}
        </div>
        <div class="question-text">
          {{ question.question }}
        </div>
      </div>
      <div class="question-input" :style="c_containerStyle">
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
          <span v-else>
            <AppRenderHtml :html="input.value"> </AppRenderHtml
          ></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import AppRenderHtml from "@/components/RenderHtml.component.vue";
import AppAudio from "@/components/Audio.component.vue";
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
  },
  updated() {
    console.log("Updated question", this.question);
  },
  components: {
    AppRenderHtml,
    AppAudio
  }
};
</script>

<style scoped>
.question-container {
  display: grid;
  grid-template:
    "sound  question" auto
    ". inputs" auto / min-content auto;
  grid-gap: 1em;
}

.question-input {
  grid-area: inputs;
}

.question-info {
  grid-area: info;
}

.forquestion {
  grid-area: forquestion;
}

.question {
  grid-area: question;
}

input {
  border: 1px solid lightgrey;
  padding: 0.25em;
  width: 3em;
  text-align: center;
  margin: 1em;
}

input:hover {
  outline: 3px solid lightblue;
}

.question-text {
  font-size: larger;
}
</style>
