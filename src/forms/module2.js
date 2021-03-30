// data to be used

function importAll(r) {
  let audios = {};
  r.keys().map((item, index) => { audios[item.replace('./', '')] = r(item); });
  return audios;
}

import tests from "@/forms/tests.js"
const audios = importAll(require.context('@/assets', false, /\.(mp3)$/));

function regexOutsideRepeatBlockNotFound() {
  return regexNotFound("-repeat-")
}

function regexInsideRepeatNotFound() {
  return regexNotFound("repeat_")
}

function regexNotFound(chars) {
  return `^((?!${chars}).)*$`
}

function regexLooksLikeYouFlippedThem(groups, items) {
  return `^(-repeat-${items}-)+.*(-${groups}-)`
}

const sharedHints = {
  noBlocks: {
    regexDescription: "No blocks are on the page"
    , regex: "^\s*$"
    , hintHtml: `Remember to drag the blocks onto the white page.`
    , audio: audios["dragOntoPage.mp3"]
  }
  , noRepeat: {
    regexDescription: "No repeat blocks are on the page"
    , regex: regexOutsideRepeatBlockNotFound()
    , hintHtml: `Make sure you drag the repeat block onto the white page too.`
    , audio: audios["dragRepeatHint.mp3"]
  }
  , needToStartOver: {
    regexDescription: "No blocks are on the page"
    , regex: "^\s*$"
    , hintHtml: `All the blocks have been deleted. Click the Start Over button to start over.`
    , audio: audios["startOverHint.mp3"]
  }
  // , missingInsideRepeatBlock: {
  //   regexDescription: "missing the repeat block",
  //   regex: regexInsideRepeatNotFound()
  //   , hintHtml: `Remember to drag the blocks onto the white page.`
  //   , audio: audios["dragOntoPage.mp3"]
  // }
};

