<template>
  <div class="activity-view">
    <header class="prompt primary white--text">
      <span class="bold-text">Instructions:</span>
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
          :style="c_extraResetStyle"
          rounded
          outlined
          color="primary"
          class="reset-button"
          v-on:click="restart()"
        >
          Start Over
        </v-btn>
        <v-btn
          rounded
          large
          v-if="!c_isRunning"
          color="green"
          class="run-button white--text"
          v-on:click="runCode()"
        >
          Run
        </v-btn>
        <v-btn
          v-else
          rounded
          large
          color="red"
          class="run-button white--text"
          v-on:click="resetExecution()"
        >
          Stop
        </v-btn>
      </div>
      <div class="view" id="code">
        <RowColumnLayout
          :columns="c_columns"
          :rows="c_numRows"
          :items="c_items"
        />
      </div>
      <div v-if="!c_isRunning" class="reflection">
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
import AppBrace from "@/components/Brace.component.vue";
import AppRenderHtml from "@/components/RenderHtml.component.vue";
import RowColumnLayout from "@/components/RowColumnLayout.component.vue";
import AppReflection from "@/components/Reflection.component.vue";
import BlocklyJS from "blockly/javascript";
import "@/blocks/block1.js";
import get from "lodash/get";
import last from "lodash/last";
import has from "lodash/has";
import assign from "lodash/assign";
import isFunction from "lodash/isFunction";
import isEmpty from "lodash/isEmpty";
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
    RowColumnLayout,
    AppBlockly,
    AppRenderHtml,
    AppReflection,
    AppBrace
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
    attempts: false,
    numCircles: 0,
    numRows: 0,
    path: "",
    items: [],
    myInterpreter: null,
    execution: null,
    runner: null,
    rows: [],
    isRunning: false,
    resetCount: 0,
    activityStats: {
      started_at: timestamp.utc(TIMESTAMP_FORMAT),
      ended_at: null,
      no_of_compiles: 0,
      completed: false,
      compilation_timestamps: [],
      screen_size: ""
    }
  }),
  computed: {
    c_extraResetStyle() {
      return get(this.c_activity, ["blockOptions", "showToolbox"], true)
        ? "left: 175px;"
        : "";
    },
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
    c_items() {
      return this.items;
    },
    demoWorkspace() {
      return get(this, ["$refs", "activityBlockly", "workspace"]);
    }
  },
  methods: {
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
      this.numCircles = 0;
      this.path = "";
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
      this.code = BlocklyJS.workspaceToCode(
        this.$refs["activityBlockly"].workspace
      );
    },
    runCode() {
      console.log(this.getViewSize());
      this.activityStats.compilation_timestamps.push(
        timestamp.utc(TIMESTAMP_FORMAT)
      );
      this.attempts++;
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
        completed: true,
        ended_at: timestamp.utc(TIMESTAMP_FORMAT),
        no_of_compiles: this.attempts,
        screen_size: this.getViewSize()
      });

      if (!this.$store.getters.isTesting) {
        this.$http
          .post(FINISH_ACTIVITY_URL, this.activityStats)
          .then(result => {
            if (!result.data.success) {
              console.log("Failed to submitt event. Response:", result);
            } else {
              // console.log("Event submitted. Response:", result);
            }
          });
      }

      // TODO submit code
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

      if (!this.$store.getters.isTesting) {
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
      }
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
    "appBlockly reflection" auto/ 1fr 1fr;
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
  top: 10px;
}

.reset-button {
  position: absolute;
  left: 10px;
  top: 10px;
}

.view {
  border: solid 1px grey;
  grid-area: view;
  padding: 1em;
  overflow: hidden;
}

.not-quite {
  display: grid;
  background: grey;
  color: white;
  padding: 1em;
}
</style>
