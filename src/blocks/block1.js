import * as Blockly from 'blockly/core'
import theBlocks from './blocks.json'
import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import has from "lodash/has";
import StringIdGenerator from "@/plugins/StringIdGenerator"

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

Blockly.Blocks['repeat_block'] = {
  init: function () {
    this.jsonInit(theBlocks.controls_repeat_ext)
  }
}

Blockly.Blocks['circle_repeat'] = {
  init: function () {
    this.jsonInit(theBlocks.circle_repeat)
  }
}

Blockly.JavaScript['circle_repeat'] = function (block) {
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
  const circle = `<svg height='30' width='30'><circle cx='15' cy='15' r='12' fill='black' /></svg>`

  const hasChildren = !isEmpty(get(block, ["childBlocks_"], []))
  const hasParent = has(block, ["parentBlock_", "id"]);
  const report = `-${hasParent}-circle-${repeats}-${hasChildren}-`;
  let code = `
   highlightBlock("${block.id}")
   addToPath('${report}');
   addRow();
   addItems("${circle}", ${repeats});
   `;
  return code;

}

Blockly.Blocks['draw_ball'] = {
  init: function () {
    this.jsonInit(theBlocks.draw_ball)
  }
}

Blockly.JavaScript['draw_ball'] = function (block) {
  const circle = `<svg version='1.0' xmlns='http://www.w3.org/2000/svg'  width='30.000000pt' height='30.000000pt' viewBox='0 0 300.000000 300.000000'  preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,300.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path d='M1325 2924 c-171 -26 -322 -72 -456 -140 -404 -202 -678 -557 -775 -1004 -27 -121 -27 -439 0 -560 62 -288 192 -526 396 -730 204 -204 442 -334 730 -396 121 -27 439 -27 560 0 299 65 561 211 761 424 181 192 307 434 365 702 15 67 19 127 19 280 0 212 -10 283 -65 451 -29 88 -100 238 -148 313 -210 327 -527 548 -911 637 -64 15 -132 21 -266 24 -99 2 -193 1 -210 -1z m323 -15 c114 -12 247 -42 307 -68 69 -31 296 -259 295 -298 0 -4 -26 -19 -57 -33 -32 -13 -109 -59 -171 -101 l-115 -76 -96 38 c-110 43 -276 82 -439 103 -63 8 -115 16 -116 18 -2 1 -31 45 -66 97 -35 52 -80 114 -102 137 -29 32 -35 44 -26 51 48 39 208 96 343 123 110 22 121 23 243 9z m-318 -9 c-14 -5 -56 -18 -95 -30 -38 -12 -107 -41 -153 -66 -45 -24 -110 -55 -145 -68 -81 -30 -211 -96 -315 -158 -46 -28 -85 -48 -88 -45 -2 2 26 29 63 60 184 150 380 244 608 292 113 24 174 31 125 15z m816 -139 c121 -64 188 -109 281 -190 158 -136 302 -331 377 -511 l14 -35 -61 30 c-52 24 -71 41 -117 104 -30 42 -127 148 -215 236 -88 88 -173 178 -188 201 -15 23 -67 80 -116 128 -49 47 -83 86 -77 86 6 0 52 -22 102 -49z m-1660 -320 c-49 -97 -83 -202 -94 -292 -9 -73 -12 -78 -75 -156 -73 -91 -152 -240 -188 -355 -28 -92 -51 -105 -43 -25 35 337 155 610 375 851 28 31 54 55 56 52 2 -2 -12 -36 -31 -75z m949 9 c155 -24 289 -59 390 -101 68 -28 75 -34 89 -72 9 -23 54 -145 100 -272 l85 -230 -77 -95 c-42 -52 -142 -161 -222 -241 l-146 -147 -309 53 c-244 42 -311 57 -322 71 -34 46 -106 202 -137 295 -31 91 -56 226 -56 296 0 31 78 122 262 306 127 126 164 157 186 157 15 0 86 -9 157 -20z m-802 -412 l187 -12 0 -56 c0 -129 56 -313 148 -485 l48 -90 -63 -96 c-34 -52 -96 -164 -138 -247 l-75 -152 -48 0 c-26 0 -88 5 -139 10 -156 17 -233 58 -293 159 -47 80 -102 241 -126 374 l-18 98 23 77 c42 144 130 305 219 404 29 32 41 39 61 34 14 -3 110 -11 214 -18z m2138 -6 c24 -16 49 -35 56 -43 15 -18 58 -174 75 -269 18 -105 15 -354 -5 -463 -19 -104 -65 -260 -75 -255 -4 2 -32 16 -63 32 l-56 29 -12 146 c-13 160 -39 305 -70 394 -19 53 -19 60 -5 100 12 32 84 336 84 353 0 12 32 0 71 -24z m-301 -358 c63 -14 118 -31 122 -37 33 -50 72 -252 87 -452 l10 -129 -101 -136 c-134 -179 -248 -294 -308 -310 -62 -17 -244 -7 -344 19 -88 23 -186 65 -186 79 0 24 -31 302 -41 361 -5 36 -18 99 -29 139 l-18 72 152 153 c83 83 184 193 224 243 l72 91 123 -33 c67 -19 174 -45 237 -60z m-2135 -714 c71 -44 145 -61 280 -67 72 -3 136 -10 143 -16 7 -6 49 -57 93 -114 92 -120 203 -233 274 -282 l50 -34 0 -138 0 -137 -41 -7 c-94 -14 -256 48 -428 162 -158 106 -375 333 -382 401 -2 15 -10 54 -18 87 -16 60 -22 165 -10 165 4 0 21 -9 39 -20z m1488 -309 c107 -43 209 -61 341 -61 l116 0 -5 -27 c-2 -16 -7 -53 -10 -83 -3 -30 -16 -81 -29 -112 -23 -55 -23 -58 -5 -58 38 0 17 -18 -80 -68 -198 -104 -405 -155 -636 -156 -152 -1 -220 12 -286 57 -33 22 -34 26 -43 106 -5 49 -5 106 0 139 l9 56 120 43 c211 75 299 112 360 152 33 22 63 40 67 40 4 1 41 -12 81 -28z'></path> </g> </svg>`

  // const book = ` <svg version='1.0' xmlns='http://www.w3.org/2000/svg'  width='30.000000pt' height='30.000000pt' viewBox='0 0 225.000000 225.000000'  preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,225.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path d='M395 1916 c-49 -13 -115 -35 -147 -49 -89 -40 -215 -125 -222 -150 -3 -12 -6 -320 -6 -685 0 -665 1 -693 34 -714 23 -16 69 -7 109 21 133 91 253 131 412 138 174 7 288 -23 446 -117 45 -28 90 -50 100 -50 9 0 55 24 102 53 50 32 125 67 183 87 92 31 108 33 229 33 115 0 140 -3 215 -27 97 -32 135 -50 221 -106 71 -46 86 -48 123 -19 l26 20 0 694 0 693 -62 40 c-177 114 -329 162 -518 162 -171 0 -313 -39 -465 -128 l-51 -30 -58 34 c-147 87 -286 124 -461 123 -92 0 -141 -5 -210 -23z m398 -137 c44 -10 119 -40 170 -67 l92 -48 3 -577 c1 -322 -2 -577 -7 -577 -4 0 -38 13 -74 30 -125 57 -217 75 -372 75 -156 -1 -224 -14 -360 -71 -44 -19 -81 -34 -82 -34 -2 0 -3 259 -3 575 l0 574 58 34 c185 108 370 136 575 86z m997 9 c69 -13 167 -51 242 -95 l58 -34 0 -574 c0 -316 -1 -575 -3 -575 -1 0 -38 15 -82 34 -139 58 -203 71 -365 71 -162 0 -226 -13 -365 -71 -44 -19 -81 -34 -82 -34 -2 0 -2 260 -1 577 l3 577 80 43 c170 92 327 116 515 81z'></path> </g> </svg> `
  const hasChildren = !isEmpty(get(block, ["childBlocks_"], []))
  const hasParent = has(block, ["parentBlock_", "id"]);

  const report = `-${hasParent}-ball-${hasChildren}-`;
  return `
  highlightBlock("${block.id}")
  addToPath('${report}');
  addItem("${circle}");
  `;
}

