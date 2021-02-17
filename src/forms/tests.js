// data to be used

function importAll(r) {
  let audios = {};
  r.keys().map((item, index) => { audios[item.replace('./', '')] = r(item); });
  return audios;
}

const audios = importAll(require.context('@/assets', false, /\.(mp3)$/));

const preTest = [
  {
    forQuestion: "Jane has 5 rocks. Jack has 4 rocks.",
    question: "How many rocks are there?",
    questionAudio: "",
    inputs: [
      {
        isInput: true,
        name: "jane-rocks",
        // value: 1,
        answerKey: 9,
      },
      {
        isInput: false,
        value: "rocks"
      },
    ],
    standard: "2.0A.4",
    justification: "justification"
  }
  , {
    question: "Find the sum.",
    questionAudio: "",
    inputs: [
      {
        isInput: false,
        value: "8 + 5 = "
      },
      {
        isInput: true,
        name: "8+5",
        // value: 1,
        answerKey: 9,
      },
    ],
    standard: "2.0A.4",
    justification: "justification"
  }
  // , {
  //   forQuestion: "Peter and Fred have 5 coins each.",
  //   question: "How many coins do they have in all?",
  //   questionAudio: "",
  //   inputs: [
  //     {
  //       isInput: true,
  //       name: "peter-coins",
  //       // value: 1,
  //       answerKey: 10,
  //     },
  //     {
  //       isInput: false,
  //       value: "coins"
  //     },
  //   ],
  //   standard: "2.0A.4",
  //   justification: "justification"
  // }
  , {
    forQuestion: "Zach puts his stickers in 4 rows. There are 3 stickers in each row.",
    question: "How many stickers does Zach have?",
    questionAudio: "",
    inputs: [
      {
        isInput: true,
        name: "zach-stickers",
        // value: 1,
        answerKey: 12,
      },
      {
        isInput: false,
        value: "stickers"
      },
    ],
    standard: "2.0A.4",
    justification: "justification"
  }
  , {
    forQuestion: "Jay puts 3 oranges on each tray.",
    question: "How many oranges are on 5 trays?",
    questionAudio: "",
    inputs: [
      {
        isInput: true,
        name: "jay-oranges",
        // value: 1,
        answerKey: 12,
      },
      {
        isInput: false,
        value: "oranges"
      },
    ],
    standard: "2.0A.4",
    justification: "justification"
  }
  , {
    question: "Bill has 6 toy cars. Each car has 4 wheels.",
    questionAudio: "",
    inputs: [
      {
        isInput: false,
        value: "How many wheels are on each car?"
      },
      {
        isInput: true,
        name: "bill-cars-wheels",
        // value: 1,
        answerKey: 4,
      },
      {
        isInput: false,
        value: "How many equal groups of wheels are there?"
      },
      {
        isInput: true,
        name: "bill-cars-groups",
        // value: 1,
        answerKey: 6,
      },
      {
        isInput: false,
        value: "How many wheels are there in all?"
      },
      {
        isInput: true,
        name: "bill-cars-all",
        // value: 1,
        answerKey: 24,
      },
    ],
    containerStyle: `
    display: grid;
    align-items:center;
    grid-template-columns: auto 1fr;
    `,
    inputStyle: "justify-self:start;",
    textStyle: "justify-self:end;",
    standard: "3.0A.1",
    justification: "justification"
  }
  , {
    forQuestion: "Write the math sentences.",
    question: "3 groups of 5",
    questionAudio: "",
    inputs: [
      {
        isInput: true,
        name: "math-sentence-1-a-1",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "+"
      },
      {
        isInput: true,
        name: "math-sentence-1-a-2",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "+"
      },
      {
        isInput: true,
        name: "math-sentence-1-a-3",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "="
      },
      {
        isInput: true,
        name: "math-sentence-1-a-4",
        // value: 1,
        answerKey: 15,
      },
      {
        isInput: true,
        name: "math-sentence-1-m-1",
        // value: 1,
        answerKey: 3,
      },
      {
        isInput: false,
        value: "x"
      },
      {
        isInput: true,
        name: "math-sentence-1-m-2",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "="
      },
      {
        isInput: true,
        name: "math-sentence-1-m-3",
        // value: 1,
        answerKey: 15,
      },
    ],
    containerStyle: `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(7,auto);
    `,
    standard: "3.0A.1",
    justification: "justification"
  }
];

const postTest = [
  {
    question: "Jane has 5 rocks. Jack has 4 rocks. How many rocks are there?",
    questionAudio: "",
    inputs: [
      {
        isInput: true,
        name: "jane-rocks",
        // value: 1,
        answerKey: 9,
      },
      {
        isInput: false,
        value: "rocks"
      },
    ],
    standard: "standard",
    justification: "justification"
  }
  , {
    question: "Find the sum.",
    questionAudio: "",
    inputs: [
      {
        isInput: false,
        value: "8 + 5 = "
      },
      {
        isInput: true,
        name: "8+5",
        // value: 1,
        answerKey: 9,
      },
    ],
    standard: "standard",
    justification: "justification"
  }
  , {
    forQuestion: "Peter and Fred have 5 coins each.",
    question: "How many coins do they have in all?",
    questionAudio: "",
    inputs: [
      {
        isInput: false,
        value: "8 + 5 = "
      },
      {
        isInput: true,
        name: "peter-coins",
        // value: 1,
        answerKey: 10,
      },
    ],
    standard: "standard",
    justification: "justification"
  }
];

export default {
  preTest, postTest
} 
