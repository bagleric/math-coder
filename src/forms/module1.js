// data to be used

const data = {
    modules: [
        {
            id: "199e4bb2-04d1-4a95-9965-d74c259e17fc",
            name: "Module 1",
            description: "Help students understand the concept of grouping and repeated grouping.",
            standards: [
                {
                    name: "",
                    id: "2.0A.4",
                    description: "Use addition to find the total number of objects arranged in rectangular arrays with up to 5 rows and up to 5 columns; write an equation to express the total as a sum of equal addends"
                },
                {
                    name: "",
                    id: "3.OA.1",
                    description: "Interpret the products of whole numbers, such as interpreting 5 × 7 as the total number of objects in 5 groups of 7 objects each."
                }
            ],
            preModule: {
                inputs: [
                    {
                        name: "e5992fd2-c0b3-4408-b66a-39a383f0a58e",
                        component: "div",
                        children: [
                            {
                                name: "61c3d8cb-3d52-44b5-96df-a416f81b0848",
                                component: "div",
                                children: "There are an even number of apples and an odd number of bananas in a box."
                            },
                            {
                                label: "How many apples and bananas could there be in the box?",
                                name: "e91f5549-00f4-4d1d-9b34-dad0d9bbf4db",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "ec889744-bb01-406b-a05e-d0980dda2f57",
                        component: "div",
                        children: [
                            {
                                name: "78293010-d12a-4c13-bddb-31293eef7f6d",
                                component: "div",
                                children: "There are 3 rows of cookies on a tray. There are 4 cookies in each row."
                            },
                            {
                                label: "How many cookies are on the tray?",
                                name: "356b56a2-79e6-434a-9d7b-079ee856069f",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "c0a9cf0e-4183-4922-af15-4f21e2ece502",
                        component: "div",
                        children: [
                            {
                                name: "e26c5fbb-fb53-428a-b827-7679021c6e7c",
                                component: "div",
                                children: "There are 2 shoes in each pair. There are 5 pairs of shoes by the door."
                            },
                            {
                                label: "How many shoes are there?",
                                name: "9e498511-53cf-46c8-a2a3-3f6b8cc7650f",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "91665036-84fc-4eec-a080-87d09fa0efce",
                        component: "div",
                        children: [
                            {
                                name: "e89d544c-712a-42a1-821f-8fe5967709dc",
                                component: "div",
                                children: "There are 5 rows of desks in a classroom. Each row has 3 desks."
                            },
                            {
                                label: "How many total desks are there?",
                                name: "dc9676fc-d610-47b0-a9d9-2a6217dc83fa",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "17c7343b-155f-4164-9669-764b7de6bb82",
                        component: "div",
                        children: [
                            {
                                name: "a85a5ae7-3901-4c22-9cf3-513aaeeec402",
                                component: "div",
                                children: "There are 12 pies on the table. Each row has 3 pies."
                            },
                            {
                                label: "How many rows are on the table?",
                                name: "a7976784-e050-4894-a987-b0160a9a7695",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "4696957d-4673-4235-93af-23d3eaef70da",
                        component: "div",
                        children: [
                            {
                                name: "a85a5ae7-3901-4c22-9cf3-513aaeeec402",
                                component: "div",
                                children: "Find the sum. "
                            },
                            {
                                label: "8 + 5 = ?",
                                name: "150ecd39-9fc9-4b47-beaf-9684fd8d8a94",
                                type: "number"
                            }
                        ]
                    },
                    {
                        id: "8a5e3656-9f21-4612-84eb-ae66b5ca9f42",
                        name: "8a5e3656-9f21-4612-84eb-ae66b5ca9f42",
                        component: "div",
                        children: [
                            {
                                name: "84b0e12b-a94d-425d-a14f-7ade8441b0c0",
                                component: "div",
                                children: "Ty has 5 cars. Each car has 4 wheels."
                            },
                            {
                                name: "a17f9169-7294-49c4-9c61-710160650756",
                                component: "div",
                                children: "Use multiplication to find the total number of wheels and write the multiplication sentence."
                            },
                            {
                                name: "9dcd5e4a-b112-4aed-bca0-f13d454e341d",
                                component: "div",
                                class: "multi-column align-center",
                                children: [
                                    {
                                        name: "4383155c-6299-48dd-96fc-25aca7b1da49",
                                        type: "number",
                                        label: "cars"
                                    },
                                    {
                                        name: "cbcff93c-cdd5-433e-8088-7344a70fb20f",
                                        component: "span",
                                        children: "x"
                                    },
                                    {
                                        name: "ea93db0a-93ac-4d41-8918-b0e4b476552d",
                                        label: "wheels",
                                        type: "number"
                                    },
                                    {
                                        name: "b492b47f-3624-4382-a1c6-b6c372dbbb88",
                                        component: "span",
                                        children: "="
                                    },
                                    {
                                        name: "90d3eff0-69da-471e-be09-8e76a63ac00d",
                                        type: "number"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Eli reads 2 books each week for 4 weeks. How many books did he read altogether?",
                        name: "35057154-621e-4c4e-ac55-7306700167c0",
                        type: "number"
                    },
                    {
                        name: "c0dff9ba-6520-4a22-ae38-6c43e8900690",
                        component: "div",
                        children: [
                            {
                                name: "0bbf6997-7d77-44a4-b8a6-a8cc3163ff1d",
                                component: "div",
                                children: "Find the product."
                            },
                            {
                                name: "a701dafe-864c-4425-a70b-be743fecf503",
                                component: "div",
                                class: "multi-column align-center",
                                children: [
                                    {
                                        name: "691fc40f-eddf-4e64-b3c4-32ba7a17d8a0",
                                        component: "span",
                                        children: "3 x 4 = "
                                    },
                                    {
                                        name: "301100a1-b273-4a4a-9a9e-de73e6f22d62",
                                        type: "number"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "59547ca5-fa16-4705-89c2-684effead424",
                        component: "div",
                        children: [
                            {
                                name: "66895ee6-069f-434f-a704-a54b164b22c0",
                                component: "div",
                                children: "Peter, Alli, and Fred have 5 coins each."
                            },
                            {
                                name: "c0f77e1b-c1ea-4720-8803-eb0c692975e0",
                                label: "How many coins do they have in all?",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "1fa4d4f6-c138-44b5-8001-95b9ba81bc70",
                        component: "div",
                        children: [
                            {
                                name: "737a0b6a-9e91-488b-917a-33baf2b023e9",
                                component: "div",
                                children: "A toy car costs $3. A toy truck costs $4"
                            },
                            {
                                name: "b8c54d4f-cc63-472d-82c4-25677ab438b3",
                                label: "What costs more - 4 cars or 3 trucks?",
                                type: "select",
                                placeholder: "Pick one...",
                                options: {
                                    cars: "4 Cars",
                                    trucks: "3 Trucks",
                                    same: "They cost the same"
                                }
                            }
                        ]
                    },
                    {
                        name: "a4b9d7ee-759b-4eec-b217-7a59e371f07e",
                        component: "div",
                        children: [
                            {
                                name: "0145eb60-392c-42e2-90c2-9227a826733a",
                                component: "div",
                                children: "Tyler, Aaron, and Jackie have bikes. Each bike has 2 wheels."
                            },
                            {
                                name: "ca2ec547-dd23-4035-9bd6-8225830e61c3",
                                type: "number",
                                label: "How many wheels do their Bikes have all together?"
                            }
                        ]
                    },
                    {
                        name: "658a78a1-3e49-4462-aa4a-e30f1c3e3643",
                        component: "div",
                        children: [
                            {
                                name: "cb42ea80-3978-4207-967b-e4e330a0d6c4",
                                component: "div",
                                children: "Write the time for the activity. Use A.M. or P.M"
                            },
                            {
                                name: "a222e091-edcd-4fe9-bddb-0a3fea11d9f6",
                                component: "div",
                                children: "Close to breakfast"
                            },
                            {
                                name: "c630a326-2f39-4681-ba5e-5318bac5723e",
                                component: "div",
                                class: "multi-column align-center",
                                children: [
                                    {
                                        name: "44c6a859-91be-405d-9f3e-147386a72f51",
                                        component: "strong",
                                        children: "8:00"
                                    },
                                    {
                                        name: "4c6146e6-f38b-4dd2-a5a9-049b77e6be5c",
                                        type: "select",
                                        placeholder: "Pick one...",
                                        options: {
                                            am: "A.M.",
                                            pm: "P.M."
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "27b0b796-800f-46f4-bd35-8225924b3a5c",
                        component: "div",
                        children: [
                            {
                                name: "48bb7129-c3b3-4c3f-ac5d-61f8a4e9f331",
                                component: "div",
                                children: "Write the time for the activity. Use A.M. or P.M"
                            },
                            {
                                name: "62d5e156-bb5d-4317-ac52-e456ea8f8c03",
                                label: "Quarter after 9:00 in the morning.",
                                type: "select",
                                placeholder: "Pick one...",
                                options: {
                                    am: "A.M.",
                                    pm: "P.M."
                                }
                            }
                        ]
                    },
                    {
                        name: "69498a0d-7a9b-4ddd-80b1-4990e4ff09bb",
                        component: "div",
                        children: [
                            {
                                name: "ad06916d-f055-4da8-93aa-cbec86d9d4f6",
                                component: "div",
                                children: "How many right angles are in this shape?"
                            },
                            {
                                name: "735846de-d9eb-49ba-b852-ee3c54f409e7",
                                component: "img",
                                src: "https://vectr.com/bagleric/b2zYQQZaCG.svg?width=150&height=102.33&select=aeDnEcaAO,dtqGRzgoA,a5JHUgkIFH&source=selection"
                            },
                            {
                                name: "a75530b9-002a-4ab1-8c0a-2a29cb22c52c",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "16cd63f5-b66d-4dea-8a20-3c406f12c5e7",
                        component: "div",
                        children: [
                            {
                                name: "fdcaa9fb-4692-4320-a5cf-2e638351e8a0",
                                component: "div",
                                children: "What is the name of this shape?"
                            },
                            {
                                name: "eaf3904a-2f29-47fa-bafa-91498f4c7b56",
                                component: "img",
                                src: "https://vectr.com/bagleric/guFoCZpw2.svg?width=150&height=150&select=a9yE8WMmJG&source=selection"
                            },
                            {
                                name: "5d599866-8f2e-4b92-9956-3dd6f5fa8875",
                                type: "select",
                                placeholder: "Pick one...",
                                options: {
                                    circle: "circle",
                                    triangle: "triangle",
                                    square: "square",
                                    pentagon: "pentagon",
                                    hexagon: "hexagon",
                                    octagon: "octagon"
                                }
                            }
                        ]
                    },
                    {
                        name: "bedaff26-0e5f-4a11-9d48-51996066e208",
                        component: "div",
                        children: [
                            {
                                name: "8603be8b-e829-4e8a-9b6a-a7e181aa0654",
                                component: "div",
                                children: "Round to the nearest ten."
                            },
                            {
                                name: "995191f9-9e33-4dfb-84eb-a12d99d8e97f",
                                label: "66",
                                type: "number"
                            }
                        ]
                    }
                ],
                results: {}
            },
            activities: [
                {
                    id: "0664afb6-e8a8-4ced-be69-ce2bab0e3c32",
                    name: "Compiling with the Run Button",
                    description: "This activity starts out with a block already on the canvas. The student will click the Run Button in order to compile the code.",
                    blockOptions: {
                        showToolbox: false,
                        trashcan: false,
                        maxBlocks: 1
                    },
                    startingBlocksXml: `<block type="draw_circle" id="bK+~uQDjQp#oOAxbX$_=" x="10" y="65"></block>`,
                    blockSelection: [
                    ],
                    reflections: [
                        "Well done. You ran the code! It drew one circle."
                    ],
                    prompt: "Click the <define word='run_button' showInlineHtml>run button</define> below.",
                    solution: "-false-circle-false-",
                    isSingle: true
                },
                {
                    id: "d2280c13-d2cc-456c-b40a-014830b52616",
                    name: "Dragging blocks onto the canvas",
                    description: "This activity asks the students to drag a block onto the canvas. The student will then click the Run Button in order to compile the code and view it run.",
                    blockOptions: {
                        maxBlocks: 1,
                    },
                    blockSelection: [
                        {
                            type: "draw_circle"
                        }
                    ],
                    reflections: [
                        "Well done! You ran the code!"
                    ],
                    prompt: "Drag a <define word='circle_block' showInlineHtml>circle block</define> onto the page. Press the <define word='run_button' showInlineHtml>run button</define> button.",
                    solution: "-false-circle-false-",
                    isSingle: true
                },
                {
                    id: "b572bba0-3eec-475e-aadd-a42d99e96268",
                    name: "Connecting blocks together",
                    description: "This introduces the concept of connecting two blocks together.",
                    blockOptions: {
                        maxBlocks: 2
                    },
                    startingBlocksXml: `<block type="draw_circle" id="bK+~uQDjQp#oOAxbX$_=" x="10" y="65"></block>`,
                    blockSelection: [
                        {
                            type: "draw_circle"
                        }
                    ],
                    prompt: "Drag another <define word='circle_block' showInlineHtml>circle block</define> onto the page. <define word='connect_block'>Connect</define> it to the one that's already there. Press the <define word='run_button' showInlineHtml>run button</define>.",

                    solution: "-false-circle-true--true-circle-false-",
                    reflections: [
                        "By <define word='connect_block'>connecting</define> the two blocks you told the computer to draw a circle. You have written code!"
                    ],
                    isSingle: true
                },
                {
                    id: "a32bd178-30af-436b-8f37-52cfe1bfb6b0",
                    name: "Connecting 5 blocks together",
                    description: "Learn about connecting multiple blocks together",
                    blockOptions: {
                        maxBlocks: 5
                    },
                    blockSelection: [
                        {
                            type: "draw_circle",
                            limit: 5
                        }
                    ],
                    prompt: "Tell the computer to draw 5 circles.<define word='connect_block'>Connect</define> 5 <define word='circle_block' showInlineHtml>circle blocks</define> together.",
                    solution: "-false-circle-true--true-circle-true--true-circle-true--true-circle-true--true-circle-false-",
                    reflections: [
                        "<p>Well done! We are telling our computer to add.</p>",
                        "<p>In this case, our math sentence looks like this:</p> <p><strong>1 circle + 1 circle + 1 circle + 1 circle + 1 circle = 5 circles</strong>.</p>"
                    ],
                    isSingle: true
                },
                {
                    id: "5c85e072-0da1-4341-a79c-a1fa647f592a",
                    name: "Intro to Row blocks",
                    description: "Introduction to Row Blocks. The goal is to introduce them to our first type of loop block.",
                    blockOptions: {
                        maxBlocks: 1
                    },
                    blockSelection: [
                        {
                            type: "repeat_circle"
                        },
                    ],
                    solution: "-false-repeat_circle-5-false-",
                    prompt: "Drag a <define word='row_block' showInlineHtml>Row Block</define> onto the page.",
                    reflections: [
                        "We told the computer to do the same thing as last time. This time we only used one block."
                    ],
                    isAddition: true
                },
                {
                    id: "841b0d32-fd3e-420e-b742-56992ddcdcee",
                    name: "Modifying the Row block",
                    description: "The goal is to modify the number of items in a row.",
                    blockOptions: {
                        maxBlocks: 1,
                        showToolbox: false,
                    },
                    startingBlocksXml: `<block type="repeat_circle" id="bK+~uQDjQp#oOAxbX$_="  x="10" y="65"></block>`,
                    blockSelection: [],
                    solution: "-false-repeat_circle-3-false-",
                    prompt: "Change the 5 on the <define word='row_block' showInlineHtml>Draw circles block</define> to a 3.",
                    reflections: [
                        "Changing the number changes the number of items in the row."
                    ],
                    isAddition: true
                },
                {
                    id: "31ba48c3-875e-4fbe-9b5e-ee20b369eba0",
                    name: "Multiple Row blocks: addition sentences",
                    description: "The goal is to connect multiple rows blocks together. This will form a math sentence.",
                    blockOptions: {
                        maxBlocks: 3
                    },
                    blockSelection: [
                        {
                            type: "repeat_circle"
                        },
                    ],
                    solution: "-false-repeat_circle-5-true--true-repeat_circle-5-true--true-repeat_circle-5-false-",
                    prompt: "Drag 3 <define word='row_block' showInlineHtml>Draw circles blocks</define> onto the page. Connect them together.",
                    reflections: [
                        "Well done! Connecting these blocks together make the math sentence 5 + 5 + 5 = 15."
                    ],
                    isAddition: true
                },
                {
                    id: "cb00ebd3-fa66-4aad-903b-7c356a2f9aaf",
                    name: "Learn: Modify multiple row blocks",
                    description: "The goal is to connect multiple rows blocks together and then modify each of their values to produce a math sentence.",
                    startingBlocksXml: `
                    <block type="repeat_circle" id="m[bfwg2|2]?YL=(!A~m#" x="10" y="65">
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
                    </block>`,
                    blockOptions: {
                        maxBlocks: 3,
                        showToolbox: false
                    },
                    blockSelection: [],
                    solution: "-false-repeat_circle-4-true--true-repeat_circle-4-true--true-repeat_circle-4-false-",
                    prompt: "Change all of the numbers on the blocks to 4. This will make the math sentence 4 + 4 + 4 = __ ",
                    reflections: [
                        "We are doing repeated addition."
                    ],
                    isAddition: true
                },
                {
                    id: "c52da5a4-0642-4350-b638-68491384ede9",
                    name: "Challenge: Multiple modified Row blocks",
                    description: "The goal is to connect multiple rows blocks together.",
                    blockOptions: {
                        maxBlocks: 4
                    },
                    blockSelection: [
                        {
                            type: "repeat_circle"
                        },
                    ],
                    solution: "-false-repeat_circle-3-true--true-repeat_circle-3-true--true-repeat_circle-3-true--true-repeat_circle-3-false-",
                    prompt: "Drag 4 blocks onto the page. Make all of their numbers a 3.",
                    reflections: [
                        "This code makes the addition sentence 3 + 3 + 3 + 3 = __.",
                        " It makes the multiplication sentence 4 x 3 = __."
                    ],
                    isAddition: true
                },
                {
                    id: "d8feab5b-458c-4b74-9541-cb3813c76d95",
                    name: "Multiple modified Row blocks",
                    description: "Transition from repeated addition to multiplication.",
                    blockOptions: {
                        maxBlocks: 5
                    },
                    blockSelection: [
                        {
                            type: "repeat_circle"
                        },
                    ],
                    solution: "TODO",
                    prompt: "Drag 5 blocks onto the page. Make all of their numbers 5.",
                    reflections: [
                        "This code gives us the addition sentence: 5 + 5 + 5 + 5 = 20.",
                        "It also gives us the multiplication sentence 4 x 5 = 20"
                    ],
                    isAddition: true,
                    isMultiplication: true
                },
                {
                    id: "8b911749-ce73-4ef1-a285-ad0a4ae5e4ee",
                    name: "The intro to the Repeat Block",
                    description: "Introduction to the repeat block. The repeat block will already be on the canvas. The goal is to learn how to place one block [the circle block] inside another block [the repeat block].",
                    blockOptions: {
                        maxBlocks: 2
                    },
                    startingBlocksXml: `<block type="repeat_block" id="bK+~uQDjQp#oOAxbX$_="  x="10" y="65"></block>`,
                    blockSelection: [
                        {
                            type: "repeat_circle"
                        },
                    ],
                    solution: "-repeat-5-times--true-repeat_circle-5-false--true-repeat_circle-5-false--true-repeat_circle-5-false--true-repeat_circle-5-false--true-repeat_circle-5-false-",
                    prompt: "Drag a <define word='row_block' showInlineHtml>Draw circles block</define> onto the page. Place it inside the <define word='repeat_block' showInlineHtml>repeat block</define>. Click the  <define word='run_button' showInlineHtml>run button</define> button.",
                    reflections: [
                        "We told the computer to do the same thing as last time. This time we only used two blocks."
                    ],
                    isMultiplication: true
                },
                {
                    id: "c1b6e7a8-4aec-43c1-81ce-f7dc9584c0bc",
                    name: "The Repeat Block",
                    description: "Learn about the repeat block. In this activity you will observe the default behavior of the repeat block. You should expect it to repeat the action inside it the number of times found in the input.",
                    blockOptions: {
                        maxBlocks: 2
                    },
                    blockSelection: [
                        {
                            type: "repeat_circle"
                        },
                        {
                            type: "repeat_block"
                        }
                    ],
                    prompt: "Drag a <define word='repeat_block' showInlineHtml>repeat block</define>  onto the page. Then place a <define word='row_block' showInlineHtml>row block</define> inside of it.",
                    solution: "-repeat-5-times--true-circle-false--true-circle-false--true-circle-false--true-circle-false--true-circle-false-",
                    reflections: [
                        "Well done!"
                    ],
                    isMultiplication: true
                },
                // {
                //     id: "626ebc9a-ccf7-49a0-a337-067eebc93580",
                //     name: "Adjusting the Repeat Block",
                //     description: "Learn how to adjust the repeat block.",
                //     blockOptions: {
                //         maxBlocks: 2,
                //         trashcan: false,
                //         showToolbox: false
                //     },
                //     startingBlocksXml:
                //         `<block type="repeat_block" id="5}b)[uwQL_NqSZtYhv{%" x="10" y="65">
                //         <field name="TIMES">5</field>
                //         <statement name="DO">
                //           <block type="repeat_circle" id="bK+~uQDjQp#oOAxbX$_="></block>
                //         </statement>
                //       </block>`,
                //     blockSelection: [
                //     ],
                //     prompt: "Tell the computer to draw 7 rows. Change the 5 in the <define word='repeat_block' showInlineHtml>repeat block</define> to a 7.",
                //     solution: "-repeat-7-times--true-circle-false--true-circle-false--true-circle-false--true-circle-false--true-circle-false--true-circle-false--true-circle-false-"
                //     ,
                //     isMultiplication: true
                // },
                // {
                //     id: "ec2475cf-621b-426e-8168-86b042650724",
                //     name: "A lot of repeating",
                //     description: "Learn about placing one repeat block inside another one.",
                //     blockOptions: {
                //         maxBlocks: 3
                //     },
                //     startingBlocksXml:
                //         `<block type="repeat_block" id="5}b)[uwQL_NqSZtYhv{%" x="10" y="65">
                //             <field name="TIMES">5</field>
                //             <statement name="DO">
                //             <block type="repeat_circle" id="bK+~uQDjQp#oOAxbX$_="></block>
                //             </statement>
                //         </block>`,
                //     blockSelection: [
                //         {
                //             type: "draw_circle"
                //         },
                //     ],
                //     prompt: "Tell the computer to draw 5 rows of 5 circles. Drag a <define word='circle_block' showInlineHtml>circle block</define> onto the page. Place it inside the second <define word='repeat_block' showInlineHtml>repeat block</define>.",
                //     solution: "-repeat-5-times--repeat-5-times--true-circle-false--true-circle-false--true-circle-false--true-circle-false--true-circle-false--repeat-5-times--true-circle-false--true-circle-false--true-circle-false--true-circle-false--true-circle-false--repeat-5-times--true-circle-false--true-circle-false--true-circle-false--true-circle-false--true-circle-false--repeat-5-times--true-circle-false--true-circle-false--true-circle-false--true-circle-false--true-circle-false--repeat-5-times--true-circle-false--true-circle-false--true-circle-false--true-circle-false--true-circle-false-",
                //     reflections: [
                //         "We have taught our computer to do <define word='multiplication'>repeated addition</define>.",
                //         "<p>A <define word='row'>row</define> is from side to side like standing in a line. It looks like this:</p> <define showInlineHtml word='row'>row</define>",
                //         "We have 5 <define word='row'>rows</define> with 5 circles in each <define word='row'>row</define>. Each <define word='row'>row</define> has the same number of items.",
                //         "<span>A <define word='column'>column</define> is up and down like climbing a ladder. It looks like this:</span><define showInlineHtml word='column'>column</define>",
                //         "We also have 5 <define word='column'>columns</define> with 5 circles in each <define word='column'>column</define>. Each <define word='column'>column</define> has the same number of items.",
                //         "Repeated addition is also called <define word='multiplication'>multiplication</define>."
                //     ],
                //     isMultiplication: true
                // },
                // {
                //     id: "c12e692c-8293-47c6-8e4b-7fce1e509e83",
                //     name: "Multiplying using the repeat block",
                //     description: "Modify the defaults of the nested repeat blocks",
                //     blockOptions: {
                //         maxBlocks: 3,
                //         showToolbox: false,
                //         trashCan: false
                //     },
                //     startingBlocksXml:
                //         `<block type="repeat_block" id="5}b)[uwQL_NqSZtYhv{%" x="10" y="65">
                //             <field name="TIMES">5</field>
                //             <statement name="DO">
                //                 <block type="repeat_block" id="bK+~uQDjQp#oOAxbX$_=">
                //                     <field name="TIMES">5</field>
                //                     <statement name="DO">
                //                         <block type="draw_circle" id="bK+~uQDjQp#oOAxbX$_="></block>
                //                     </statement>
                //                 </block>
                //             </statement>
                //         </block>`,
                //     blockSelection: [
                //     ],
                //     prompt: "Now, let’s <define word='multiplication'>multiply</define> using blocks. Change the outside <define word='repeat_block' showInlineHtml>repeat block</define> number to 3. Change the inside <define word='repeat_block' showInlineHtml>repeat block</define> number to 4.",
                //     solution: "-repeat-3-times--repeat-4-times--true-circle-false--true-circle-false--true-circle-false--true-circle-false--repeat-4-times--true-circle-false--true-circle-false--true-circle-false--true-circle-false--repeat-4-times--true-circle-false--true-circle-false--true-circle-false--true-circle-false-",
                //     reflections: [
                //         "There are 3 rows with 4 circles in each row. ",
                //         "There are 12 circles total."
                //     ],
                //     isMultiplication: true
                // },
                {
                    id: "4fcf1ebf-3044-4573-91ec-2da17ea82591",
                    name: "Multiplying",
                    description: "Explore multiplication again.",
                    blockOptions: {
                        maxBlocks: 2
                    },
                    blockSelection: [
                        {
                            type: "repeat_circle"
                        },
                        {
                            type: "repeat_block",
                        }
                    ],
                    prompt: "Tell the computer to <define word='multiplication'>multiply</define>. Draw a row of 3 circles. Repeat it 4 times.",
                    solution: "-repeat-4-times--true-repeat_circle-3-false--true-repeat_circle-3-false--true-repeat_circle-3-false--true-repeat_circle-3-false-",
                    reflections: [
                        "3 rows of 4 circles make the same number of circles as 4 rows of 3 circles.",
                        "There are 12 circles again. That was the same as last time.",
                        "In math we say it like this: 3 times 4 equals 12, and we write it like this: 3 x 4 = 12.",
                        "This means that we have 3 rows of 4 items and 12 items in total.",
                        "If we had 5 rows of 3 items, we would write it like this: 5 x 3."
                    ],
                    isMultiplication: true
                },
                {
                    id: "1ddb9234-5940-44c1-a595-6122373e3be4",
                    name: "Applying multiplication",
                    description: "Solve the multiplication problem",
                    blockOptions: {
                        maxBlocks: 2
                    },
                    blockSelection: [
                        {
                            type: "repeat_circle"
                        },
                        {
                            type: "repeat_block"
                        }
                    ],
                    prompt: "Use <define word='coding'>coding</define>. Find the value of the missing number. 5 x 3 = ____.",
                    reflections: [
                        "You have written the correct code. Well done!",
                        "Think about what we told the computer to do.",
                        "5 x 3 = 15"
                    ],
                    solution: "-repeat-5-times--true-repeat_circle-3-false--true-repeat_circle-3-false--true-repeat_circle-3-false--true-repeat_circle-3-false--true-repeat_circle-3-false-"
                    ,
                    isMultiplication: true
                },
                {
                    id: "bfc930c1-8edd-434a-be4b-c4b7297e7e7d",
                    name: "Applying multiplication",
                    description: "Solve the multiplication problem",
                    blockOptions: {
                        maxBlocks: 2
                    },
                    blockSelection: [
                        {
                            type: "repeat_circle"
                        },
                        {
                            type: "repeat_block"
                        }
                    ],
                    prompt: "Use <define word='coding'>coding</define>. Find the value of the missing number. 4 x 5 = ____.",
                    reflections: [
                        "You have written the correct code. Well done!",
                        "Here is the math sentence: 4 x 5 = 20"
                    ],
                    isMultiplication: true,
                    solution: "-repeat-4-times--true-repeat_circle-5-false--true-repeat_circle-5-false--true-repeat_circle-5-false--true-repeat_circle-5-false-"
                },
                {
                    id: "d8c70db5-c53c-4bd2-812d-0c5584bec5c8",
                    name: "Applying multiplication",
                    description: "Solve the multiplication problem",
                    blockOptions: {
                        maxBlocks: 2
                    },
                    blockSelection: [
                        {
                            type: "repeat_ball"
                        },
                        {
                            type: "repeat_block"
                        }
                    ],
                    prompt: "Use <define word='coding'>coding</define>. Jake has 4 boxes. Each box has 2 balls. How many balls does he have in total?",
                    reflections: [
                        "You have written the correct code. Well done!",
                        "Here is the math sentence: 4 x 2 = 8"
                    ],
                    isMultiplication: true,
                    solution: "-repeat-4-times--true-repeat_ball-2-false--true-repeat_ball-2-false--true-repeat_ball-2-false--true-repeat_ball-2-false-"
                },
                {
                    id: "a87e0340-da4d-40fd-9758-7b1a947216f5",
                    name: "Applying multiplication",
                    description: "Solve the multiplication problem",
                    blockOptions: {
                        maxBlocks: 2
                    },
                    blockSelection: [
                        {
                            type: "repeat_candy"
                        },
                        {
                            type: "repeat_block"
                        }
                    ],
                    prompt: "Use <define word='coding'>coding</define>. Kay has 3 bags. Each bag has 7 candies. How many candies does she have?",
                    reflections: [
                        "Well done!",
                        "Here is the math sentence: 3 x 7 = 21"
                    ],
                    isMultiplication: true,
                    solution: "-repeat-3-times--true-repeat_candy-7-false--true-repeat_candy-7-false--true-repeat_candy-7-false-"
                },
                {
                    id: "cf8b34f6-480e-4a7e-985b-869403908652",
                    name: "Applying multiplication",
                    description: "Solve the multiplication problem",
                    blockOptions: {
                        maxBlocks: 2
                    },
                    blockSelection: [
                        {
                            type: "repeat_pillow"
                        },
                        {
                            type: "repeat_block"
                        }
                    ],
                    prompt: "Use <define word='coding'>coding</define>. Jack, Troy, and Sara each have 6 pillows. How many pillows do they have in all?",
                    reflections: [
                        "Well done!",
                        "Here is the math sentence: 3 x 6 = 18"
                    ],
                    isMultiplication: true,
                    solution: "-repeat-3-times--true-repeat_pillow-6-false--true-repeat_pillow-6-false--true-repeat_pillow-6-false-"
                },
                {
                    id: "dd179c2b-481e-40cc-9195-00b8a10c378d",
                    name: "Applying multiplication",
                    description: "Solve the multiplication problem",
                    blockOptions: {
                        maxBlocks: 2
                    },
                    blockSelection: [
                        {
                            type: "repeat_cookie"
                        },
                        {
                            type: "repeat_block"
                        }
                    ],
                    prompt: "Use <define word='coding'>coding</define>. Jack baked cookies on a pan. Each row had 4 cookies. There were 7 rows on the pan. How many cookies does Jack have?",
                    reflections: [
                        "Well done!",
                        "Here is the math sentence: 7 x 4 = 28"
                    ],
                    isMultiplication: true,
                    solution: "-repeat-7-times--true-repeat_cookie-4-false--true-repeat_cookie-4-false--true-repeat_cookie-4-false--true-repeat_cookie-4-false--true-repeat_cookie-4-false--true-repeat_cookie-4-false--true-repeat_cookie-4-false-"
                }
            ],
            postModule: {
                inputs: [
                    {
                        name: "6c618586-0450-4eef-947d-c5fb1643374e",
                        component: "div",
                        children: [
                            {
                                name: "43894292-3b03-411d-885a-88e6657e56c2",
                                component: "div",
                                children: "There are an even number of grapes and an odd number of carrots on a plate."
                            },
                            {
                                label: "How many grapes and carrots could there be on the plate?",
                                name: "2448b8ab-45db-4517-800c-2b2d3f3504b9",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "b60c7e39-25e0-4a23-81a1-eda98680e1cc",
                        component: "div",
                        children: [
                            {
                                name: "414b4b61-4f81-48e7-a6df-09507af14b90",
                                component: "div",
                                children: "There are 3 cookies on each row in a tray. There are 12 cookies in all."
                            },
                            {
                                label: "How many rows are on the tray?",
                                name: "dc8034d0-0d7a-4411-a39f-d1e202e3dbc3",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "59c795c2-1a7a-4699-879e-6f567a0f82b3",
                        component: "div",
                        children: [
                            {
                                name: "cc0d4f9c-aa45-400d-9be5-afd5a4bfb816",
                                component: "div",
                                children: "There are 10 pies on the table. Each row has 5 pies."
                            },
                            {
                                label: "How many rows are on the table?",
                                name: "75e11a6e-61e3-4067-a222-970aaee9e0ee",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "459401bd-f1f2-4b8a-9205-95aa0b971d3e",
                        component: "div",
                        children: [
                            {
                                name: "85b51437-9369-4ab0-8855-46eb8988fe67",
                                component: "div",
                                children: "There are 5 boxes of apples. Each box has 4 apples."
                            },
                            {
                                label: "How many apples are there?",
                                name: "7aa873fd-a48c-4bae-ab86-0a121af92531",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "0d59d659-18b8-4bc1-aabc-ff04d5e88adf",
                        component: "div",
                        children: [
                            {
                                name: "02f96520-b963-474a-a443-64f5a9dd0e87",
                                component: "div",
                                children: "There are 2 shoes in each pair."
                            },
                            {
                                label: "If there are 10 shoes in all, how many pairs of shoes are there?",
                                name: "5cc0c44f-8b47-4072-94b6-69545730daac",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "0a7c5309-4bab-43c5-896d-460dc143ef19",
                        component: "div",
                        children: [
                            {
                                name: "0787f097-f8df-4096-84c8-a03ccfd3d894",
                                component: "div",
                                children: "Find the sum. "
                            },
                            {
                                label: "7+4 = ?",
                                class: "multi-column align-center",
                                name: "0716a4d3-6ed4-4d17-98dd-853cee57bf91",
                                type: "number"
                            }
                        ]
                    },
                    {
                        id: "8a5e3656-9f21-4612-84eb-ae66b5ca9f42",
                        name: "15bb5272-2044-4bbe-b7f7-e24ddf98d7f9",
                        component: "div",
                        children: [
                            {
                                name: "cebee9bf-584a-41c4-9d4f-263e8b5eb13c",
                                component: "div",
                                children: "Caden has 2 dogs. Each dog has 4 toys. How many toys do the dogs have altogether?"
                            },
                            {
                                name: "1932ea21-33a0-49e9-a083-313f7e4b717b",
                                component: "div",
                                class: "multi-column align-center",
                                children: [
                                    {
                                        name: "540195ba-b59e-48bb-8894-4f97400f529b",
                                        type: "number",
                                        label: "dogs"
                                    },
                                    {
                                        name: "1fff0b4d-b1a3-4f06-aae5-99e835377b34",
                                        component: "div",
                                        children: " x "
                                    },
                                    {
                                        name: "3ce9716b-40cc-4c2b-8774-08109b7b5c4e",
                                        label: "toys",
                                        type: "number"
                                    },
                                    {
                                        name: "1880ebbd-24b3-4020-84ba-e00767926760",
                                        component: "div",
                                        children: "="
                                    },
                                    {
                                        name: "c4be8a71-f5ff-43d1-a982-fb377d8be4c8",
                                        type: "number"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "Sue sleeps 8 hours each night. How many hours does she sleep in 3 nights?",
                        name: "3bb2218c-d77e-4c15-b6f8-6f2402fc4682",
                        type: "number"
                    },
                    {
                        name: "82d6f45a-473e-4d8a-a7f0-51bcfd3b736b",
                        component: "div",
                        children: [
                            {
                                name: "4bc91e5c-cc06-498f-a830-58db85ae77ec",
                                component: "div",
                                children: "Find the product."
                            },
                            {
                                name: "ec441d9f-2248-46e9-90c1-9e3e39f25bb6",
                                component: "div",
                                class: "multi-column align-center",
                                children: [
                                    {
                                        name: "c71414d5-335a-4bee-9e1d-93312982feea",
                                        component: "span",
                                        children: "4 x 2 = "
                                    },
                                    {
                                        name: "eb5e3fd0-7406-421c-bd27-0f519c543867",
                                        type: "number"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "359e31db-8da4-4c0a-a85c-3191dfde376c",
                        component: "div",
                        children: [
                            {
                                name: "e1441cf9-4bcd-46d0-96cd-7152aacf1f18",
                                component: "div",
                                children: "Sara, Jane, Greg, and Henry have 4 coins each."
                            },
                            {
                                name: "52a3076f-dfc9-498f-a0d8-8e33d6589ed1",
                                type: "number",
                                label: "How many coins do they have in all?"
                            }
                        ]
                    },
                    {
                        name: "6e75a426-88cd-4d9e-b425-cefeea5f1f1f",
                        component: "div",
                        children: [
                            {
                                name: "cd7ee99d-9327-4337-b85c-e7517d939a80",
                                component: "div",
                                children: "A toy boat costs $2. A toy plane costs $5."
                            },
                            {
                                label: "What costs more - 4 boats or 2 planes?",
                                name: "18e32a15-863c-4338-95d5-a9480510119f",
                                type: "select",
                                placeholder: "Pick one...",
                                options: {
                                    boats: "4 boats",
                                    planes: "2 planes",
                                    same: "They cost the same."
                                }
                            }
                        ]
                    },
                    {
                        name: "5cd59817-4f05-477e-846d-8f71ec72e6a7",
                        component: "div",
                        children: [
                            {
                                name: "5fd76404-86fb-4fdb-b466-2189554abef9",
                                component: "div",
                                children: "Arnold, Taylor, and Troy each have 3 pens."
                            },
                            {
                                name: "cb5fc375-8f3d-4bb4-a657-8fef026e488d",
                                type: "number",
                                label: "How many pens do they have together?"
                            }
                        ]
                    },
                    {
                        name: "0e00e6dc-0651-4a1a-980f-365fd7659215",
                        component: "div",
                        children: [
                            {
                                name: "9df0aba3-98ff-4667-8a5a-6c610cf8e617",
                                component: "div",
                                children: "Write the time for the activity. Use A.M. or P.M."
                            },
                            {
                                name: "23484e28-f228-41be-9f17-d92fc9071941",
                                component: "div",
                                children: "Close to bed-time"
                            },
                            {
                                name: "07ad103b-b606-4681-b272-e1f74bb736cd",
                                component: "div",
                                class: "multi-column align-center",
                                children: [
                                    {
                                        name: "c45a0321-0e8a-43b9-aaea-5d81713fbcdf",
                                        component: "strong",
                                        children: "8:00"
                                    },
                                    {
                                        name: "8ed01391-0fa6-4a72-85b1-2363efb0decb",
                                        type: "select",
                                        placeholder: "Pick one...",
                                        options: {
                                            am: "A.M.",
                                            pm: "P.M."
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "2c1db8e7-c646-4dd1-bd78-189d35d20338",
                        component: "div",
                        children: [
                            {
                                name: "ab5778ab-02e4-462d-8c91-09056d231053",
                                component: "div",
                                children: "Write the time. Use A.M. or P.M."
                            },
                            {
                                name: "7934b6c7-2cd1-4bf1-a6ee-702564e5502a",
                                label: "Quarter before 9:00 in the morning.",
                                type: "select",
                                placeholder: "Pick one...",
                                options: {
                                    am: "A.M.",
                                    pm: "P.M."
                                }
                            }
                        ]
                    },
                    {
                        name: "86b29202-f8d6-47f3-87fd-079caa710863",
                        component: "div",
                        children: [
                            {
                                name: "cbc6d978-09a3-4945-a1aa-6c557b69de44",
                                component: "div",
                                children: "How many right angles are in this shape?"
                            },
                            {
                                name: "b2f0485b-02c7-400e-969f-e42f0964d7e3",
                                component: "img",
                                src: "https://vectr.com/bagleric/jpfNDTlde.svg?width=150&height=144.74&select=cpTaEfQiA,iumIvp1cS&source=selection"
                            },
                            {
                                name: "c288a289-38b8-469e-ac84-1d0df1ad44a1",
                                type: "number"
                            }
                        ]
                    },
                    {
                        name: "0dbf2d02-38a7-4408-b20f-8fdc3b119405",
                        component: "div",
                        children: [
                            {
                                name: "1e06f394-b5de-4eaf-9b55-da5312e69bb8",
                                component: "div",
                                children: "What is the name of this shape?"
                            },
                            {
                                name: "a194aba2-1555-441a-ad5f-e996dec35081",
                                component: "img",
                                src: "https://vectr.com/bagleric/hcMmSr5s.svg?width=150&height=158.55&select=b3LoNg95M&source=selection"
                            },
                            {
                                name: "8f64f2af-7354-43d9-9539-fc86eb4fc81a",
                                type: "select",
                                placeholder: "Pick one...",
                                options: {
                                    circle: "circle",
                                    triangle: "triangle",
                                    square: "square",
                                    pentagon: "pentagon",
                                    hexagon: "hexagon",
                                    octagon: "octagon"
                                }
                            }
                        ]
                    },
                    {
                        name: "7bbd26b0-4f4f-4a1b-80c7-296851ec9bb9",
                        component: "div",
                        children: [
                            {
                                name: "0e9f9959-acd7-4077-943b-793b6b2fa946",
                                component: "div",
                                children: "Round to the nearest ten."
                            },
                            {
                                name: "d45013c6-b176-401c-a506-2147bba12c8d",
                                label: "53",
                                type: "number"
                            }
                        ]
                    }
                ],
                results: {}
            },
            wordDefinitions: {
                circle_block: {
                    name: "Circle Block",
                    definitionHtml: "A code block that draws a circle",
                    inlineHtml: `
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
                connect_block: {
                    name: "Connect",
                    definitionHtml: "Make one block attach to another block",
                    inlineHtml: `
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
                    name: "Repeat Block",
                    definitionHtml: "<div>This block is made up of two parts. <ol><li><strong>Number Input:</strong> this tells us how many times we should run the code inside the code slot</li><li><strong>Code Slot:</strong> The area we can put other code blocks.</li></ol> This block allows us to do one thing many times</div>",
                    inlineHtml: `
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
                multiplication: {
                    name: "Multiplication, Multiply",
                    definitionHtml: "This is repeated addition. We add the items from one or more groups of equal items."

                },
                coding: {
                    name: "Coding",
                    definitionHtml: "Creating instructions for a computer to read.This is how we tell computers what to do."
                },
                run_button: {
                    name: "Run Button, Run",
                    definitionHtml: "The button that tells the computer to make our code do something.",
                    inlineHtml: `<v-btn rounded small color="green" class="run-button white--text">Run</v-btn>`
                },
                column: {
                    name: "Column",
                    definitionHtml: "Runs up and down like a ladder",
                    inlineHtml: `<div style='background-color: white; padding: 1em;' data-val='5'>  <div data-val='1' style='width: max-content;'>  <svg height='20' width='20'><circle cx='10' cy='10' r='4' fill='black' /></svg></div>  <div data-val='1' style='width: max-content;'>  <svg height='20' width='20'><circle cx='10' cy='10' r='4' fill='black' /></svg></div>  <div data-val='1' style='width: max-content;'>  <svg height='20' width='20'><circle cx='10' cy='10' r='4' fill='black' /></svg></div>  <div data-val='1' style='width: max-content;'>  <svg height='20' width='20'><circle cx='10' cy='10' r='4' fill='black' /></svg></div>  <div data-val='1' style='width: max-content;'>  <svg height='20' width='20'><circle cx='10' cy='10' r='4' fill='black' /></svg></div></div>`
                },
                row: {
                    name: "Row",
                    definitionHtml: "A row from side to side like standing in a line",
                    inlineHtml: `<div style='background-color: white; padding: 5px;' data-val='1'>  <div data-val='5' style='width: max-content;'>  <svg height='20' width='20'><circle cx='10' cy='10' r='4' fill='black' /></svg>  <svg height='20' width='20'><circle cx='10' cy='10' r='4' fill='black' /></svg>  <svg height='20' width='20'><circle cx='10' cy='10' r='4' fill='black' /></svg>  <svg height='20' width='20'><circle cx='10' cy='10' r='4' fill='black' /></svg>  <svg height='20' width='20'><circle cx='10' cy='10' r='4' fill='black' /></svg></div></div>`
                }
            }
        }
    ]
};

export default data;