Blockly.Blocks['draw_candy'] = {
  init: function () {
    this.jsonInit(theBlocks.draw_candy)
  }
}

Blockly.JavaScript['draw_candy'] = function (block) {
  const circle = `<svg version='1.0' xmlns='http://www.w3.org/2000/svg'  width='30.000000pt' height='30.000000pt' viewBox='0 0 101.000000 101.000000'  preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,101.000000) scale(0.100000,-0.100000)' fill='#a52a2a' stroke='none'> <path d='M697 933 c-13 -21 -38 -63 -56 -94 l-31 -56 -58 -6 c-154 -13 -306 -164 -319 -318 l-6 -58 -88 -51 c-49 -28 -91 -56 -95 -61 -11 -18 18 -39 52 -39 31 0 34 -3 34 -30 0 -41 39 -80 80 -80 27 0 30 -3 30 -34 0 -34 21 -63 39 -52 5 4 33 46 60 95 l51 89 54 4 c72 6 151 46 215 110 66 65 102 134 109 210 l5 58 89 52 c49 28 91 55 94 60 10 17 -17 37 -54 40 -35 3 -37 5 -37 36 0 41 -33 72 -76 72 -26 0 -29 3 -29 33 0 31 -14 57 -32 57 -4 0 -18 -17 -31 -37z m37 -18 c3 -8 1 -15 -4 -15 -6 0 -10 7 -10 15 0 8 2 15 4 15 2 0 6 -7 10 -15z m24 -77 c9 0 22 -2 27 -3 6 -2 16 -3 23 -4 7 0 12 -14 12 -32 0 -20 9 -38 24 -52 l25 -22 -52 -32 -51 -31 -15 29 c-15 32 -69 79 -90 79 -15 0 -15 -1 24 67 30 52 30 52 43 27 7 -13 20 -25 30 -26z m-98 -109 c21 -12 46 -37 56 -55 10 -19 21 -34 25 -34 12 0 -12 -104 -36 -157 -47 -105 -164 -195 -270 -208 -41 -5 -58 -2 -94 17 -25 13 -52 36 -61 54 -8 17 -21 29 -28 26 -7 -2 -12 1 -12 7 0 6 4 11 9 11 5 0 11 22 15 50 10 78 41 137 104 200 99 99 213 133 292 89z m-365 -455 c18 -13 37 -24 44 -24 15 0 15 1 -24 -67 -30 -53 -45 -66 -45 -38 0 15 -41 47 -56 44 -25 -4 -34 4 -34 31 0 30 -30 70 -52 70 -7 0 14 15 47 34 l60 33 14 -29 c8 -16 29 -40 46 -54z m-185 6 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15 -4 15 -10z m265 -20 c3 -5 2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z'></path> <path d='M472 658 c-58 -28 -48 -33 15 -6 33 13 59 19 77 14 23 -6 26 -11 26 -49 0 -97 -109 -205 -212 -209 -41 -1 -41 -1 -8 -5 52 -7 103 12 147 55 51 47 83 110 83 161 0 64 -48 78 -128 39z'></path> <path d='M386 597 c-32 -32 -69 -105 -62 -123 4 -9 2 -12 -5 -8 -7 4 -10 -1 -7 -11 7 -37 28 -26 51 27 13 29 36 67 50 84 23 27 25 33 12 44 -11 9 -19 7 -39 -13z'></path> <path d='M276 225 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z'></path> </g> </svg> `
  const hasChildren = !isEmpty(get(block, ["childBlocks_"], []))
  const hasParent = has(block, ["parentBlock_", "id"]);

  const report = `-${hasParent}-candy-${hasChildren}-`;
  return `
  highlightBlock("${block.id}")
  addToPath('${report}');
  addItem("${circle}");
  `;
}

