import Blockly from "blockly"
Blockly.Themes.MathCoder = Blockly.Theme.defineTheme("mathcoder", {
    base: Blockly.Themes.Classic,
    fontStyle: {
        family: "Tahoma , sans-serif",
        weight: "normal",
        size: 16
    },
    componentStyles: {
        workspaceBackgroundColour: "#ffffff",
        // toolboxBackgroundColour: "#FF00FF",
        // toolboxForegroundColour: "#FF00FF",
        flyoutBackgroundColour: "#252526",
        // flyoutForegroundColour: "#FF00FF",
        flyoutOpacity: 0.5,
        // scrollbarColour: "#ff0000",
        // insertionMarkerColour: "#FF00FF",
        insertionMarkerOpacity: .5,
        // scrollbarOpacity: 0.4,
        cursorColour: "#FF00FF",
        blackBackground: "#FF00FF"
    }
});