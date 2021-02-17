// data to be used

function importAll(r) {
  let audios = {};
  r.keys().map((item, index) => { audios[item.replace('./', '')] = r(item); });
  return audios;
}

const audios = importAll(require.context('@/assets', false, /\.(mp3)$/));

const preTest = [
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