Blockly.Blocks['draw_pillow'] = {
  init: function () {
    this.jsonInit(theBlocks.draw_pillow)
  }
}

Blockly.JavaScript['draw_pillow'] = function (block) {
  const circle = ` <svg version='1.0' xmlns='http://www.w3.org/2000/svg'  width='30.000000pt' height='30.000000pt' viewBox='0 0 225.000000 225.000000'  preserveAspectRatio='xMidYMid meet'>  <g transform='translate(0.000000,225.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'> <path d='M1805 1999 c-52 -18 -77 -20 -180 -16 -344 13 -899 -50 -1170 -134 l-65 -20 -85 27 c-101 31 -142 28 -179 -17 -34 -40 -33 -82 3 -154 28 -56 29 -59 15 -104 -54 -176 -77 -446 -55 -638 16 -137 52 -280 101 -403 32 -82 40 -115 40 -167 0 -132 62 -174 176 -119 48 24 56 24 374 29 335 6 440 15 635 57 193 42 381 116 512 201 51 34 65 39 82 30 48 -26 110 -1 139 55 13 25 21 462 10 544 -4 30 -10 74 -12 97 -10 83 -59 280 -102 410 -35 107 -42 137 -34 158 6 15 10 48 10 75 0 42 -4 51 -35 79 -43 38 -91 40 -180 10z m177 -39 c22 -27 23 -69 3 -116 -14 -34 -13 -40 21 -137 40 -117 85 -290 111 -427 13 -75 17 -152 18 -362 0 -256 -1 -268 -21 -295 -24 -33 -78 -42 -109 -20 -17 14 -25 11 -79 -26 -79 -53 -241 -129 -347 -161 -244 -74 -430 -98 -824 -103 -306 -4 -311 -4 -359 -28 -28 -14 -58 -25 -69 -25 -53 0 -82 54 -69 130 6 37 4 54 -16 94 -138 288 -170 716 -78 1060 l24 89 -29 54 c-28 53 -37 106 -21 130 23 37 92 37 189 1 l52 -19 138 35 c310 78 637 116 1007 117 211 0 247 3 291 20 67 25 142 20 167 -11z'></path> <path d='M351 1601 c67 -178 108 -648 89 -1021 -4 -96 -7 -176 -5 -178 6 -6 64 253 75 331 17 130 13 370 -10 499 -28 165 -84 313 -150 398 -19 24 -19 24 1 -29z m129 -419 c12 -87 12 -389 0 -417 -5 -13 -9 26 -10 105 -1 158 -8 285 -20 378 -6 40 -10 83 -9 95 2 30 26 -72 39 -161z'></path> </g> </svg> `
  const hasChildren = !isEmpty(get(block, ["childBlocks_"], []))
  const hasParent = has(block, ["parentBlock_", "id"]);

  const report = `-${hasParent}-pillow-${hasChildren}-`;
  return `
  highlightBlock("${block.id}")
  addToPath('${report}');
  addItem("${circle}");
  `;
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
