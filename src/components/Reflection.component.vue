<template>
  <!-- usage
<AppReflection :title="" :message=""></AppReflection>
  -->
  <div class="reflection">
    <div class="message">
      <AppRenderHtml parentTag="span" :html="c_reflection"></AppRenderHtml>
    </div>
    <div class="controls">
      <v-btn
        class="previous white--text"
        text
        v-show="iter != 0"
        @click="decrementIter()"
      >
        <v-icon>mdi-chevron-left</v-icon>
        Previous
      </v-btn>
      <v-btn
        v-if="showNext"
        outlined
        class="next white--text"
        @click="incrementIter()"
      >
        <span>Next</span>
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import AppRenderHtml from "@/components/RenderHtml.component.vue";
import AppAudio from "@/components/Audio.component.vue";

const sample = require("lodash/sample");
const isArray = require("lodash/isArray");
export default {
  name: "AppReflection",
  components: { AppRenderHtml, AppAudio },
  props: {
    reflections: {
      default: function() {
        var selected = sample(["Well done!", "Good job!", "You did it!"]);
        return [selected];
      },
      validator: function(reflections) {
        return isArray(reflections);
      }
    },
    showNext: { type: Boolean, default: true }
  },
  computed: {
    c_reflection() {
      if (this.reflections.length > 0) {
        return this.reflections[this.iter];
      }
      return "Well done!";
    },
    c_successAudio() {
      var audios = require.context("@/assets/", false, /\.mp3$/);
      return audios("./well_done_bell.mp3") || "";
    }
  },
  data: () => ({
    iter: 0
  }),
  methods: {
    allowNext() {
      alert("Hey");
    },
    incrementIter() {
      this.iter++;
      if (this.reflections.length < this.iter + 1) {
        this.$emit("reflection-complete");
      }
    },
    decrementIter() {
      if (this.iter > 0) this.iter--;
    }
  }
};
</script>

<style scoped>
.reflection-title {
  font-weight: bold;
}

.message {
  padding: 1em;
  grid-area: message;
}

.message > span {
  gap: 0.25em;
}

.controls {
  display: grid;
  grid-area: controls;
  grid-auto-flow: column;
  justify-content: end;
  margin: 0 1em 1em;
  color: white;
}

.previous,
.next {
  color: white;
}

.reflection {
  display: grid;
  grid-template:
    "message" 1fr
    "controls" auto / auto;
  background: darkgreen;
  color: white;
}
</style>
