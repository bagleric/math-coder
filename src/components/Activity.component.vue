<template>
  <div class="activity-view">
    <header class="prompt primary white--text">
      <span>Instructions:</span>
      <AppRenderHtml
        class="prompt-rendered"
        :html="c_activity.prompt"
      ></AppRenderHtml>
    </header>
    <div class="main-cont">
      <div class="app-blockly">
        <AppBlockly
          ref="activityBlockly"
          :options="c_activity.blockOptions"
          :blocks="c_activity.blocks"
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
          ref="runButton"
          rounded
          large
          color="green"
          class="run-button white--text"
          v-on:click="showCode()"
          >Run</v-btn
        >
      </div>
      <div class="view" id="code">
        <div class="items">
          <div class="row" v-for="(row, rowIndex) in c_rows" :key="rowIndex">
            <AppRenderHtml
              v-for="(item, itemIndex) in row"
              :key="itemIndex"
              :html="item"
              :hasParentTag="false"
            />
          </div>
        </div>
        <span class="num-columns">
          <!-- <span>
            <span>{{ c_columns }}</span>
            <span>groups of</span>
            <span>{{ c_numRows }}</span>
            <span>items = </span>
            <span>{{ c_numItems }}</span>
            <span> total items</span>
          </span> -->
          <AppBrace type="top">
            <template v-slot:outside>
              <span class="label-group">
                <span class="count">{{ c_columns }}</span>
                <span class="count-label">Columns</span>
              </span>
            </template>
          </AppBrace>
        </span>
        <span class="num-items">
          <span class="equal">=</span>
          <span class="label-group">
            <span class="count">{{ c_numItems }}</span>
            <span class="count-label">Total Items</span>
          </span>
        </span>
        <span class="num-rows">
          <AppBrace type="right">
            <template v-slot:outside>
              <span class="label-group">
                <span class="count">{{ c_numRows }}</span>
                <span class="count-label">Rows</span>
              </span>
            </template>
          </AppBrace>
        </span>
      </div>
      <div v-if="c_codeComplete" class="reflection">
        <AppReflection
          v-if="c_codeIsValid"
          @reflection-complete="submitCode"
          :reflections="c_activity.reflections"
        ></AppReflection>
        <span v-else-if="c_madeAttemtps" class="not-quite">
          It looks like we didn't quite make it. Keep trying. {{ numCircles }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import AppBlockly from "@/components/Blockly.component.vue";
import AppBrace from "@/components/Brace.component.vue";
import AppRenderHtml from "@/components/RenderHtml.component.vue";
import AppReflection from "@/components/Reflection.component.vue";
import BlocklyJS from "blockly/javascript";
import "@/blocks/block1.js";
import max from "lodash/max";
import get from "lodash/get";
import last from "lodash/last";
import isEmpty from "lodash/isEmpty";
const JSInterpreter = require("@/plugins/JS-Interpreter/interpreter");

export default {
  name: "AppActivity",
  components: {
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
    highlightPause: false,
    myInterpreter: null,
    runner: null,
    rows: [],
    codeComplete: false
  }),
  computed: {
    c_activity() {
      return this.activity;
    },
    c_codeComplete() {
      return this.codeComplete;
    },
    c_codeIsValid() {
      console.log(this.path);
      return this.c_activity.solution === this.path;
    },
    c_madeAttemtps() {
      return this.attempts > 0;
    },
    c_rows() {
      return this.rows;
    },
    c_numRows() {
      return this.rows.length;
    },
    c_numItems() {
      return this.items.length || 0;
    },
    c_columns() {
      return get(this.rows, ["0", "length"], 0);
    },
    c_items() {
      return this.items;
    },
    demoWorkspace() {
      return get(this, ["$refs", "activityBlockly", "workspace"]);
    },
    outputArea() {
      return get(this, ["$refs", "outputArea"]);
    },
    runButton() {
      return get(this, ["$refs", "runButton"]);
    }
  },
  methods: {
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
    showCode() {
      this.attempts++;
      this.code = BlocklyJS.workspaceToCode(
        this.$refs["activityBlockly"].workspace
      );
      if (this.code != "") this.runCode();
    },
    clearData() {
      this.numCircles = 0;
      this.path = "";
      this.items = [];
      this.rows = [];
    },
    initApi(interpreter, globalObject) {
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
      this.highlightPause = true;
    },
    resetStepUi(clearOutput) {
      this.demoWorkspace.highlightBlock(null);
      this.highlightPause = false;
      // this.runButton.disabled = false;

      if (clearOutput) {
        this.clearData();
      }
    },
    generateCodeAndLoadIntoInterpreter() {
      // Generate JavaScript code and parse it.
      Blockly.JavaScript.STATEMENT_PREFIX = "highlightBlock(%1);\n";
      Blockly.JavaScript.addReservedWords("highlightBlock");
      // Blockly.JavaScript.workspaceToCode(this.demoWorkspace);
      this.code = BlocklyJS.workspaceToCode(
        this.$refs["activityBlockly"].workspace
      );

      this.resetStepUi(true);
    },
    resetInterpreter() {
      this.myInterpreter = null;
      if (this.runner) {
        clearTimeout(this.runner);
        this.runner = null;
      }
    },
    runTheCode() {
      // latestCode = this.code;
      if (!this.myInterpreter) {
        // First statement of this code.
        // Clear the program output.
        this.resetStepUi(true);
        // this.runButton.disabled = true;
        var scope = this;
        // And then show generated code in an alert.
        // In a timeout to allow the outputArea.value to reset first.
        setTimeout(function() {
          // Begin execution
          scope.highlightPause = false;
          scope.myInterpreter = new JSInterpreter.Interpreter(
            scope.code,
            scope.initApi
          );

          function nextStep() {
            if (scope.myInterpreter.step()) {
              setTimeout(nextStep, 10);
            }
          }

          while (nextStep());
        }, 0.25);
        this.codeComplete = true;

        return;
      }
    },
    runCode() {
      // Exit is used to signal the end of a script.
      Blockly.JavaScript.addReservedWords("exit");

      this.highlightPause = false;
      // var latestCode = this.code;

      // Load the interpreter now, and upon future changes.
      this.generateCodeAndLoadIntoInterpreter();
      let scope = this;
      this.demoWorkspace.addChangeListener(function(event) {
        if (!event.isUiEvent) {
          // Something changed. Parser needs to be reloaded.
          scope.resetInterpreter();
          scope.generateCodeAndLoadIntoInterpreter();
        }
      });

      this.runTheCode();
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

.row {
  background: lightblue;
  margin: 0.25em;
  padding: 0.25em;
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

.prompt-rendered {
  display: inline-flex;
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

.rendered-code {
  height: inherit;
  overflow: auto;
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

.view {
  border: solid 1px grey;
  grid-area: view;
  padding: 1em;
  overflow: hidden;
  display: grid;
  gap: 1em;
  grid-template:
    ".       numColumns .       " auto
    "numRows items      numItems" 1fr / auto auto 1fr;
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

.num-columns {
  grid-area: numColumns;
}

.num-rows {
  grid-area: numRows;
}
.items {
  grid-area: items;
}
.num-items {
  grid-area: numItems;
  display: grid;
  place-items: center;
  grid-template-columns: auto auto;
}

.label-group {
  display: grid;
  place-items: start;
  height: min-content;
  grid-template:
    "count" auto
    "label" auto / 1fr;
}

.equal {
  font-size: xx-large;
  font-weight: bolder;
}
.count {
  grid-area: count;
  font-size: xx-large;
  font-weight: bolder;
}

.count-label {
  grid-area: label;
  font-size: x-small;
}
</style>