const data = {
  modules: [
    {
      id: "199e4bb2-04d1-4a95-9965-d74c259e17fc",
      name: "Module 1",
      description: "Help students understand the concept of grouping and repeated grouping.",
      standards: [
        {
          name: ""
          , id: "2.0A.4"
          , description: "Use addition to find the total number of objects arranged in rectangular arrays with up to 5 rows and up to 5 columns; write an equation to express the total as a sum of equal addends"
        },
        {
          name: ""
          , id: "3.OA.1"
          , description: "Interpret the products of whole numbers, such as interpreting 5 × 7 as the total number of objects in 5 groups of 7 objects each."
        }
      ],
      test: tests.test,
      activities: [
        {
          id: "P-1"
          , name: "P-1: Compiling with the run button"
          , description: "This activity starts out with a block already on the canvas. The student will click the Run Button in order to compile the code."
          , blockOptions: {
            showToolbox: false
            , maxInstances: { "repeat_circle": 1 }
          }
          , startingBlocksXml: `<block type="repeat_circle" x="10" y="65"></block>`
          , blockSelection: []
          , prompt: `<p>The blocks on the white page are going to tell the computer what to do.</p><p>Click the run button below to see what happens.</p>`
          , promptAudio: audios['p1prompt.mp3']
          , reflections: []
          , solution: "-false-repeat_circle-5-false-"
          , successAudio: audios['p1success.mp3']
          , hints: [
            sharedHints.needToStartOver
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '5'",
              regex: regexNotFound("5")
              , hintHtml: `Change the number on the block back to a 5.`
              , audio: audios["p1hint2.mp3"]
            }
          ]
          , isMultiplication: false
        },
        {
          id: "A-1"
          , name: "A-1: Modifying the Row Block"
          , description: "This activity starts out with a block already on the canvas. The student will change the value and then click run."
          , blockOptions: {
            showToolbox: false
            , maxInstances: { "repeat_ball": 1 }
          }
          , startingBlocksXml: `<block type="repeat_ball" x="10" y="65">
                                  <field name="TIMES">7</field>
                                </block>`
          , blockSelection: []
          , prompt: `<p>The blocks on the white page are going to tell the computer what to do.</p><p>Change the 7 on the block to a 4.</p>`
          , promptAudio: audios['a1prompt.mp3']
          , reflections: []
          , successAudio: audios['a1success.mp3']
          , solution: "-false-repeat_ball-4-false-"
          , hints: [
            // no blocks
            sharedHints.needToStartOver
            // inside repeat block missing
            // , {
            //   regexDescription: "missing the repeat block",
            //   regex: regexInsideRepeatNotFound()
            //   , hintHtml: `Remember to drag the ball block onto the page.`
            //   , audio: audios["a1hint1.mp3"]
            // }
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-4-'",
              regex: regexNotFound("-4-")
              , hintHtml: `To draw 4 balls, make sure you change the number on the block to a 4.`
              , audio: audios["a1hint2.mp3"]
            }
          ]
        },
        {
          id: "A-2"
          , name: "A-2: Modifying the Row Block"
          , description: "This activity starts out with a block already on the canvas. The student will change the value and then click run."
          , blockOptions: {
            showToolbox: false
            , maxInstances: { "repeat_book": 1 }
          }
          , startingBlocksXml: `<block type="repeat_book" x="10" y="65">
                                  <field name="TIMES">5</field>
                                </block>`
          , blockSelection: []
          , prompt: `<p>Tell the computer to draw 8 books.</p><p>Change the 5 on the block to an 8.</p>`
          , promptAudio: audios['a2prompt.mp3']
          , reflections: []
          , successAudio: audios['a2success.mp3']
          , solution: "-false-repeat_book-8-false-"
          , hints: [
            // no blocks
            sharedHints.needToStartOver
            // inside repeat block missing
            // , {
            //   regexDescription: "missing the repeat block",
            //   regex: regexInsideRepeatNotFound()
            //   , hintHtml: `Remember to drag the book block onto the page.`
            //   , audio: audios["a2hint1.mp3"]
            // }
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-8-'"
              , regex: regexNotFound("-8-")
              , hintHtml: `To draw 8 books, make sure you change the number in the block to an 8.`
              , audio: audios["a2hint2.mp3"]
            }
          ]
        },
        {
          id: "A-3"
          , name: "A-3: Modifying the Row Block"
          , description: "This activity starts out with a block already on the canvas. The student will change the value and then click run."
          , blockOptions: {
            showToolbox: false
            , maxInstances: { "repeat_candy": 1 }
          }
          , startingBlocksXml: `<block type="repeat_candy" x="10" y="65">
                                  <field name="TIMES">3</field>
                                </block>`
          , blockSelection: []
          , prompt: `<p>Tell the computer to draw 7 pieces of candy.</p>`
          , promptAudio: audios['a3prompt.mp3']
          , reflections: []
          , successAudio: audios['a3success.mp3']
          , solution: "-false-repeat_candy-7-false-"
          , hints: [
            // no blocks
            sharedHints.needToStartOver
            // inside repeat block missing
            // , {
            //   regexDescription: "missing the repeat block",
            //   regex: regexInsideRepeatNotFound()
            //   , hintHtml: `Remember to drag the candy block onto the page.`
            //   , audio: audios["a3hint1.mp3"]
            // }
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-7-'"
              , regex: regexNotFound("-7-")
              , hintHtml: `To draw 7 pieces of candy, make sure you change the number on the block to a 7.`
              , audio: audios["a3hint2.mp3"]
            }
          ]
        },
        {
          id: "B-1"
          , name: "B-1: Dragging and Modifying the row block"
          , description: "This activity asks students to drag the needed block onto the canvas. The student will change the value and then click run."
          , blockOptions: {
            showToolbox: true
            , maxInstances: { "repeat_cookie": 1 }
          }
          , startingBlocksXml: ``
          , blockSelection: [{
            type: "repeat_cookie"
          }]
          , prompt: `<p>Tell the computer to draw 6 cookies. Also drag the block onto the white page.</p>`
          , promptAudio: audios['b1prompt.mp3']
          , reflections: []
          , successAudio: audios['b1success.mp3']
          , solution: "-false-repeat_cookie-6-false-"
          , hints: [
            // no blocks
            sharedHints.noBlocks
            // inside repeat block missing
            , {
              regexDescription: "missing the repeat block",
              regex: regexInsideRepeatNotFound()
              , hintHtml: `Remember to drag the cookies block onto the page.`
              , audio: audios["b1hint1.mp3"]
            }
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-6-'"
              , regex: regexNotFound("-6-")
              , hintHtml: `How many cookies do we want to draw? Make sure you change the number on the block.`
              , audio: audios["b1hint2.mp3"]
            }
          ]
        },
        {
          id: "B-2"
          , name: "B-2: Dragging and Modifying the row block"
          , description: "This activity asks students to drag the needed block onto the canvas. The student will change the value and then click run."
          , blockOptions: {
            showToolbox: true
            , maxInstances: { "repeat_pillow": 1 }
          }
          , startingBlocksXml: ``
          , blockSelection: [{
            type: "repeat_pillow"
          }]
          , prompt: `<p>Tell the computer to draw 5 pillows. Drag the block onto the white page.</p>`
          , promptAudio: audios['b2prompt.mp3']
          , reflections: []
          , successAudio: audios['b2success.mp3']
          , solution: "-false-repeat_pillow-5-false-"
          , hints: [
            // no blocks
            sharedHints.noBlocks
            // inside repeat block missing
            // , {
            //   regexDescription: "missing the repeat block",
            //   regex: regexInsideRepeatNotFound()
            //   , hintHtml: `Remember to drag the pillow block onto the page.`
            //   , audio: audios["b2hint1.mp3"]
            // }
            // *inside repeat block incorrect
            , {
              regex: regexNotFound("-5-")
              , hintHtml: `To draw 5 pillows, make sure you change the number on the block to a 5.`
              , audio: audios["b2hint2.mp3"]
            }
          ]
        },
        {
          id: "B-3"
          , name: "B-3: Dragging and Modifying the row block"
          , description: "This activity asks students to drag the needed block onto the canvas. The student will change the value and then click run."
          , blockOptions: {
            showToolbox: true
            , maxInstances: { "repeat_star": 1 }
          }
          , startingBlocksXml: ``
          , blockSelection: [{
            type: "repeat_star"
          }]
          , prompt: `<p>Tell the computer to draw 5 stars.</p>`
          , promptAudio: audios['b3prompt.mp3']
          , reflections: []
          , successAudio: audios['b3success.mp3']
          , solution: "-false-repeat_star-5-false-"
          , hints: [
            // no blocks
            sharedHints.noBlocks
            // inside repeat block missing
            // , {
            //   regexDescription: "missing the repeat block",
            //   regex: regexInsideRepeatNotFound()
            //   , hintHtml: `Remember to drag the star block onto the page.`
            //   , audio: audios["b3hint1.mp3"]
            // }
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-5-'"
              , regex: regexNotFound("-5-")
              , hintHtml: `Make sure to change the number on the block. How many stars do we want to draw?`
              , audio: audios["b3hint2.mp3"]
            }
          ]
        },
        {
          id: "C-1a"
          , name: "C-1a: Introducing the Repeat Block"
          , description: "This activity has two parts. It asks students to drag the needed row block onto the canvas and update the value. Then It asks the student to Drag the repeat block onto the canvas and update its value."
          , blockOptions: {
            showToolbox: true
            , maxInstances: { "repeat_apple": 1 }
          }
          , startingBlocksXml: ``
          , blockSelection: [{
            type: "repeat_apple"
          }]
          , prompt: `<p>Tell the computer to draw 5 apples.</p>`
          , promptAudio: audios['c1aprompt.mp3']
          , reflections: []
          , successAudio: audios['c1asuccess.mp3']
          , solution: "-false-repeat_apple-5-false-"
          , hints: [
            // no blocks
            sharedHints.noBlocks
            // inside repeat block missing
            // , {
            //   regexDescription: "missing the repeat block",
            //   regex: regexInsideRepeatNotFound()
            //   , hintHtml: `Remember to drag the apples block onto the page.`
            //   , audio: audios["c1ahint1.mp3"]
            // }
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-5-'"
              , regex: regexNotFound("-5-")
              , hintHtml: `How many apples do we want to draw? Remember to change the number on the apple block.`
              , audio: audios["c1ahint2.mp3"]
            }
          ]
        },
        {
          id: "C-1b"
          , name: "C-1b: Introducing the Repeat Block"
          , description: "This activity has two parts. It asks students to drag the needed row block onto the canvas and update the value. Then It asks the student to Drag the repeat block onto the canvas and update its value."
          , blockOptions: {
            showToolbox: true
            , maxInstances: { "repeat_apple": 1, "repeat_block": 1 }
          }
          , startingBlocksXml: `<block type="repeat_apple" x="10" y="65">
                                  <field name="TIMES">5</field>
                                </block>`
          , blockSelection: [
            { type: "repeat_apple" }
            , { type: "repeat_block" }
          ]
          , prompt: `<p>Tell the computer to draw 3 rows of 5 apples.</p> To do this drag the repeat block onto the white page. Place the apple block inside of the repeat block.`
          , promptAudio: audios['c1bprompt.mp3']
          , reflections: []
          , successAudio: audios['c1bsuccess.mp3']
          , solution: "-repeat-3-times--true-repeat_apple-5-false--true-repeat_apple-5-false--true-repeat_apple-5-false-"
          , hints: [
            // no blocks
            sharedHints.noBlocks
            // inside repeat block missing
            , {
              regexDescription: "missing the repeat block",
              regex: regexInsideRepeatNotFound()
              , hintHtml: `Remember to drag the apples block onto the page.`
              , audio: audios["c1ahint1.mp3"]
            }
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-5-'"
              , regex: regexNotFound("apple-5")
              , hintHtml: `How many apples do we want to draw in each row? Remember to change the number on the apple block to match.`
              , audio: audios["c1bhint2.mp3"]
            }
            // outside repeat block missing
            , sharedHints.noRepeat
            // *outside repeat block incorrect
            , {
              regexDescription: "must have a '-3-'"
              , regex: regexNotFound("-repeat-3-")
              , hintHtml: `How many rows of apples do we want? Remember to change the orange repeat block to match.`
              , audio: audios["c1bhint3.mp3"]
            }
          ]
        },


        {
          id: "C-2a"
          , name: "C-2a: Introducing the Repeat Block"
          , description: "This activity has two parts. It asks students to drag the needed row block onto the canvas and update the value. Then It asks the student to Drag the repeat block onto the canvas and update its value."
          , blockOptions: {
            showToolbox: true
            , maxInstances: { "repeat_tree": 1 }
          }
          , startingBlocksXml: ``
          , blockSelection: [{
            type: "repeat_tree"
          }]
          , prompt: `<p>Tell the computer to draw 4 trees.</p>`
          , promptAudio: audios['c2aprompt.mp3']
          , reflections: []
          , successAudio: audios['c2asuccess.mp3']
          , solution: "-false-repeat_tree-4-false-"
          , hints: [
            // no blocks
            sharedHints.noBlocks
            // inside repeat block missing
            // , {
            //   regexDescription: "missing the repeat block",
            //   regex: regexInsideRepeatNotFound()
            //   , hintHtml: `Remember to drag the trees block onto the page.`
            //   , audio: audios["c2ahint1.mp3"]
            // }
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-4-'"
              , regex: regexNotFound("tree-4-")
              , hintHtml: `How many trees do we want to draw? Make sure you change the number on the trees block to match.`
              , audio: audios["c2ahint2.mp3"]
            }
          ]
        },
        {
          id: "C-2b"
          , name: "C-2b: Introducing the Repeat Block"
          , description: "This activity has two parts. It asks students to drag the needed row block onto the canvas and update the value. Then It asks the student to Drag the repeat block onto the canvas and update its value."
          , blockOptions: {
            showToolbox: true
            , maxInstances: { "repeat_tree": 1, "repeat_block": 1 }
          }
          , startingBlocksXml: `<block type="repeat_tree" x="10" y="65">
                                  <field name="TIMES">4</field>
                                </block>`
          , blockSelection: [
            { type: "repeat_tree" }
            , { type: "repeat_block" }
          ]
          , prompt: `<p>Tell the computer to draw 3 rows of 4 trees.</p> <p>To do this drag the repeat block onto the white page. Place the tree block inside of the repeat block.</p>`
          , promptAudio: audios['c2bprompt.mp3']
          , reflections: []
          , successAudio: audios['c2bsuccess.mp3']
          , solution: "-repeat-3-times--true-repeat_tree-4-false--true-repeat_tree-4-false--true-repeat_tree-4-false-"
          , hints: [
            // no blocks
            sharedHints.noBlocks
            // inside repeat block missing
            , {
              regexDescription: "missing the repeat block",
              regex: regexInsideRepeatNotFound()
              , hintHtml: `Remember to drag the trees block onto the page.`
              , audio: audios["c2ahint1.mp3"]
            }
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-4-'"
              , regex: regexNotFound("tree-4-")
              , hintHtml: `How many trees do we want to draw in each row? Make sure you change the number on the trees block to match.`
              , audio: audios["c2ahint2.mp3"]
            }
            // outside repeat block missing
            , sharedHints.noRepeat
            // *outside repeat block incorrect
            , {
              regexDescription: "must have a '-3-'"
              , regex: regexNotFound("-repeat-3-")
              , hintHtml: `How many rows of trees do we want? Remember to change the orange repeat block to match.`
              , audio: audios["c2bhint3.mp3"]
            }
          ]
        },
        {
          id: "C-2c"
          , name: "C-2c: Introducing the Repeat Block"
          , description: "This activity has two parts. It asks students to drag the needed row block onto the canvas and update the value. Then It asks the student to Drag the repeat block onto the canvas and update its value."
          , blockOptions: {
            showToolbox: true
            , maxInstances: { "repeat_tree": 1, "repeat_block": 1 }
          }
          , startingBlocksXml: `<block type="repeat_block" x="10" y="65"> 
                                  <field name="TIMES">3</field>
                                  <value name="DO">
                                    <block type="repeat_tree" x="10" y="65">
                                      <field name="TIMES">4</field>
                                    </block>
                                  </value>
                                </block>`
          , blockSelection: [
            { type: "repeat_tree" }
            , { type: "repeat_block" }
          ]
          , prompt: `<p>Tell the computer to draw 4 rows of 4 trees.</p>`
          , promptAudio: audios['c2cprompt.mp3']
          , reflections: []
          , successAudio: audios['c2csuccess.mp3']
          , solution: "-repeat-4-times--true-repeat_tree-4-false--true-repeat_tree-4-false--true-repeat_tree-4-false--true-repeat_tree-4-false-"
          , hints: [
            // no blocks
            sharedHints.noBlocks
            // inside repeat block missing
            , {
              regexDescription: "missing the repeat block",
              regex: regexInsideRepeatNotFound()
              , hintHtml: `Remember to drag the trees block onto the page.`
              , audio: audios["c2ahint1.mp3"]
            }
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-4-'"
              , regex: regexNotFound("tree-4-")
              , hintHtml: `How many trees do we want to draw in each row? Make sure you change the number on the trees block to match.`
              , audio: audios["c2ahint2.mp3"]
            }
            // outside repeat block missing
            , sharedHints.noRepeat
            // *outside repeat block incorrect
            , {
              regexDescription: "must have a '-4-'"
              , regex: regexNotFound("-repeat-4-")
              , hintHtml: `How many rows of trees do we want? Remember to change the orange repeat block to match.`
              , audio: audios["c2bhint3.mp3"]
            }
          ]
        },
        {
          id: "D-1"
          , name: "D-1: Introducing the Repeat Block"
          , description: "It asks students to drag the needed row block onto the canvas and update the value. Then It asks the student to Drag the repeat block onto the canvas and update its value."
          , blockOptions: {
            showToolbox: true
            , maxInstances: { "repeat_pea": 1, "repeat_block": 1 }
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_pea" }
            , { type: "repeat_block" }
          ]
          , prompt: `<p>Jack has 2 pea pods. Each pea pod has 6 peas.</p><p>Tell the computer how to draw the problem.</p>`
          , promptAudio: audios['c3aprompt.mp3']
          , reflections: []
          , successAudio: audios['c3asuccess.mp3']
          , solution: "-repeat-2-times--true-repeat_pea-6-false--true-repeat_pea-6-false-"
          // -repeat-2-times--true-repeat_pea-6-false--true-repeat_pea-6-false-
          , hints: [
            // no blocks
            sharedHints.noBlocks
            // inside repeat block missing
            , {
              regexDescription: "missing the repeat block",
              regex: regexInsideRepeatNotFound()
              , hintHtml: `Remember to place the pea pod block inside of the repeat block.`
              , audio: audios["d1hint1.mp3"]
            }
            // outside repeat block missing
            , sharedHints.noRepeat
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-6-'"
              , regex: regexNotFound("pea-6")
              , hintHtml: `How many peas do we want in each pod? Make sure to change the pea pod block to match.`
              , audio: audios["d1hint2.mp3"]
            }
            // *outside repeat block incorrect
            , {
              regexDescription: "must have a '-4-'"
              , regex: regexNotFound("-repeat-4-")
              , hintHtml: `How many pea pods do we want? Change the orange repeat block to match.`
              , audio: audios["d1hint3.mp3"]
            }
          ]
        },
        {
          id: "D-2"
          , name: "D-2: Introducing the Repeat Block"
          , description: "This activity has two parts. It asks students to drag the needed row block onto the canvas and update the value. Then It asks the student to Drag the repeat block onto the canvas and update its value."
          , blockOptions: {
            showToolbox: true
            , maxInstances: { "repeat_cake": 1, "repeat_block": 1 }
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_cake" }
            , { type: "repeat_block" }
          ]
          , prompt: `<p>Josh cut the cake at a party. He made 4 rows. Each row had 5 pieces of cake. </p><p>Tell the computer how to draw the problem.</p>`
          , promptAudio: audios['d2prompt.mp3']
          , reflections: []
          , successAudio: audios['d2success.mp3']
          , solution: "-repeat-4-times--true-repeat_cake-5-false--true-repeat_cake-5-false--true-repeat_cake-5-false--true-repeat_cake-5-false-"
          , hints: [
            // no blocks
            sharedHints.noBlocks
            // inside repeat block missing
            , {
              regexDescription: "missing the repeat block",
              regex: regexInsideRepeatNotFound()
              , hintHtml: `Remember to place the pieces of cake block inside of the repeat block.`
              , audio: audios["d2hint1.mp3"]
            }
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-5-'"
              , regex: regexNotFound("cake-5")
              , hintHtml: `How many pieces of cake did Josh put in each row? Make sure you change the pieces of cake block number to match.`
              , audio: audios["d2hint2.mp3"]
            }
            // outside repeat block missing
            , sharedHints.noRepeat
            // *outside repeat block incorrect
            , {
              regexDescription: "must have a '-4-'"
              , regex: regexNotFound("-repeat-4-")
              , hintHtml: `How many rows did Josh cut? Make sure you change the number on the orange repeat block to match.`
              , audio: audios["d2hint3.mp3"]
            }
          ]
        },
        {
          id: "D-3"
          , name: "D-3: Introducing the Repeat Block"
          , description: "This activity has two parts. It asks students to drag the needed row block onto the canvas and update the value. Then It asks the student to Drag the repeat block onto the canvas and update its value."
          , blockOptions: {
            showToolbox: true
            , maxInstances: { "repeat_pillow": 1, "repeat_block": 1 }
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_pillow" }
            , { type: "repeat_block" }
          ]
          , prompt: `<p>Laura, Troy, David, and Jill each have 6 pillows. How many pillows do they have in all? </p><p>Tell the computer how to draw the problem.</p>`
          , promptAudio: audios['d3prompt.mp3']
          , reflections: []
          , successAudio: audios['d3success.mp3']
          , solution: "-repeat-4-times--true-repeat_pillow-6-false--true-repeat_pillow-6-false--true-repeat_pillow-6-false--true-repeat_pillow-6-false-"
          , hints: [
            // no blocks
            sharedHints.noBlocks
            // inside repeat block missing
            , {
              regexDescription: "missing the repeat block",
              regex: regexInsideRepeatNotFound()
              , hintHtml: `Remember to place the pillows block inside of the orange repeat block.`
              , audio: audios["d3hint1.mp3"]
            }
            // outside repeat block missing
            , sharedHints.noRepeat
            // *inside repeat block incorrect
            , {
              regexDescription: "must have a '-6-'"
              , regex: regexNotFound("pillow-6")
              , hintHtml: `How many pillows does each person have? Change the pillows block number to match.`
              , audio: audios["d3hint2.mp3"]
            }
            // *outside repeat block incorrect
            , {
              regexDescription: "must have a '-4-'"
              , regex: regexNotFound("-repeat-4-")
              , hintHtml: `How many people are there? Place this number in the orange repeat block.`
              , audio: audios["d3hint3.mp3"]
            }
          ] // no blocks
        },
      ],
      wordDefinitions: {
        circle_block: {
          name: "Circle Block"
          , definitionHtml: "A code block that draws a circle"
          , inlineHtml: `
                    <svg width="100" height="30">
                    <path
                      class="blocklyPath"
                      stroke="white"
                      fill="#5b5ba5"
                      d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 65  v 5  H 95  V 5  H 95  V 22  H 95  V 22  V 26  h -66  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z">
                    </path>
                    <g transform="translate(10,5)">
                      <text font-weight="lighter" font-size="14.6" font-family="sans-serif" fill="white" x="0" y="13">
                        Draw Circle
                      </text>
                    </g>
                  </svg>`
        },
        ball_block: {
          name: " Draw Ball Block"
          , definitionHtml: "A code block that draws a circle"
          , inlineHtml: `
                    <svg width="80" height="30">
                    <path
                      class="blocklyPath"
                      stroke="white"
                      fill="#5b5ba5"
                      d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 65  v 5  H 95  V 5  H 95  V 22  H 95  V 22  V 26  h -66  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z">
                    </path>
                    <g transform="translate(10,5)">
                      <text font-weight="lighter" font-size="14.6" font-family="sans-serif" fill="white" x="0" y="13">
                        Draw ball
                      </text>
                    </g>
                  </svg>`
        },
        connect_block: {
          name: "Connect"
          , definitionHtml: "Make one block attach to another block"
          , inlineHtml: `
                    <svg height="50" width="250" viewBox="60 0 1 65">
                        <g transform="translate(-90,0)">
                        <path
                            stroke="white"
                            fill="#5b5ba5"
                            d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 65.74800109863281  v 5  H 95.74800109863281  V 5  H 95.74800109863281  V 22  H 95.74800109863281  V 22  V 26  h -66.24800109863281  l -6,4  -3,0  -6,-4  h -14.5  H 0 z"
                        ></path>
                        <g transform="translate(10,5)">
                            <text fill="white" x="0" y="13">Draw&nbsp;Circle</text>
                        </g>
                        <g style="display: block;" transform="translate(0,27)">
                            <path
                            stroke="white"
                            fill="#5b5ba5"
                            d=" m 0,0  h 15  l 6,4  3,0  6,-4  h 65.74800109863281  v 5  H 95.74800109863281  V 5  H 95.74800109863281  V 22  H 95.74800109863281  V 22  V 26  h -66.24800109863281  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z"
                            ></path>
                            <g transform="translate(10,5)">
                            <text fill="white" x="0" y="13">Draw&nbsp;Circle</text>
                            </g>
                        </g>
                        </g>
                        <g transform="translate(20,10)">
                        <text x="0" y="13">OR</text>
                        </g>
                        <g style="display: block;" transform="translate(60,0)">
                        <path
                            class="blocklyPath"
                            stroke="white"
                            fill="#a5a55b"
                            d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 94.745849609375  v 5  H 124.745849609375  V 5  H 124.745849609375  V 22  H 124.745849609375  V 26  H 66.30636596679688  l -6,4  -3,0  -6,-4  h -7 a 8 8 0 0,0 -8,8  v 8 a 8 8 0 0,0 8,8  H 124.745849609375  H 124.745849609375  V 50  V 60  h -95.245849609375  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
                                                "
                        ></path>
                        <g transform="translate(10,5)">
                            <text fill="white" x="0" y="13">
                            repeat
                            </text>
                        </g>
                        <g
                            transform="translate(56.567626953125,5)"
                            style="cursor: text;"
                        >
                            <rect
                            fill="#ffffffaa"
                            rx="4"
                            ry="4"
                            x="0"
                            y="0"
                            height="17"
                            width="18.153182983398438"
                            class="blocklyFieldRect"
                            ></rect>
                        </g>
                        <g transform="translate(79.72080993652344,5)">
                            <text fill="white" x="0" y="13">
                            times
                            </text>
                        </g>
                        <g transform="translate(10,31)">
                            <text fill="white" x="0" y="13">
                            do
                            </text>
                        </g>
                        <g transform="translate(37,27)" style="display: block;">
                            <path
                            stroke="white"
                            fill="#5b5ba5"
                            d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 65.74800109863281  v 5  H 95.74800109863281  V 5  H 95.74800109863281  V 22  H 95.74800109863281  V 22  V 26  h -66.24800109863281  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z"
                            ></path>
                            <g transform="translate(10,5)">
                            <text fill="white" x="0" y="13">Draw&nbsp;Circle</text>
                            </g>
                        </g>
                        </g>
                    </svg>`
        },
        repeat_block: {
          name: "Repeat Block"
          , definitionHtml: "<div>This block is made up of two parts. <ol><li><strong>Number Input:</strong> this tells us how many times we should run the code inside the code slot</li><li><strong>Code Slot:</strong> The area we can put other code blocks.</li></ol> This block allows us to do one thing many times</div>"
          , inlineHtml: `
                        <svg height="50" width="100" viewBox="60 0 1 65">
                        <path
                            class="blocklyPath"
                            stroke="white"
                            fill="#a5a55b"
                            d=" m 0,0  m 0,8 a 8 8 0 0,1 8,-8  h 7  l 6,4  3,0  6,-4  h 94.745849609375  v 5  H 124.745849609375  V 5  H 124.745849609375  V 22  H 124.745849609375  V 26  H 66.30636596679688  l -6,4  -3,0  -6,-4  h -7 a 8 8 0 0,0 -8,8  v 8 a 8 8 0 0,0 8,8  H 124.745849609375  H 124.745849609375  V 50  V 60  h -95.245849609375  l -6,4  -3,0  -6,-4  h -6.5 a 8 8 0 0,1 -8,-8 z
                                "
                        ></path>
                        <g transform="translate(10,5)">
                            <text
                            font-weight="lighter"
                            font-size="14.6"
                            font-family="sans-serif"
                            fill="white"
                            x="0"
                            y="13"
                            >
                                repeat
                            </text>
                        </g>
                        <g
                            class="blocklyEditableText"
                            transform="translate(56.567626953125,5)"
                            style="cursor: text;"
                        >
                            <rect
                            fill="#ffffffaa"
                            rx="4"
                            ry="4"
                            x="0"
                            y="0"
                            height="17"
                            width="18.153182983398438"
                            class="blocklyFieldRect"
                            ></rect>
                        </g>
                        <g transform="translate(79.72080993652344,5)">
                            <text
                            font-weight="lighter"
                            font-size="14.6"
                            font-family="sans-serif"
                            fill="white"
                            x="0"
                            y="13"
                            >
                                times
                            </text>
                        </g>
                        <g transform="translate(10,31)">
                            <text
                            font-weight="lighter"
                            font-size="14.6"
                            font-family="sans-serif"
                            fill="white"
                            x="0"
                            y="13"
                            >
                                do
                            </text>
                        </g>
                    </svg > `

        },
        run_button: {
          name: "Run Button, Run"
          , definitionHtml: "The button that tells the computer to make our code do something."
          , inlineHtml: `<v-btn rounded small color="green" class="run-button white--text">Run</v-btn>`
        },
      }
    }
  ]
};

export default data;
