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
            name: "e5992fd2-c0b3-4408-b66a-39a383f0a58e"
            , component: "div"
            , children: [
              {
                name: "61c3d8cb-3d52-44b5-96df-a416f81b0848"
                , component: "div"
                , children: "There are an even number of apples and an odd number of bananas in a box."
              }
              , {
                label: "How many apples and bananas could there be in the box?"
                , name: "e91f5549-00f4-4d1d-9b34-dad0d9bbf4db"
                , type: "number"
              }
            ]
          }
          , {
            name: "ec889744-bb01-406b-a05e-d0980dda2f57"
            , component: "div"
            , children: [
              {
                name: "78293010-d12a-4c13-bddb-31293eef7f6d"
                , component: "div"
                , children: "There are 3 rows of cookies on a tray. There are 4 cookies in each row."
              }
              , {
                label: "How many cookies are on the tray?"
                , name: "356b56a2-79e6-434a-9d7b-079ee856069f"
                , type: "number"
              }
            ]
          }
          , {
            name: "c0a9cf0e-4183-4922-af15-4f21e2ece502"
            , component: "div"
            , children: [
              {
                name: "e26c5fbb-fb53-428a-b827-7679021c6e7c"
                , component: "div"
                , children: "There are 2 shoes in each pair. There are 5 pairs of shoes by the door."
              }
              , {
                label: "How many shoes are there?"
                , name: "9e498511-53cf-46c8-a2a3-3f6b8cc7650f"
                , type: "number"
              }
            ]
          }
          , {
            name: "91665036-84fc-4eec-a080-87d09fa0efce"
            , component: "div"
            , children: [
              {
                name: "e89d544c-712a-42a1-821f-8fe5967709dc"
                , component: "div"
                , children: "There are 5 rows of desks in a classroom. Each row has 3 desks."
              }
              , {
                label: "How many total desks are there?"
                , name: "dc9676fc-d610-47b0-a9d9-2a6217dc83fa"
                , type: "number"
              }
            ]
          }
          , {
            name: "17c7343b-155f-4164-9669-764b7de6bb82"
            , component: "div"
            , children: [
              {
                name: "a85a5ae7-3901-4c22-9cf3-513aaeeec402"
                , component: "div"
                , children: "There are 12 pies on the table. Each row has 3 pies."
              }
              , {
                label: "How many rows are on the table?"
                , name: "a7976784-e050-4894-a987-b0160a9a7695"
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
            id: "8a5e3656-9f21-4612-84eb-ae66b5ca9f42"
            , name: "8a5e3656-9f21-4612-84eb-ae66b5ca9f42"
            , component: "div"
            , children: [
              {
                name: "84b0e12b-a94d-425d-a14f-7ade8441b0c0"
                , component: "div"
                , children: "Ty has 5 cars. Each car has 4 wheels."
              }
              , {
                name: "a17f9169-7294-49c4-9c61-710160650756"
                , component: "div"
                , children: "Use multiplication to find the total number of wheels and write the multiplication sentence."
              }
              , {
                name: "9dcd5e4a-b112-4aed-bca0-f13d454e341d"
                , component: "div"
                , class: "multi-column align-center"
                , children: [
                  {
                    name: "4383155c-6299-48dd-96fc-25aca7b1da49"
                    , type: "number"
                    , label: "cars"
                  }
                  , {
                    name: "cbcff93c-cdd5-433e-8088-7344a70fb20f"
                    , component: "span"
                    , children: "x"
                  }
                  , {
                    name: "ea93db0a-93ac-4d41-8918-b0e4b476552d"
                    , label: "wheels"
                    , type: "number"
                  }
                  , {
                    name: "b492b47f-3624-4382-a1c6-b6c372dbbb88"
                    , component: "span"
                    , children: "="
                  }
                  , {
                    name: "90d3eff0-69da-471e-be09-8e76a63ac00d"
                    , type: "number"
                  }
                ]
              }
            ]
          }
          , {
            label: "Eli reads 2 books each week for 4 weeks. How many books did he read altogether?"
            , name: "35057154-621e-4c4e-ac55-7306700167c0"
            , type: "number"
          }
          , {
            name: "c0dff9ba-6520-4a22-ae38-6c43e8900690"
            , component: "div"
            , children: [
              {
                name: "0bbf6997-7d77-44a4-b8a6-a8cc3163ff1d"
                , component: "div"
                , children: "Find the product."
              }
              , {
                name: "a701dafe-864c-4425-a70b-be743fecf503"
                , component: "div"
                , class: "multi-column align-center"
                , children: [
                  {
                    name: "691fc40f-eddf-4e64-b3c4-32ba7a17d8a0"
                    , component: "span"
                    , children: "3 x 4 = "
                  }
                  , {
                    name: "301100a1-b273-4a4a-9a9e-de73e6f22d62"
                    , type: "number"
                  }
                ]
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
                , children: "Peter, Alli, and Fred have 5 coins each."
              }
              , {
                name: "c0f77e1b-c1ea-4720-8803-eb0c692975e0"
                , label: "How many coins do they have in all?"
                , type: "number"
              }
            ]
          }
          , {
            name: "1fa4d4f6-c138-44b5-8001-95b9ba81bc70"
            , component: "div"
            , children: [
              {
                name: "737a0b6a-9e91-488b-917a-33baf2b023e9"
                , component: "div"
                , children: "A toy car costs $3. A toy truck costs $4"
              }
              , {
                name: "b8c54d4f-cc63-472d-82c4-25677ab438b3"
                , label: "What costs more - 4 cars or 3 trucks?"
                , type: "select"
                , placeholder: "Pick one..."
                , options: {
                  cars: "4 Cars"
                  , trucks: "3 Trucks"
                  , same: "They cost the same"
                }
              }
            ]
          }
          , {
            name: "a4b9d7ee-759b-4eec-b217-7a59e371f07e"
            , component: "div"
            , children: [
              {
                name: "0145eb60-392c-42e2-90c2-9227a826733a"
                , component: "div"
                , children: "Tyler, Aaron, and Jackie have bikes. Each bike has 2 wheels."
              }
              , {
                name: "ca2ec547-dd23-4035-9bd6-8225830e61c3"
                , type: "number"
                , label: "How many wheels do their Bikes have all together?"
              }
            ]
          }
          , {
            name: "658a78a1-3e49-4462-aa4a-e30f1c3e3643"
            , component: "div"
            , children: [
              {
                name: "cb42ea80-3978-4207-967b-e4e330a0d6c4"
                , component: "div"
                , children: "Write the time for the activity. Use A.M. or P.M"
              }
              , {
                name: "a222e091-edcd-4fe9-bddb-0a3fea11d9f6"
                , component: "div"
                , children: "Close to breakfast"
              }
              , {
                name: "c630a326-2f39-4681-ba5e-5318bac5723e"
                , component: "div"
                , class: "multi-column align-center"
                , children: [
                  {
                    name: "44c6a859-91be-405d-9f3e-147386a72f51"
                    , component: "strong"
                    , children: "8:00"
                  }
                  , {
                    name: "4c6146e6-f38b-4dd2-a5a9-049b77e6be5c"
                    , type: "select"
                    , placeholder: "Pick one..."
                    , options: {
                      am: "A.M."
                      , pm: "P.M."
                    }
                  }
                ]
              }
            ]
          }
          , {
            name: "27b0b796-800f-46f4-bd35-8225924b3a5c"
            , component: "div"
            , children: [
              {
                name: "48bb7129-c3b3-4c3f-ac5d-61f8a4e9f331"
                , component: "div"
                , children: "Write the time for the activity. Use A.M. or P.M"
              }
              , {
                name: "62d5e156-bb5d-4317-ac52-e456ea8f8c03"
                , label: "Quarter after 9:00 in the morning."
                , type: "select"
                , placeholder: "Pick one..."
                , options: {
                  am: "A.M."
                  , pm: "P.M."
                }
              }
            ]
          }
          , {
            name: "69498a0d-7a9b-4ddd-80b1-4990e4ff09bb"
            , component: "div"
            , children: [
              {
                name: "ad06916d-f055-4da8-93aa-cbec86d9d4f6"
                , component: "div"
                , children: "How many right angles are in this shape?"
              }
              , {
                name: "735846de-d9eb-49ba-b852-ee3c54f409e7"
                , component: "img"
                , src: "https://vectr.com/bagleric/b2zYQQZaCG.svg?width=150&height=102.33&select=aeDnEcaAO,dtqGRzgoA,a5JHUgkIFH&source=selection"
              }
              , {
                name: "a75530b9-002a-4ab1-8c0a-2a29cb22c52c"
                , type: "number"
              }
            ]
          }
          , {
            name: "16cd63f5-b66d-4dea-8a20-3c406f12c5e7"
            , component: "div"
            , children: [
              {
                name: "fdcaa9fb-4692-4320-a5cf-2e638351e8a0"
                , component: "div"
                , children: "What is the name of this shape?"
              }
              , {
                name: "eaf3904a-2f29-47fa-bafa-91498f4c7b56"
                , component: "img"
                , src: "https://vectr.com/bagleric/guFoCZpw2.svg?width=150&height=150&select=a9yE8WMmJG&source=selection"
              }
              , {
                name: "5d599866-8f2e-4b92-9956-3dd6f5fa8875"
                , type: "select"
                , placeholder: "Pick one..."
                , options: {
                  circle: "circle"
                  , triangle: "triangle"
                  , square: "square"
                  , pentagon: "pentagon"
                  , hexagon: "hexagon"
                  , octagon: "octagon"
                }
              }
            ]
          }
          , {
            name: "bedaff26-0e5f-4a11-9d48-51996066e208"
            , component: "div"
            , children: [
              {
                name: "8603be8b-e829-4e8a-9b6a-a7e181aa0654"
                , component: "div"
                , children: "Round to the nearest ten."
              }
              , {
                name: "995191f9-9e33-4dfb-84eb-a12d99d8e97f"
                , label: "66"
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
            , maxBlocks: 1
          }
          , startingBlocksXml: `<block type="draw_circle" id="bK+~uQDjQp#oOAxbX$_=" x="10" y="65"></block>`
          , blockSelection: []
          , prompt: `Click the <define word="run_button" showInlineHtml>run button</define> below.`
          , promptAudio: audios['Test.mp3']
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-false-circle-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "P-2"
          , name: "P-2: Dragging Blocks onto the canvas"
          , description: "This activity asks the students to drag a block onto the canvas. The student will then click the Run Button in order to compile the code and view it run."
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 1
          }
          , startingBlocksXml: ""
          , blockSelection: [
            {
              type: "draw_circle"
            }
          ]
          , prompt: "Drag a <define word='circle_block' showInlineHtml>circle block</define> onto the page. Press the <define word='run_button' showInlineHtml>run button</define> button."
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-false-circle-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "P-3"
          , name: "P-3: Connecting blocks together"
          , description: "This introduces the concept of connecting two blocks together."
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 2
          }
          , startingBlocksXml: `<block type="draw_circle" id="bK+~uQDjQp#oOAxbX$_=" x="10" y="65"></block>`
          , blockSelection: [
            { type: "draw_circle" }
          ]
          , prompt: `Drag another <define word='circle_block' showInlineHtml>circle block</define> onto the page. <define word='connect_block'>Connect</define> it to the one that's already there. Press the <define word='run_button' showInlineHtml>run button</define>.`
          , promptAudio: audios['Test.mp3']
          , reflections: [
            `By <define word='connect_block'>connecting</define> the two blocks you told the computer to draw two circles. You have written code!`
          ]
          , solution: "-false-circle-true--true-circle-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "P-3-1"
          , name: "P-3-1: Connecting blocks together"
          , description: "This continues on the concept introduced in P-3"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 3
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "draw_ball" }
          ]
          , prompt: `Drag 3 blocks onto the white page. <define word='connect_block'>Connect</define> them all together.`
          , promptAudio: audios['Test.mp3']
          , reflections: [
            `Your pretty good at this!`
          ]
          , solution: "-false-ball-true--true-ball-true--true-ball-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "P-3"
          , name: "P-3: Connecting blocks together"
          , description: "This continues on the concept introduced in P-3"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 5
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "draw_star" }
          ]
          , prompt: `Tell the computer to draw 5 stars. <define word='connect_block'>Connect</define> 5 draw star blocks together.`
          , promptAudio: audios['Test.mp3']
          , reflections: [
            `5 stars, well done!`
          ]
          , solution: "-false-star-true--true-star-true--true-star-true--true-star-true--true-star-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        //TODO add more P-3 activities.
        {
          id: "P-4"
          , name: "P-4: Intro to the Row Block and modifying values"
          , description: "Introduction to Row Blocks. The goal is to introduce them to our first type of loop block."
          , blockOptions: {
            showToolbox: false
            , maxBlocks: 1
          }
          , startingBlocksXml: `<block type="repeat_star" id="bK+~uQDjQp#oOAxbX$_="  x="10" y="65">
                                  <field name="TIMES">7</field>
                                </block>`
          , blockSelection: [
            { type: "repeat_star" }
          ]
          , prompt: `Draw 5 stars. Change the 7 on the block to a 5.`
          , promptAudio: audios['Test.mp3']
          , reflections: [
            "Another 5 Stars! Great job."
            , `We told the computer to do the same thing as last time. This time we only used one block.`
          ]
          , solution: "-false-repeat_star-5-false-"
          , hints: [
            {
              answer: "-false-repeat_star-7-false-"
              , hintHtml: `To draw 5 circles, make sure you change the 7 to a 5.`
              , audio: audios["P-4_hint-1.mp3"]
            }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "P-4-1"
          , name: "P-4-1: Row Block and modifying values"
          , description: "A continuation of concepts introduced in P-4"
          , blockOptions: {
            showToolbox: false
            , maxBlocks: 1
          }
          , startingBlocksXml: `<block type="repeat_ball" id="bK+~uQDjQp#oOAxbX$_="  x="10" y="65">
                                  <field name="TIMES">3</field>
                                </block>`
          , blockSelection: [
            { type: "repeat_ball" }
          ]
          , prompt: `Draw a group of 4 balls. Change the number 3 to a 4`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-false-repeat_ball-4-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "P-4-2"
          , name: "P-4-2: Row Block and modifying values"
          , description: "A continuation of concepts introduced in P-4"
          , blockOptions: {
            showToolbox: false
            , maxBlocks: 1
          }
          , startingBlocksXml: `<block type="repeat_candy" id="bK+~uQDjQp#oOAxbX$_="  x="10" y="65">
                                  <field name="TIMES">2</field>
                                </block>`
          , blockSelection: [
            { type: "repeat_candy" }
          ]
          , prompt: `Draw 6 candies.`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-false-repeat_candy-6-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        // multiple row blocks
        {
          id: "2nd-0"
          , name: "2nd-0: Multiple Row blocks - leading into repeated addition"
          , description: "A continuation of concepts introduced in P-4"
          , blockOptions: {
            showToolbox: false
            , maxBlocks: 3
          }
          , startingBlocksXml: `<block type="repeat_circle" id="m[bfwg2|2]?YL=(!A~m#" x="10" y="65">
                                    <field name="TIMES">3</field>
                                    <next>
                                        <block type="repeat_circle" id="J;%ZCw019N(zc}OIA#+P">
                                            <field name="TIMES">4</field>
                                            <next>
                                                <block type="repeat_circle" id="r:7.AGge{s8;gP9As2Ci">
                                                    <field name="TIMES">5</field>
                                                </block>
                                            </next>
                                        </block>
                                    </next>
                                </block>`
          , blockSelection: [
            { type: "repeat_circle" }
          ]
          , prompt: `Make all of the block numbers 4.`
          , promptAudio: audios['Test.mp3']
          , reflections: [
            `Good Job! This is repeated addition</define>.`
            , `Repeated addition means adding the same number many times.`
          ]
          , solution: "-false-repeat_circle-4-true--true-repeat_circle-4-true--true-repeat_circle-4-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "2nd-0-1"
          , name: "2nd-0-1: Multiple Row blocks - leading into repeated addition"
          , description: "A continuation of concepts introduced in P-4"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 1
          }
          // , startingBlocksXml: `<block type="repeat_circle" id="m[bfwg2|2]?YL=(!A~m#" x="10" y="65">
          //                           <field name="TIMES">3</field>
          //                           <next>
          //                               <block type="repeat_circle" id="J;%ZCw019N(zc}OIA#+P">
          //                                   <field name="TIMES">4</field>
          //                                   <next>
          //                                       <block type="repeat_circle" id="r:7.AGge{s8;gP9As2Ci">
          //                                           <field name="TIMES">5</field>
          //                                       </block>
          //                                   </next>
          //                               </block>
          //                           </next>
          //                       </block>`
          , blockSelection: [
            { type: "repeat_circle" }
          ]
          , prompt: `Tell the computer to draw a row of 5 circles.`
          , promptAudio: audios['Test.mp3']
          , reflections: [
          ]
          , solution: "-false-repeat_circle-5-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "2nd-0-1"
          , name: "2nd-0-1: Multiple Row blocks - leading into repeated addition"
          , description: "A continuation of concepts introduced in P-4"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 3
          }
          // , startingBlocksXml: `<block type="repeat_circle" id="m[bfwg2|2]?YL=(!A~m#" x="10" y="65">
          //                           <field name="TIMES">3</field>
          //                           <next>
          //                               <block type="repeat_circle" id="J;%ZCw019N(zc}OIA#+P">
          //                                   <field name="TIMES">4</field>
          //                                   <next>
          //                                       <block type="repeat_circle" id="r:7.AGge{s8;gP9As2Ci">
          //                                           <field name="TIMES">5</field>
          //                                       </block>
          //                                   </next>
          //                               </block>
          //                           </next>
          //                       </block>`
          , blockSelection: [
            { type: "repeat_circle" }
          ]
          , prompt: `Tell the computer to draw 3 rows. Make each row have 5 circles.`
          , promptAudio: audios['Test.mp3']
          , reflections: [
          ]
          , solution: "-false-repeat_circle-5-true--true-repeat_circle-5-true--true-repeat_circle-5-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "2nd-1"
          , name: "2nd-1: Repeated Addition"
          , description: "A continuation of concepts introduced in 2nd-0"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 3
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_apple" }
          ]
          , prompt: `Tell the computer how to answer the question. There are 3 rows on a table. Each row has 4 apples. How many apples are there in all?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-false-repeat_apple-4-true--true-repeat_apple-4-true--true-repeat_apple-4-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "2nd-2"
          , name: "2nd-2: Repeated Addition"
          , description: "A continuation of concepts introduced in 2nd"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 2
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_tree" }
          ]
          , prompt: `Tell the computer how to answer the question. There are 2 rows of trees at a park. Each row has 3 trees. How many trees are there in all?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-false-repeat_tree-3-true--true-repeat_tree-3-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "2nd-3"
          , name: "2nd-3: Repeated Addition"
          , description: "A continuation of concepts introduced in 2nd"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 5
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_pea" }
          ]
          , prompt: `Jack has 5 pea pods. There are 4 peas in each pod. How many peas does Jack have in all?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-false-repeat_pea-4-true--true-repeat_pea-4-true--true-repeat_pea-4-true--true-repeat_pea-4-true--true-repeat_pea-4-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "2nd-3-1"
          , name: "2nd-3-1: Repeated Addition"
          , description: "A continuation of concepts introduced in 2nd"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 3
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_cookie" }
          ]
          , prompt: `Tell the computer how to find the sum. 5 + 5 + 5 = ?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-false-repeat_cookie-5-true--true-repeat_cookie-5-true--true-repeat_cookie-5-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "2nd-4"
          , name: "2nd-4: Repeated Addition"
          , description: "A continuation of concepts introduced in 2nd"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 4
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_shoe" }
          ]
          , prompt: `There are 4 pairs of shoes by the door. Each pair has 2 shoes. How many shoes are there?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-false-repeat_shoe-2-true--true-repeat_shoe-2-true--true-repeat_shoe-2-true--true-repeat_shoe-2-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "2nd-4-1"
          , name: "2nd-4-1: Repeated Addition"
          , description: "A continuation of concepts introduced in 2nd"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 4
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_apple" }
          ]
          , prompt: `Tell the computer how to find the sum. 3 + 3 + 3 = ?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-false-repeat_apple-3-true--true-repeat_apple-3-true--true-repeat_apple-3-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: false
        },
        {
          id: "2nd-5"
          , name: "2nd-5: Repeated Addition"
          , description: "A continuation of concepts introduced in 2nd"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 3
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_book" }
          ]
          , prompt: `A book case has 3 shelves. Each shelf has 5 books. How many books do we have total?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-false-repeat_book-5-true--true-repeat_book-5-true--true-repeat_book-5-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: true
        },
        // Transition to Multiplication
        {
          id: "P-5"
          , name: "P-5: Intro to the Repeat Block and placing blocks inside"
          , description: ""
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 2
          }
          , startingBlocksXml: `<block type="repeat_block" id="5}b)[uwQL_NqSZtYhv{%" x="10" y="65">
                                  <field name="TIMES">3</field>
                                </block>`
          , blockSelection: [
            { type: "repeat_book" }
          ]
          , prompt: `Drag a bookshelf block onto the page. Place it inside of the <define word="repeat_block" showInlineHtml>repeat block</define>. Click the <define word="run_button">Run button</define>.`
          , promptAudio: audios['Test.mp3']
          , reflections: [
            "We got the same result as last time! This time we only used 2 blocks."
            , `We are now doing multiplication.`
          ]
          , solution: "-repeat-3-times--true-repeat_book-5-false--true-repeat_book-5-false--true-repeat_book-5-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: true
          , isMultiplication: true
        },
        {
          id: "3rd-1"
          , name: "3rd-1: Multiplication"
          , description: "A continuation of concepts introduced in P-5"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 2
            , maxInstances: { "repeat_cake": 1 }
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_cake" }
            , { type: "repeat_block" }
          ]
          , prompt: `A cake was cut into 5 rows. Each row had 6 pieces of cake. How many pieces of cake are there in all?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-repeat-5-times--true-repeat_cake-6-false--true-repeat_cake-6-false--true-repeat_cake-6-false--true-repeat_cake-6-false--true-repeat_cake-6-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: false
          , isMultiplication: true
        },
        {
          id: "3rd-2"
          , name: "3rd-2: Multiplication"
          , description: "A continuation of concepts introduced in P-5"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 2
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_ball" }
            , { type: "repeat_block" }
          ]
          , prompt: `Alex has 4 boxes. Each box has 2 balls. How many balls does Alex have?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-repeat-4-times--true-repeat_ball-2-false--true-repeat_ball-2-false--true-repeat_ball-2-false--true-repeat_ball-2-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: false
          , isMultiplication: true
        },
        {
          id: "3rd-3"
          , name: "3rd-3: Multiplication"
          , description: "A continuation of concepts introduced in P-5"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 2
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_candy" }
            , { type: "repeat_block" }
          ]
          , prompt: `Kay has 3 Bags. Each bag has 7 candies. How many candies does Kay have?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-repeat-3-times--true-repeat_candy-7-false--true-repeat_candy-7-false--true-repeat_candy-7-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: false
          , isMultiplication: true
        },
        {
          id: "3rd-3-1"
          , name: "3rd-3-1: Multiplication"
          , description: "A continuation of concepts introduced in P-5"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 2
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_tree" }
            , { type: "repeat_block" }
          ]
          , prompt: `Find the product. 3 x 4 = ? <i>Hint: Draw 3 rows with 4 trees in each row.</i>`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-repeat-3-times--true-repeat_tree-4-false--true-repeat_tree-4-false--true-repeat_tree-4-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: false
          , isMultiplication: true
        },
        {
          id: "3rd-4"
          , name: "3rd-4: Multiplication"
          , description: "A continuation of concepts introduced in P-5"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 2
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_pillow" }
            , { type: "repeat_block" }
          ]
          , prompt: `Jack, Troy, and Sara each have 6 pillows. How many pillows do they have in all?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-repeat-3-times--true-repeat_pillow-6-false--true-repeat_pillow-6-false--true-repeat_pillow-6-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: false
          , isMultiplication: true
        },
        {
          id: "3rd-4-1"
          , name: "3rd-4-1: Multiplication"
          , description: "A continuation of concepts introduced in P-5"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 2
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_ball" }
            , { type: "repeat_block" }
          ]
          , prompt: `Find the product. 5 x 8 = ?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-repeat-5-times--true-repeat_ball-8-false--true-repeat_ball-8-false--true-repeat_ball-8-false--true-repeat_ball-8-false--true-repeat_ball-8-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: false
          , isMultiplication: true
        },
        {
          id: "3rd-5"
          , name: "3rd-5: Multiplication"
          , description: "A continuation of concepts introduced in P-5"
          , blockOptions: {
            showToolbox: true
            , maxBlocks: 2
          }
          , startingBlocksXml: ``
          , blockSelection: [
            { type: "repeat_cookie" }
            , { type: "repeat_block" }
          ]
          , prompt: `Jane baked cookies on a pan. Each row had 7 cookies. There were 4 rows on the pan. How many cookies does Jane have?`
          , promptAudio: audios['Test.mp3']
          , reflections: []
          , solution: "-repeat-4-times--true-repeat_cookie-7-false--true-repeat_cookie-7-false--true-repeat_cookie-7-false--true-repeat_cookie-7-false-"
          , hints: [
            // {
            //   answer: ""
            //   , hintHtml: ``
            // }
          ]
          , isAddition: false
          , isMultiplication: true
        },
      ],
      postModule: {
        inputs: [
          {
            name: "6c618586-0450-4eef-947d-c5fb1643374e"
            , component: "div"
            , children: [
              {
                name: "43894292-3b03-411d-885a-88e6657e56c2"
                , component: "div"
                , children: "There are an even number of grapes and an odd number of carrots on a plate."
              }
              , {
                label: "How many grapes and carrots could there be on the plate?"
                , name: "2448b8ab-45db-4517-800c-2b2d3f3504b9"
                , type: "number"
              }
            ]
          }
          , {
            name: "b60c7e39-25e0-4a23-81a1-eda98680e1cc"
            , component: "div"
            , children: [
              {
                name: "414b4b61-4f81-48e7-a6df-09507af14b90"
                , component: "div"
                , children: "There are 3 cookies on each row in a tray. There are 12 cookies in all."
              }
              , {
                label: "How many rows are on the tray?"
                , name: "dc8034d0-0d7a-4411-a39f-d1e202e3dbc3"
                , type: "number"
              }
            ]
          }
          , {
            name: "59c795c2-1a7a-4699-879e-6f567a0f82b3"
            , component: "div"
            , children: [
              {
                name: "cc0d4f9c-aa45-400d-9be5-afd5a4bfb816"
                , component: "div"
                , children: "There are 10 pies on the table. Each row has 5 pies."
              }
              , {
                label: "How many rows are on the table?"
                , name: "75e11a6e-61e3-4067-a222-970aaee9e0ee"
                , type: "number"
              }
            ]
          }
          , {
            name: "459401bd-f1f2-4b8a-9205-95aa0b971d3e"
            , component: "div"
            , children: [
              {
                name: "85b51437-9369-4ab0-8855-46eb8988fe67"
                , component: "div"
                , children: "There are 5 boxes of apples. Each box has 4 apples."
              }
              , {
                label: "How many apples are there?"
                , name: "7aa873fd-a48c-4bae-ab86-0a121af92531"
                , type: "number"
              }
            ]
          }
          , {
            name: "0d59d659-18b8-4bc1-aabc-ff04d5e88adf"
            , component: "div"
            , children: [
              {
                name: "02f96520-b963-474a-a443-64f5a9dd0e87"
                , component: "div"
                , children: "There are 2 shoes in each pair."
              }
              , {
                label: "If there are 10 shoes in all, how many pairs of shoes are there?"
                , name: "5cc0c44f-8b47-4072-94b6-69545730daac"
                , type: "number"
              }
            ]
          }
          , {
            name: "0a7c5309-4bab-43c5-896d-460dc143ef19"
            , component: "div"
            , children: [
              {
                name: "0787f097-f8df-4096-84c8-a03ccfd3d894"
                , component: "div"
                , children: "Find the sum. "
              }
              , {
                label: "7+4 = ?"
                , class: "multi-column align-center"
                , name: "0716a4d3-6ed4-4d17-98dd-853cee57bf91"
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
            label: "Sue sleeps 8 hours each night. How many hours does she sleep in 3 nights?"
            , name: "3bb2218c-d77e-4c15-b6f8-6f2402fc4682"
            , type: "number"
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
            name: "359e31db-8da4-4c0a-a85c-3191dfde376c"
            , component: "div"
            , children: [
              {
                name: "e1441cf9-4bcd-46d0-96cd-7152aacf1f18"
                , component: "div"
                , children: "Sara, Jane, Greg, and Henry have 4 coins each."
              }
              , {
                name: "52a3076f-dfc9-498f-a0d8-8e33d6589ed1"
                , type: "number"
                , label: "How many coins do they have in all?"
              }
            ]
          }
          , {
            name: "6e75a426-88cd-4d9e-b425-cefeea5f1f1f"
            , component: "div"
            , children: [
              {
                name: "cd7ee99d-9327-4337-b85c-e7517d939a80"
                , component: "div"
                , children: "A toy boat costs $2. A toy plane costs $5."
              }
              , {
                label: "What costs more - 4 boats or 2 planes?"
                , name: "18e32a15-863c-4338-95d5-a9480510119f"
                , type: "select"
                , placeholder: "Pick one..."
                , options: {
                  boats: "4 boats"
                  , planes: "2 planes"
                  , same: "They cost the same."
                }
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
          , {
            name: "0e00e6dc-0651-4a1a-980f-365fd7659215"
            , component: "div"
            , children: [
              {
                name: "9df0aba3-98ff-4667-8a5a-6c610cf8e617"
                , component: "div"
                , children: "Write the time for the activity. Use A.M. or P.M."
              }
              , {
                name: "23484e28-f228-41be-9f17-d92fc9071941"
                , component: "div"
                , children: "Close to bed-time"
              }
              , {
                name: "07ad103b-b606-4681-b272-e1f74bb736cd"
                , component: "div"
                , class: "multi-column align-center"
                , children: [
                  {
                    name: "c45a0321-0e8a-43b9-aaea-5d81713fbcdf"
                    , component: "strong"
                    , children: "8:00"
                  }
                  , {
                    name: "8ed01391-0fa6-4a72-85b1-2363efb0decb"
                    , type: "select"
                    , placeholder: "Pick one..."
                    , options: {
                      am: "A.M."
                      , pm: "P.M."
                    }
                  }
                ]
              }
            ]
          }
          , {
            name: "2c1db8e7-c646-4dd1-bd78-189d35d20338"
            , component: "div"
            , children: [
              {
                name: "ab5778ab-02e4-462d-8c91-09056d231053"
                , component: "div"
                , children: "Write the time. Use A.M. or P.M."
              }
              , {
                name: "7934b6c7-2cd1-4bf1-a6ee-702564e5502a"
                , label: "Quarter before 9:00 in the morning."
                , type: "select"
                , placeholder: "Pick one..."
                , options: {
                  am: "A.M."
                  , pm: "P.M."
                }
              }
            ]
          }
          , {
            name: "86b29202-f8d6-47f3-87fd-079caa710863"
            , component: "div"
            , children: [
              {
                name: "cbc6d978-09a3-4945-a1aa-6c557b69de44"
                , component: "div"
                , children: "How many right angles are in this shape?"
              }
              , {
                name: "b2f0485b-02c7-400e-969f-e42f0964d7e3"
                , component: "img"
                , src: "https://vectr.com/bagleric/jpfNDTlde.svg?width=150&height=144.74&select=cpTaEfQiA,iumIvp1cS&source=selection"
              }
              , {
                name: "c288a289-38b8-469e-ac84-1d0df1ad44a1"
                , type: "number"
              }
            ]
          }
          , {
            name: "0dbf2d02-38a7-4408-b20f-8fdc3b119405"
            , component: "div"
            , children: [
              {
                name: "1e06f394-b5de-4eaf-9b55-da5312e69bb8"
                , component: "div"
                , children: "What is the name of this shape?"
              }
              , {
                name: "a194aba2-1555-441a-ad5f-e996dec35081"
                , component: "img"
                , src: "https://vectr.com/bagleric/hcMmSr5s.svg?width=150&height=158.55&select=b3LoNg95M&source=selection"
              }
              , {
                name: "8f64f2af-7354-43d9-9539-fc86eb4fc81a"
                , type: "select"
                , placeholder: "Pick one..."
                , options: {
                  circle: "circle"
                  , triangle: "triangle"
                  , square: "square"
                  , pentagon: "pentagon"
                  , hexagon: "hexagon"
                  , octagon: "octagon"
                }
              }
            ]
          }
          , {
            name: "7bbd26b0-4f4f-4a1b-80c7-296851ec9bb9"
            , component: "div"
            , children: [
              {
                name: "0e9f9959-acd7-4077-943b-793b6b2fa946"
                , component: "div"
                , children: "Round to the nearest ten."
              }
              , {
                name: "d45013c6-b176-401c-a506-2147bba12c8d"
                , label: "53"
                , type: "number"
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
