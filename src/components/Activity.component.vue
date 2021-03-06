<template>
  <div class="activity-view">
    <header class="prompt primary white--text">
      <span class="bold-text">
        Instructions:
        <span v-if="c_isTesting">
          <v-btn @click="submitCode"> NEXT </v-btn>
        </span>
      </span>
      <AppAudio
        ref="prompt-sound"
        :source="c_activity.promptAudio"
        playOnMounted
      />
      <AppRenderHtml class="prompt-rendered" :html="c_activity.prompt">
      </AppRenderHtml>
    </header>
    <div class="main-cont">
      <div class="app-blockly">
        <AppBlockly
          :key="resetCount"
          ref="activityBlockly"
          :options="c_activity.blockOptions"
          :blocks="c_activity.blocks"
          @blockly-event="logEvent"
        >
          <template v-slot:toolbox-blocks>
            <block
              v-for="theBlock in c_activity.blockSelection"
              :key="theBlock.type"
              :type="theBlock.type"
            ></block>
          </template>
          <template v-if="c_activity.startingBlocksXml" v-slot:canvas-blocks>
            <AppRenderHtml
              :html="c_activity.startingBlocksXml"
              :hasParentTag="false"
            />
          </template>
        </AppBlockly>
        <v-btn
          large
          rounded
          outlined
          color="primary"
          class="reset-button"
          v-on:click="restart()"
        >
          Start Over
        </v-btn>
        <span class="run-button">
          <v-btn
            v-if="c_isRunning"
            large
            rounded
            outlined
            class="red--text"
            color="white"
            v-on:click="resetExecution()"
          >
            <v-icon>mdi-octagon</v-icon>
            Stop
          </v-btn>
          <v-btn
            rounded
            large
            color="green"
            class="white--text"
            v-on:click="runCode()"
          >
            Run
          </v-btn>
        </span>
      </div>
      <div class="view" id="code">
        <MultiplicationLayout
          :columns="c_columns"
          :rows="c_numRows"
          :items="c_items"
        />
        <AppAudio
          v-if="c_codeIsValid"
          ref="prompt-sound"
          :source="c_activity.successAudio"
          playOnMounted
          iconClass="black--text"
          @played="allowNext"
        >
        </AppAudio>
        <MultiplicationSentence
          v-if="!c_isRunning"
          :values="c_multiplySentence"
        />
      </div>
      <div v-if="!c_isRunning" class="reflection">
        <AppReflection
          v-if="!isRunning && c_codeIsValid"
          @reflection-complete="submitCode"
          :reflections="c_activity.reflections"
          :showNext="showNext"
        ></AppReflection>
        <span
          v-else-if="c_madeAttemtps && blocksNotConnected"
          class="not-quite"
        >
          <AppAudio
            ref="hint-sound"
            :source="c_blocksNotConnectedHint.audio"
            playOnMounted
          >
            {{ c_blocksNotConnectedHint.hintHtml }}
          </AppAudio>
        </span>
        <span v-else-if="c_madeAttemtps" class="not-quite">
          <AppAudio
            ref="hint-sound"
            :source="c_keepTryingHint.audio"
            playOnMounted
          >
            {{ c_keepTryingMessage }}
          </AppAudio>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockly from "@/components/Blockly.component.vue";
import AppBrace from "@/components/Brace.component.vue";
import AppRenderHtml from "@/components/RenderHtml.component.vue";
import AdditionLayout from "@/components/AdditionLayout.component.vue";
import MultiplicationLayout from "@/components/MultiplicationLayout.component.vue";
import AdditionSentence from "@/components/AdditionSentence.component.vue";
import MultiplicationSentence from "@/components/MultiplicationSentence.component.vue";
import map from "lodash/map";
import AppReflection from "@/components/Reflection.component.vue";
import AppAudio from "@/components/Audio.component.vue";
import BlocklyJS from "blockly/javascript";
import "@/blocks/block1.js";
import get from "lodash/get";
import last from "lodash/last";
import has from "lodash/has";
import assign from "lodash/assign";
import isFunction from "lodash/isFunction";
import isEmpty from "lodash/isEmpty";
import isUndefined from "lodash/isUndefined";
import find from "lodash/find";
import {
  STORE_EVENT_URL,
  TIMESTAMP_FORMAT,
  FINISH_ACTIVITY_URL
} from "@/constants.js";
import { escape } from "html-escaper";
const JSInterpreter = require("@/plugins/JS-Interpreter/interpreter");
const timestamp = require("time-stamp");

