// import * as loops from "blockly/blocks/loops"
import * as Blockly from 'blockly/core'
// import generator from "blockly/generators/javascript"
import theBlocks from './blocks.json'
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import has from "lodash/has";
// import anime from 'animejs/lib/anime.es.js';
// Blockly.Blocks["loop"] = loops.

// https://stackoverflow.com/questions/12504042/what-is-a-method-that-can-be-used-to-increment-letters
class StringIdGenerator {
  constructor(chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    this._chars = chars;
    this._nextId = [0];
  }

  next() {
    const r = [];
    for (const char of this._nextId) {
      r.unshift(this._chars[char]);
    }
    this._increment();
    return r.join('');
  }

  _increment() {
    for (let i = 0; i < this._nextId.length; i++) {
      const val = ++this._nextId[i];
      if (val >= this._chars.length) {
        this._nextId[i] = 0;
      } else {
        return;
      }
    }
    this._nextId.push(0);
  }

  *[Symbol.iterator]() {
    while (true) {
      yield this.next();
    }
  }
}

const ids = new StringIdGenerator();

Blockly.JavaScript['repeat_block'] = function (block) {
  // Repeat n times.
  let repeats
  if (block.getField('TIMES')) {
    // Internal number.
    repeats = String(Number(block.getFieldValue('TIMES')))
  } else {
    // External number.
    repeats = Blockly.JavaScript.valueToCode(block, 'TIMES',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0'
  }
  let branch = Blockly.JavaScript.statementToCode(block, 'DO')
  branch = Blockly.JavaScript.addLoopTrap(branch, block)
  let endVar = repeats
  let loopVar = ids.next();
  return `
    highlightBlock("${block.id}")
    addToPath("-repeat-${endVar}-times-");
    addRow();
    {
      var ${loopVar} = 0;
      while(${loopVar} < ${endVar}){
        ${loopVar}++;
        ${branch}
      }
    }
   `
}

Blockly.Blocks['draw_shape_circle'] = {
  init: function () {
    this.jsonInit(theBlocks.draw_shape_circle)
  }
}

Blockly.JavaScript['draw_shape_circle'] = function (block) {
  const circle = `<svg height='30' width='30'><circle cx='15' cy='15' r='12' fill='black' /></svg>`
  const hasChildren = !isEmpty(get(block, ["childBlocks_"], []))
  const hasParent = has(block, ["parentBlock_", "id"]);

  const report = `-${hasParent}-circle-${hasChildren}-`;
  return `
  highlightBlock("${block.id}")
  addToPath('${report}');
  addItem("${circle}");
  `;
}

Blockly.Blocks['repeat_block'] = {
  init: function () {
    this.jsonInit(theBlocks.controls_repeat_ext)
  }
}
