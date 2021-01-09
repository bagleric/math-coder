<template>
  <div class="activity-view">
    <header class="prompt primary white--text">
      <AppRenderHtml :html="c_activity.prompt"></AppRenderHtml>
    </header>
    <div class="main-cont">
      <div class="app-blockly">
        <AppBlockly ref="activityBlockly" :options="c_activity.blockOptions">
          <block
            v-for="theBlock in c_activity.blocks"
            :key="theBlock.type"
            :type="theBlock.type"
          ></block>
        </AppBlockly>
        <v-btn
          tile
          large
          color="green"
          class="white--text"
          v-on:click="showCode()"
          >Run</v-btn
        >
      </div>
      <div class="view">
        <div class="view-in" id="code">
          <AppRenderHtml class="rendered-code" :html="code"></AppRenderHtml>
        </div>
      </div>
      <div class="reflection">
        <AppReflection
          v-if="c_codeIsValid"
          @reflection-complete="submitCode"
          :reflections="c_activity.reflections"
        ></AppReflection>
        <span v-else-if="c_madeAttemtps" class="not-quite">
          It looks like we didn't quite make it. Keep trying.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockly from "@/components/Blockly.component.vue";
import AppRenderHtml from "@/components/RenderHtml.component.vue";
import AppReflection from "@/components/Reflection.component.vue";
import BlocklyJS from "blockly/javascript";
import "@/blocks/block1.js";
export default {
  name: "AppActivity",
  components: {
    AppBlockly,
    AppRenderHtml,
    AppReflection
  },
  props: {
    moduleId: { type: String, required: true },
    activity: {
      type: Object,
      // TODO add validation
      required: true
    }
  },
  data: () => ({
    code: "",
    attempts: false
  }),
  computed: {
    c_activity() {
      return this.activity;
    },
    c_codeIsValid() {
      return this.c_activity.solution === this.code;
    },
    c_madeAttemtps() {
      return this.attempts > 0;
    }
  },
  methods: {
    showCode() {
      this.attempts++;
      this.code = BlocklyJS.workspaceToCode(
        this.$refs["activityBlockly"].workspace
      );
      console.log(this.code);
    },
    submitCode() {
      // TODO submit code
      console.log("TODO: submit code to database");
      this.$emit("activity-complete", this.code);
    }
  }
};
</script>

<style scoped>
.activity-view {
  height: 100%;
  display: grid;
  grid-template:
    "prompt" auto
    "main  " 2fr/ 1fr;
}

.prompt {
  grid-area: prompt;
  border: solid 1px grey;
  display: grid;
  align-content: center;
  padding: 1em;
  font-weight: bolder;
  transform: opacity 5s;
  /* font-size: larger; */
}

.main-cont {
  height: 100%;
  grid-template:
    "appBlockly view      " 1fr
    "appBlockly reflection" auto/ 1fr 1fr;
  display: grid;
  overflow: hidden;
}

.rendered-code {
  height: inherit;
  overflow: auto;
}
.app-blockly {
  border: solid 1px grey;
  grid-area: appBlockly;
  display: grid;
  grid-template-rows: 1fr auto;
}

.view {
  border: solid 1px grey;
  grid-area: view;
  padding: 1em;
  height: 100%;
  overflow: hidden;
}

.view-header {
  display: grid;
}

.not-quite {
  display: grid;
  background: grey;
  color: white;
  padding: 1em;
}
</style>
