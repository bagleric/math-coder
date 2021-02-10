// data to be used

function importAll(r) {
  let audios = {};
  r.keys().map((item, index) => { audios[item.replace('./', '')] = r(item); });
  return audios;
}

const audios = importAll(require.context('@/assets', false, /\.(mp3)$/));

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
      preModule: {
        inputs: [
          {
            name: "ec44-bb01-406b-a05e-d0980dda2f57"
            , component: "div"
            , children: [
              {
                name: "7829-d12a-4c13-bddb-31293eef7f6d"
                , component: "div"
                , children: "Jane has 5 rocks. Jack has 4 rocks."
              }
              , {
                label: "How many rocks are there?"
                , name: "356b56a2-79e6-434a-9d7b-079ee856069f"
                , type: "number"
              }
            ]
          }
          , {
            name: "4696957d-4673-4235-93af-23d3eaef70da"
            , component: "div"
            , children: [
              {
                name: "a85a5ae7-3901-4c22-9cf3-513aaeeec402"
                , component: "div"
                , children: "Find the sum. "
              }
              , {
                label: "8 + 5 = ?"
                , name: "150ecd39-9fc9-4b47-beaf-9684fd8d8a94"
                , type: "number"
              }
            ]
          }
          , {
            name: "59547ca5-fa16-4705-89c2-684effead424"
            , component: "div"
            , children: [
              {
                name: "66895ee6-069f-434f-a704-a54b164b22c0"
                , component: "div"
                , children: "Peter and Fred have 5 coins each."
              }
              , {
                name: "c0f77e1b-c1ea-4720-8803-eb0c692975e0"
                , label: "How many coins do they have in all?"
                , type: "number"
              }
            ]
          }
        ],
        results: {}
      },
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
          , prompt: `<p>The blocks on the white page are going to tell the computer what to do.</p><p>Click the <define word="run_button" showInlineHtml>run button</define> below to see what happens.</p>`
          , promptAudio: audios['p1prompt.mp3']
          , reflections: []
          , solution: "-false-repeat_circle-5-false-"
          , hints: []
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
          , prompt: `<p>The blocks on the white page are going to tell the computer what to do.</p><p>Change the 7 on the block to a 4. Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['a1prompt.mp3']
          , reflections: []
          , successAudio: audios['a1success.mp3']
          , solution: "-false-repeat_ball-4-false-"
          , hints: [
            {
              answer: "-false-repeat_ball-7-false-"
              , hintHtml: `To draw 4 balls, make sure you change the 7 to a 4.`
              , audio: audios["a1hint1.mp3"]
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
          , prompt: `<p>Tell the computer to draw 8 books.</p><p>Change the 5 on the block to an 8. Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['a2prompt.mp3']
          , reflections: []
          , successAudio: audios['a2success.mp3']
          , solution: "-false-repeat_book-8-false-"
          , hints: [
            {
              answer: "-false-repeat_book-5-false-"
              , hintHtml: `To draw 8 books, make sure you change the 5 to an 8.`
              , audio: audios["a2hint1.mp3"]
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
          , prompt: `<p>Tell the computer to draw 7 pieces of candy.</p><p>Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['a3prompt.mp3']
          , reflections: []
          , successAudio: audios['a3success.mp3']
          , solution: "-false-repeat_candy-7-false-"
          , hints: [
            {
              answer: "-false-repeat_candy-3-false-"
              , hintHtml: `To draw 7 pieces of candy, make sure you change the 3 to a 7.`
              , audio: audios["a3hint1.mp3"]
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
          , prompt: `<p>Tell the computer to draw 6 cookies. Drag the block onto the white page.</p><p>Change the 4 on the block to a 6. Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['b1prompt.mp3']
          , reflections: []
          , successAudio: audios['b1success.mp3']
          , solution: "-false-repeat_cookie-6-false-"
          , hints: [
            {
              answer: "-false-repeat_cookie-4-false-"
              , hintHtml: `To draw 6 cookies, make sure you change the 4 to a 6.`
              , audio: audios["b1hint1.mp3"]
            },
            {
              answer: "-"
              , hintHtml: `Remember to Drag the blocks onto the white page.`
              , audio: audios["dragOntoPage.mp3"]
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
          , prompt: `<p>Tell the computer to draw 5 pillows. Drag the block onto the white page.</p><p>Change the 9 on the block to a 5. Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['b2prompt.mp3']
          , reflections: []
          , successAudio: audios['b2success.mp3']
          , solution: "-false-repeat_pillow-5-false-"
          , hints: [
            {
              answer: "-false-repeat_pillow-9-false-"
              , hintHtml: `To draw 5 pillows, make sure you change the 9 to a 5.`
              , audio: audios["b2hint1.mp3"]
            },
            {
              answer: "-"
              , hintHtml: `Remember to Drag the blocks onto the white page.`
              , audio: audios["dragOntoPage.mp3"]
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
          , prompt: `<p>Tell the computer to draw 5 stars.</p><p>Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['b3prompt.mp3']
          , reflections: []
          , successAudio: audios['b3success.mp3']
          , solution: "-false-repeat_star-5-false-"
          , hints: [
            {
              answer: "-false-repeat_star-7-false-"
              , hintHtml: `To draw 5 stars, make sure you change the 7 to a 5.`
              , audio: audios["b3hint1.mp3"]
            },
            {
              answer: "-"
              , hintHtml: `Remember to Drag the blocks onto the white page.`
              , audio: audios["dragOntoPage.mp3"]
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
          , prompt: `<p>Tell the computer to draw 5 apples.</p><p>Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['c1aprompt.mp3']
          , reflections: []
          , successAudio: audios['c1asuccess.mp3']
          , solution: "-false-repeat_apple-5-false-"
          , hints: [
            {
              answer: "-false-repeat_apple-4-false-"
              , hintHtml: `To draw 5 apples, make sure you change the 4 to a 5.`
              , audio: audios["c1ahint1.mp3"]
            },
            {
              answer: "-"
              , hintHtml: `Remember to Drag the blocks onto the white page.`
              , audio: audios["dragOntoPage.mp3"]
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
          , prompt: `<p>Tell the computer to draw 3 rows of 5 apples.</p> To do this drag the repeat block onto the white page. Place the apple block inside of the repeat block.<p>Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['c1bprompt.mp3']
          , reflections: []
          , successAudio: audios['c1bsuccess.mp3']
          , solution: "-repeat-3-times--true-repeat_apple-5-false--true-repeat_apple-5-false--true-repeat_apple-5-false-"
          , hints: [
            {
              answer: "-false-repeat_apple-5-false-"
              , hintHtml: `Make sure you drag the repeat block onto the white page too.`
              , audio: audios["dragRepeatHint.mp3"]
            },
            {
              answer: "-"
              , hintHtml: `Remember to Drag the blocks onto the white page.`
              , audio: audios["dragOntoPage.mp3"]
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
          , prompt: `<p>Tell the computer to draw 4 trees.</p><p>Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['c2aprompt.mp3']
          , reflections: []
          , successAudio: audios['c2asuccess.mp3']
          , solution: "-false-repeat_tree-4-false-"
          , hints: [
            {
              answer: "-false-repeat_tree-5-false-"
              , hintHtml: `To draw 4 trees, make sure you change the 5 to a 4.`
              , audio: audios["c2ahint1.mp3"]
            },
            {
              answer: "-"
              , hintHtml: `Remember to Drag the blocks onto the white page.`
              , audio: audios["dragOntoPage.mp3"]
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
          , prompt: `<p>Tell the computer to draw 3 rows of 4 trees.</p> <p>To do this drag the repeat block onto the white page. Place the tree block inside of the repeat block.Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['c2bprompt.mp3']
          , reflections: []
          , successAudio: audios['c2bsuccess.mp3']
          , solution: "-repeat-3-times--true-repeat_tree-4-false--true-repeat_tree-4-false--true-repeat_tree-4-false-"
          , hints: [
            {
              answer: "-false-repeat_tree-4-false-"
              , hintHtml: `Make sure you drag the repeat block onto the white page too.`
              , audio: audios["dragRepeatHint.mp3"]
            },
            {
              answer: "-"
              , hintHtml: `Remember to Drag the blocks onto the white page.`
              , audio: audios["dragOntoPage.mp3"]
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
                                <block>`
          , blockSelection: [
            { type: "repeat_tree" }
            , { type: "repeat_block" }
          ]
          , prompt: `<p>Tell the computer to draw 4 rows of 4 trees.</p> Change the repeat number from a 3 to a 4. Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['c2cprompt.mp3']
          , reflections: []
          , successAudio: audios['c2csuccess.mp3']
          , solution: "-repeat-4-times--true-repeat_tree-4-false--true-repeat_tree-4-false--true-repeat_tree-4-false--true-repeat_tree-4-false-"
          , hints: [
            {
              answer: "-repeat-3-times--true-repeat_tree-4-false--true-repeat_tree-4-false--true-repeat_tree-4-false-"
              , hintHtml: `Make sure you change the orange repeat block number to a 4.`
              , audio: audios["c2chint1.mp3"]
            },
            {
              answer: "-"
              , hintHtml: `Remember to Drag the blocks onto the white page.`
              , audio: audios["dragOntoPage.mp3"]
            }
          ]
        },
        {
          id: "C-3a"
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
          , prompt: `<p>Jack has 2 pea pods. Each pea pod has 6 peas.</p><p>Tell the computer how to draw the problem. Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['c3aprompt.mp3']
          , reflections: []
          , successAudio: audios['c3asuccess.mp3']
          , solution: "-repeat-2-times--true-repeat_pea-6-false--true-repeat_pea-6-false-"
          // -repeat-2-times--true-repeat_pea-6-false--true-repeat_pea-6-false-
          , hints: [
            {
              //default pea number
              answer: "-false-repeat_pea-5-false-"
              , hintHtml: `To draw 6 peas, make sure you change the pea pod block number to a 6.`
              , audio: audios["c3ahint1.mp3"]
            },
            {
              //default pea number
              answer: "-false-repeat_pea-6-false-"
              , hintHtml: `Don't forget to add the repeat block.`
              , audio: audios["c3ahint4.mp3"]
            },
            {
              //default pea number and default row number
              answer: "-repeat-3-times--true-repeat_pea-5-false--true-repeat_pea-5-false--true-repeat_pea-5-false-"
              , hintHtml: `To draw 6 peas, make sure you change the pea pod block number to a 6.`
              , audio: audios["c3ahint1.mp3"]
            },
            {
              // correct repeat block number wrong Pea number
              answer: "-repeat-2-times--true-repeat_pea-5-false--true-repeat_pea-5-false-"
              , hintHtml: `To draw 6 peas, make sure you change the pea pod block number to a 6.`
              , audio: audios["c3ahint1.mp3"]
            },
            {
              // default repeat block number & empty
              answer: "-repeat-3-times-"
              , hintHtml: `Remember to place the pea pod block inside of the repeat block.`
              , audio: audios["c3ahint2.mp3"]
            },
            {
              // default repeat block number correct Pea number
              answer: "-repeat-3-times--true-repeat_pea-6-false--true-repeat_pea-6-false--true-repeat_pea-6-false-"
              , hintHtml: `To draw 2 pea pods, make sure you change the repeat block number to a 2.`
              , audio: audios["c3ahint3.mp3"]
            },
            {
              // they haven't done anything
              answer: "-"
              , hintHtml: `Remember to Drag the blocks onto the white page.`
              , audio: audios["dragOntoPage.mp3"]
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
          , prompt: `<p>Sara cut the cake at a party. She made 4 rows. Each row had 5 pieces of cake. </p><p>Tell the computer how to draw the problem. Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['d2prompt.mp3']
          , reflections: []
          , successAudio: audios['d2success.mp3']
          , solution: "-repeat-4-times--true-repeat_cake-5-false--true-repeat_cake-5-false--true-repeat_cake-5-false--true-repeat_cake-5-false-"
          , hints: [
            {
              //default cake number
              answer: "-false-repeat_cake-4-false-"
              , hintHtml: `To draw 5 pieces of cake, make sure you change the pieces of cake block number to a 5.`
              , audio: audios["d2hint1.mp3"]
            },
            {
              //default cake number
              answer: "-false-repeat_cake-5-false-"
              , hintHtml: `Don't forget to add the repeat block.`
              , audio: audios["c3ahint4.mp3"]
            },
            {
              //default cake number and default row number
              answer: "-repeat-3-times--true-repeat_cake-4-false--true-repeat_cake-4-false--true-repeat_cake-4-false-"
              , hintHtml: `To draw 5 pieces of cake, make sure you change the pieces of cake block number to a 5.`
              , audio: audios["d2hint1.mp3"]
            },
            {
              // correct repeat block number wrong cake number
              answer: "-repeat-4-times--true-repeat_cake-4-false--true-repeat_cake-4-false-"
              , hintHtml: `To draw 5 pieces of cake, make sure you change the pieces of cake block number to a 5.`
              , audio: audios["d2hint1.mp3"]
            },
            {
              // default repeat block number & empty
              answer: "-repeat-3-times-"
              , hintHtml: `Remember to place the pieces of cake block inside of the repeat block.`
              , audio: audios["d2hint2.mp3"]
            },
            {
              // default repeat block number correct cake number
              answer: "-repeat-3-times--true-repeat_cake-5-false--true-repeat_cake-5-false--true-repeat_cake-5-false-"
              , hintHtml: `To draw 4 rows of cake, make sure you change the repeat block number to a 4.`
              , audio: audios["d2hint3.mp3"]
            },
            {
              // they haven't done anything
              answer: "-"
              , hintHtml: `Remember to Drag the blocks onto the white page.`
              , audio: audios["dragOntoPage.mp3"]
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
          , prompt: `<p>Sara, Troy, David, and Jill each have 6 pillows. How many pillows do they have in all? </p><p>Tell the computer how to draw the problem. Then click <define word="run_button" showInlineHtml>run</define>.</p>`
          , promptAudio: audios['d3prompt.mp3']
          , reflections: []
          , successAudio: audios['d3success.mp3']
          , solution: "-repeat-4-times--true-repeat_pillow-6-false--true-repeat_pillow-6-false--true-repeat_pillow-6-false--true-repeat_pillow-6-false-"
          , hints: [
            {
              //default pillow number
              answer: "-false-repeat_pillow-9-false-"
              , hintHtml: `To draw 6 pillows, make sure you change the pillows block number to a 6.`
              , audio: audios["d3hint1.mp3"]
            },
            {
              //default pillow number
              answer: "-false-repeat_pillow-9-false-"
              , hintHtml: `Don't forget to add the repeat block.`
              , audio: audios["c3ahint4.mp3"]
            },
            {
              //default pillow number and default row number
              answer: "-repeat-3-times--true-repeat_pillow-9-false--true-repeat_pillow-9-false--true-repeat_pillow-9-false-"
              , hintHtml: `To draw 6 pillows, make sure you change the pillows block number to a 6.`
              , audio: audios["d3hint1.mp3"]
            },
            {
              // correct repeat block number wrong pillow number
              answer: "-repeat-4-times--true-repeat_pillow-9-false--true-repeat_pillow-9-false--true-repeat_pillow-9-false--true-repeat_pillow-9-false-"
              , hintHtml: `To draw 6 pillows, make sure you change the pillows block number to a 6.`
              , audio: audios["d3hint1.mp3"]
            },
            {
              // default repeat block number & empty
              answer: "-repeat-3-times-"
              , hintHtml: `Remember to place the pillows block inside of the repeat block.`
              , audio: audios["d3hint2.mp3"]
            },
            {
              // default repeat block number correct pillow number
              answer: "-repeat-3-times--true-repeat_pillow-6-false--true-repeat_pillow-6-false--true-repeat_pillow-6-false-"
              , hintHtml: `Make sure to count the number of people with pillows. Put that number into the repeat block.`
              , audio: audios["d3hint3.mp3"]
            },
            {
              // they haven't done anything
              answer: "-"
              , hintHtml: `Remember to Drag the blocks onto the white page.`
              , audio: audios["dragOntoPage.mp3"]
            }
          ]
        },
      ],
      postModule: {
        inputs: [
          {
            name: "ec44-bb01-406b-a05e-"
            , component: "div"
            , children: [
              {
                name: "7829-d12a-4c13-bddb-"
                , component: "div"
                , children: "Jane has 5 rocks. Jack has 4 rocks."
              }
              , {
                label: "How many rocks are there?"
                , name: "356b56a2-79e6-434a-9d7b-"
                , type: "number"
              }
            ]
          }
          , {
            name: "4696957d-4673-4235-93af-"
            , component: "div"
            , children: [
              {
                name: "a85a5ae7-3901-4c22-9cf3-"
                , component: "div"
                , children: "Find the sum. "
              }
              , {
                label: "8 + 5 = ?"
                , name: "150ecd39-9fc9-4b47-beaf-"
                , type: "number"
              }
            ]
          }
          , {
            name: "59547ca5-fa16-4705-89c2-"
            , component: "div"
            , children: [
              {
                name: "66895ee6-069f-434f-a704-"
                , component: "div"
                , children: "Peter and Fred have 5 coins each."
              }
              , {
                name: "c0f77e1b-c1ea-4720-8803-"
                , label: "How many coins do they have in all?"
                , type: "number"
              }
            ]
          }

          , {
            id: "8a5e3656-9f21-4612-84eb-ae66b5ca9f42"
            , name: "15bb5272-2044-4bbe-b7f7-e24ddf98d7f9"
            , component: "div"
            , children: [
              {
                name: "cebee9bf-584a-41c4-9d4f-263e8b5eb13c"
                , component: "div"
                , children: "Caden has 2 dogs. Each dog has 4 toys. How many toys do the dogs have altogether?"
              }
              , {
                name: "1932ea21-33a0-49e9-a083-313f7e4b717b"
                , component: "div"
                , class: "multi-column align-center"
                , children: [
                  {
                    name: "540195ba-b59e-48bb-8894-4f97400f529b"
                    , type: "number"
                    , label: "dogs"
                  }
                  , {
                    name: "1fff0b4d-b1a3-4f06-aae5-99e835377b34"
                    , component: "div"
                    , children: " x "
                  }
                  , {
                    name: "3ce9716b-40cc-4c2b-8774-08109b7b5c4e"
                    , label: "toys"
                    , type: "number"
                  }
                  , {
                    name: "1880ebbd-24b3-4020-84ba-e00767926760"
                    , component: "div"
                    , children: "="
                  }
                  , {
                    name: "c4be8a71-f5ff-43d1-a982-fb377d8be4c8"
                    , type: "number"
                  }
                ]
              }
            ]
          }
          , {
            name: "82d6f45a-473e-4d8a-a7f0-51bcfd3b736b"
            , component: "div"
            , children: [
              {
                name: "4bc91e5c-cc06-498f-a830-58db85ae77ec"
                , component: "div"
                , children: "Find the product."
              }
              , {
                name: "ec441d9f-2248-46e9-90c1-9e3e39f25bb6"
                , component: "div"
                , class: "multi-column align-center"
                , children: [
                  {
                    name: "c71414d5-335a-4bee-9e1d-93312982feea"
                    , component: "span"
                    , children: "4 x 2 = "
                  }
                  , {
                    name: "eb5e3fd0-7406-421c-bd27-0f519c543867"
                    , type: "number"
                  }
                ]
              }
            ]
          }

          , {
            name: "5cd59817-4f05-477e-846d-8f71ec72e6a7"
            , component: "div"
            , children: [
              {
                name: "5fd76404-86fb-4fdb-b466-2189554abef9"
                , component: "div"
                , children: "Arnold, Taylor, and Troy each have 3 pens."
              }
              , {
                name: "cb5fc375-8f3d-4bb4-a657-8fef026e488d"
                , type: "number"
                , label: "How many pens do they have together?"
              }
            ]
          }
        ],
        results: {}
      },
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
