<template>
  <div class="blocklyArea" ref="blocklyArea">
    <xml
      xmlns="https://developers.google.com/blockly/xml"
      ref="blocklyToolbox"
      style="display: none"
    >
      <slot name="toolbox-blocks"></slot>
    </xml>
    <xml
      xmlns="https://developers.google.com/blockly/xml"
      ref="workspaceBlocks"
      style="display: none"
    >
      <slot name="canvas-blocks"></slot>
    </xml>
    <div class="blocklyDiv" ref="blocklyDiv"></div>
  </div>
</template>

<script>
import defaults from "lodash/defaults";
import forEach from "lodash/forEach";
import Blockly from "blockly";
import "@/blocks/mathcoder.theme.js";
export default {
  name: "AppBlockly",
  props: {
    options: { type: Object }
  },
  data() {
    return {
      workspace: null
    };
  },
  mounted() {
    var options = defaults({}, this.$props.options, {
      // toolbox: this.$refs["blocklyToolbox"],
      collapse: false,
      // comments: false,
      // maxBlocks: 5,
      trashcan: false,
      horizontalLayout: true,
      // toolboxPosition: "start", //"end"
      // css: false,
      // rtl: false,
      // scrollbars: false,
      renderer: "zelos",
      theme: Blockly.Themes.MathCoder,
      sounds: true,
      oneBasedIndex: true,
      showToolbox: true
    });

    if (!options.toolbox && options.showToolbox) {
      options.toolbox = this.$refs["blocklyToolbox"];
    }
    var blocklyArea = this.$refs["blocklyArea"];
    var blocklyDiv = this.$refs["blocklyDiv"];

    this.workspace = Blockly.inject(blocklyDiv, options);
    /* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
    var workspaceBlocks = this.$refs["workspaceBlocks"];

    /* Load blocks to workspace. */
    Blockly.Xml.domToWorkspace(workspaceBlocks, this.workspace);

    var wksp = this.workspace;
    var onresize = function() {
      // Compute the absolute coordinates and dimensions of blocklyArea.
      let element = blocklyArea;
      var x = 0;
      var y = 0;
      do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
      } while (element);
      // Position blocklyDiv over blocklyArea.
      blocklyDiv.style.left = x + "px";
      blocklyDiv.style.top = y + "px";
      blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
      blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
      Blockly.svgResize(wksp);
    };
    window.addEventListener("resize", onresize, false);
    onresize();
    Blockly.svgResize(this.workspace);
    this.workspace.addChangeListener(this.fireChangeEvent);
  },
  methods: {
    fireChangeEvent(event) {
      forEach(this.workspace.getAllBlocks(), ablock => {
        // disable the context menu
        ablock.contextMenu = false;
      });

      // console.log(this.workspace.getBlockById(event.blockId).pathObject);
      // console.log(this.workspace.getBlockById(event.blockId).svgGroup_);
      this.$emit("blockly-event", event);
    }
  }
};
</script>

<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
}
.blocklyArea {
  height: 100%;
  width: 100%;
}
</style>