export default {
  name: "AppActivity",
  components: {
    AdditionLayout,
    MultiplicationLayout,
    AdditionSentence,
    MultiplicationSentence,
    AppBlockly,
    AppRenderHtml,
    AppReflection,
    AppBrace,
    AppAudio
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
    showNext: false,
    code: "",
    attempts: false,
    numRows: 0,
    path: "",
    items: [],
    myInterpreter: null,
    execution: null,
    runner: null,
    rows: [],
    isRunning: false,
    resetCount: 0,
    blocksNotConnected: false,
    activityStats: {
      started_at: timestamp.utc(TIMESTAMP_FORMAT),
      ended_at: null,
      no_of_compiles: 0,
      completed: false,
      compilation_timestamps: [],
      screen_size: ""
    },
    demoWorkspace: null
  }),
  updated() {
    this.demoWorkspace = this.$refs.activityBlockly.workspace;
  },
  computed: {
    c_activity() {
      return this.activity;
    },
    c_isRunning() {
      return this.isRunning;
    },
    c_codeIsValid() {
      return this.c_activity.solution === this.path;
    },
    c_madeAttemtps() {
      return this.attempts > 0;
    },
    c_numRows() {
      return this.rows.length;
    },
    c_columns() {
      return get(this.rows, ["0", "length"], 0);
    },
    c_rows() {
      return this.rows;
    },
    c_items() {
      return this.items;
    },
    c_answerHints() {
      return get(this, ["c_activity", "hints"], []);
    },
    c_hintsRegex() {
      return map(this.c_answerHints, hint => {
        let regex = new RegExp(hint.regex);
        return { ...hint, regex };
      });
    },
    c_audios() {
      return require.context("@/assets/", false, /\.mp3$/);
    },
    c_blocksNotConnectedHint() {
      return {
        hintHtml: "Make sure you connect all the blocks.",
        audio: this.c_audios("./connectHint.mp3") || ""
      };
    },
    c_defaultHintAudio() {
      return this.c_audios("./keepTrying.mp3") || "";
    },
    c_keepTryingHint() {
      let found = find(this.c_hintsRegex, hint => {
        return hint.regex.test(this.path);
      });
      if (isUndefined(found)) {
        return {
          hintHtml: "It looks like we didn't quite make it. Keep trying.",
          audio: this.c_defaultHintAudio
        };
      }
      return found;
    },
    c_keepTryingAudio() {
      return this.c_keepTryingHint.audio;
    },
    c_keepTryingMessage() {
      return this.c_keepTryingHint.hintHtml;
    },
    c_isTesting() {
      return get(this.$store, ["getters", "isTesting"], false);
    },
    c_rowSizes() {
      return map(this.rows, row => {
        return row.length;
      });
    },
    c_multiplySentence() {
      return [this.c_numRows, this.c_columns];
    },
    c_showMultiplicationLayout() {
      return this.c_activity.isMultiplication;
    },
    c_showMultiplicationSentence() {
      return this.c_activity.isMultiplication && !this.c_isRunning;
    }
  },
  methods: {
    allowNext() {
      this.showNext = true;
    },
    restart() {
      this.resetCount++;
    },
    addItems(itemToAdd, timesToAdd) {
      if (isEmpty(this.rows)) {
        this.rows.push([]);
      }
      let theLast = last(this.rows);
      for (let i = 0; i < timesToAdd; i++) {
        this.items.push(itemToAdd);
        theLast.push(itemToAdd);
      }
    },
    addItem(itemToAdd) {
      this.items.push(itemToAdd);
      if (isEmpty(this.rows)) {
        this.rows.push([]);
      }
      let theLast = last(this.rows);
      theLast.push(itemToAdd);
    },
    addRow() {
      if (isEmpty(this.rows) || !isEmpty(last(this.rows))) {
        this.numRows++;
        this.rows.push([]);
      }
    },
    addToPath(toAdd) {
      this.path += toAdd;
    },
    initApi(interpreter, globalObject) {
      // Add an API function for add item.
      let addItems = this.addItems;
      var wrapper = function(item, times) {
        item = item ? item.toString() : "";
        times = times ? times : 0;
        return addItems(item, times);
      };
      interpreter.setProperty(
        globalObject,
        "addItems",
        interpreter.createNativeFunction(wrapper)
      );

      // Add an API function for add item.
      let addItem = this.addItem;
      var wrapper = function(item) {
        item = item ? item.toString() : "";
        return addItem(item);
      };
      interpreter.setProperty(
        globalObject,
        "addItem",
        interpreter.createNativeFunction(wrapper)
      );

      // Add an API function for repeat blocks.
      let addRow = this.addRow;
      var wrapper = function() {
        return addRow();
      };
      interpreter.setProperty(
        globalObject,
        "addRow",
        interpreter.createNativeFunction(wrapper)
      );

      // Add an API function for adding to path.
      let addToPath = this.addToPath;
      var wrapper = function(path) {
        path = path ? path.toString() : "";
        return addToPath(path);
      };
      interpreter.setProperty(
        globalObject,
        "addToPath",
        interpreter.createNativeFunction(wrapper)
      );

      // Add an API function for highlighting blocks.
      let highlightBlock = this.highlightBlock;
      var wrapper = function(id) {
        id = id ? id.toString() : "";
        return highlightBlock(id);
      };
      interpreter.setProperty(
        globalObject,
        "highlightBlock",
        interpreter.createNativeFunction(wrapper)
      );
    },
    highlightBlock(id) {
      this.demoWorkspace.highlightBlock(id);
    },
    resetExecution() {
      // reset the data
      this.items = [];
      this.rows = [];

      //reset the workspace
      this.demoWorkspace.highlightBlock(null);

      //reset the interpreter
      this.myInterpreter = null;
      this.isRunning = false;

      // clear out the timeout functions
      clearTimeout(this.runner);
      clearTimeout(this.execution);
    },
    generateCodeAndLoadIntoInterpreter() {
      // reset
      this.resetExecution();
      if (this.demoWorkspace) {
        this.code = BlocklyJS.workspaceToCode(this.demoWorkspace);
      }
    },
    runCode() {
      this.path = "";
      this.demoWorkspace = this.$refs.activityBlockly.workspace;

      this.attempts++;
      this.blocksNotConnected = false;
      if (this.demoWorkspace.getTopBlocks().length > 1) {
        this.blocksNotConnected = true;
        return;
      }
      this.activityStats.compilation_timestamps.push(
        timestamp.utc(TIMESTAMP_FORMAT)
      );

      // Exit is used to signal the end of a script.
      Blockly.JavaScript.addReservedWords("exit");

      // var latestCode = this.code;

      // Load the interpreter now, and upon future changes.
      let scope = this;
      this.demoWorkspace.addChangeListener(function(event) {
        if (!event.isUiEvent) {
          // Something changed. Parser needs to be reloaded.
          scope.generateCodeAndLoadIntoInterpreter();
        }
      });

      this.generateCodeAndLoadIntoInterpreter();
      if (!this.myInterpreter && this.code != "") {
        this.isRunning = true;
        this.execution = setTimeout(function() {
          // Begin execution
          scope.myInterpreter = new JSInterpreter.Interpreter(
            scope.code,
            scope.initApi
          );
          function nextStep() {
            if (scope.myInterpreter.step()) {
              scope.runner = setTimeout(
                nextStep,
                scope.$store.getters.executionWait
              );
            } else {
              scope.isRunning = false;
            }
          }

          nextStep();
        }, 0.25);
        return;
      }
    },
    submitCode() {
      // update to the latest
      assign(this.activityStats, {
        user_id: this.$store.getters.userId,
        activity_id: this.activity.id,
        module_id: this.moduleId,
        completed: 1,
        ended_at: timestamp.utc(TIMESTAMP_FORMAT),
        no_of_compiles: this.attempts,
        screen_size: this.getViewSize(),
        compilation_timestamps: JSON.stringify(
          this.activityStats.compilation_timestamps
        )
      });

      // console.log(this.activityStats);

      // if (!this.$store.getters.isTesting) {
      this.$http
        .post(FINISH_ACTIVITY_URL, this.activityStats)
        .then(result => {
          if (!result.data.success) {
            console.log("Failed to submitt event. Response:", result);
          } else {
            // console.log("finished submitted. Response:", result);
          }
        })
        .catch(error => {
          console.log({ error });
        });
      // }

      this.demoWorkspace.clear();
      this.$emit("activity-complete", this.code);
    },
    logEvent(blocklyEvent) {
      if (blocklyEvent.isUiEvent) {
        return; // Don't mirror UI events.
      }
      if (!isFunction(blocklyEvent.toJson)) return;
      let jsonEvent = blocklyEvent.toJson();

      if (has(jsonEvent, "xml")) {
        jsonEvent.xml = escape(jsonEvent.xml);
      }

      if (has(jsonEvent, "oldXml")) {
        jsonEvent.oldXml = escape(jsonEvent.oldXml);
      }

      // if (!this.$store.getters.isTesting) {
      let toSend = {
        user_id: this.$store.getters.userId,
        activity_id: this.c_activity.id,
        module_id: this.moduleId,
        blockly_event: JSON.stringify(jsonEvent),
        created_at: timestamp.utc(TIMESTAMP_FORMAT)
      };
      this.$http.post(STORE_EVENT_URL, toSend).then(result => {
        if (!result.data.success) {
          console.log("Failed to submitt event. Response:", result);
        } else {
          // console.log("Event submitted. Response:", result);
        }
      });
      // }
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
  display: flex;
  align-content: center;
  padding: 0.5em;
  transform: opacity 5s;
}

.prompt-rendered {
  padding-left: 1em;
  align-items: center;
  gap: 0.5em;
}

.main-cont {
  height: 100%;
  grid-template:
    "appBlockly view      " 1fr
    "appBlockly reflection" auto/ 2fr 1fr;
  display: grid;
  overflow: hidden;
}

.app-blockly {
  border: solid 1px grey;
  grid-area: appBlockly;
  display: grid;
  grid-template-rows: 1fr auto;
  position: relative;
}

.run-button {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.reset-button {
  position: absolute;
  left: 10px;
  bottom: 10px;
}

.view {
  border: solid 1px grey;
  grid-area: view;
  padding: 1em;
  overflow: auto;
  background: #f3f3f3;
}

.not-quite {
  display: grid;
  background: grey;
  color: white;
  padding: 1em;
}
</style>
