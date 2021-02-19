// data to be used

function importAll(r) {
  let audios = {};
  r.keys().map((item, index) => { audios[item.replace('./', '')] = r(item); });
  return audios;
}

const svgs = {
  pencil: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="400.000000pt" height="100.000000pt" viewBox="0 0 900.000000 222.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,222.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M1090 1354 c-36 -8 -78 -20 -95 -26 -16 -5 -48 -14 -70 -18 -22 -4 -53 -12 -70 -18 -16 -6 -55 -17 -85 -25 -30 -9 -80 -22 -110 -31 -104 -30 -155 -44 -220 -61 -84 -22 -93 -27 -105 -59 -14 -40 13 -59 145 -101 63 -20 131 -42 150 -49 70 -26 106 -38 135 -46 17 -4 41 -12 55 -17 14 -6 52 -18 85 -28 33 -9 71 -22 85 -27 14 -6 39 -14 55 -19 17 -4 50 -15 75 -24 41 -16 146 -16 1305 -11 693 3 2306 8 3585 11 1581 4 2355 9 2420 17 83 9 98 14 117 37 12 14 22 31 23 37 0 7 7 25 15 40 19 38 20 195 2 232 -8 15 -22 44 -32 64 -26 54 -81 105 -121 112 -107 21 -872 25 -3919 25 -2916 -1 -3369 -3 -3425 -15z m6706 -36 c36 -35 73 -180 52 -205 -8 -11 -179 -13 -912 -13 -495 0 -1511 -4 -2256 -10 -745 -5 -1827 -11 -2405 -12 l-1050 -3 0 21 c-1 12 -14 33 -30 47 -26 23 -28 28 -18 46 18 30 16 49 -7 56 -23 7 -26 33 -6 61 14 19 45 19 1643 24 895 3 2380 5 3300 5 1559 0 1673 -1 1689 -17z m175 -12 c59 -68 79 -258 39 -366 -31 -83 -68 -105 -135 -80 -25 9 -25 11 -12 37 21 40 37 115 37 171 0 54 -22 169 -39 200 -6 11 -11 30 -11 41 0 18 6 21 50 21 41 0 54 -5 71 -24z m147 9 c22 -5 31 -15 45 -54 22 -63 24 -263 2 -301 -8 -14 -14 -34 -15 -44 0 -32 -40 -66 -76 -66 -50 0 -58 19 -34 79 31 81 29 229 -6 317 -22 55 -25 68 -13 75 13 8 24 8 97 -6z m-6992 -10 c4 -8 1 -22 -5 -29 -9 -11 -6 -20 15 -41 25 -25 25 -27 9 -45 -17 -19 -16 -21 13 -47 30 -26 31 -27 14 -55 -15 -26 -15 -30 2 -60 18 -29 18 -32 2 -43 -9 -7 -16 -26 -16 -47 0 -20 -7 -41 -15 -48 -8 -7 -15 -21 -15 -32 0 -15 -4 -18 -17 -13 -10 4 -31 11 -48 15 -16 5 -46 14 -65 21 -86 30 -111 38 -202 68 -54 17 -104 31 -112 31 -29 0 -36 33 -18 83 14 39 15 51 3 82 -15 43 -5 61 42 70 48 10 221 58 292 81 36 12 67 19 103 23 7 0 15 -6 18 -14z m7366 -29 c15 -17 32 -42 38 -56 7 -14 18 -38 26 -53 22 -45 19 -184 -6 -241 -12 -25 -29 -50 -38 -55 -10 -5 -86 -13 -170 -17 -160 -7 -191 -1 -173 34 36 72 41 97 41 210 0 84 -4 125 -15 146 -16 31 -19 58 -7 70 4 5 68 5 142 1 l135 -7 27 -32z m-643 -220 c14 -17 4 -97 -21 -152 l-18 -42 -322 -6 c-709 -13 -1225 -16 -3709 -22 l-2587 -7 -7 21 c-7 26 0 42 21 42 17 0 18 14 2 40 -10 16 -9 23 7 41 11 11 19 29 17 39 -2 12 6 19 27 23 16 3 632 6 1368 6 736 1 2000 6 2808 11 809 6 1664 12 1900 13 237 1 446 3 466 5 21 1 41 -4 48 -12z"></path> <path d="M2169 619 c-11 -6 -11 -11 -2 -20 12 -12 43 -6 43 10 0 14 -25 20 -41 10z"></path> <path d="M312 608 c-8 -8 -12 -54 -12 -155 0 -143 0 -143 25 -155 36 -16 53 3 57 65 l3 52 600 0 600 0 3 -53 c3 -45 7 -55 27 -64 19 -8 28 -8 40 2 12 10 15 40 15 162 0 161 -2 167 -55 154 -23 -6 -25 -11 -25 -60 0 -40 -4 -55 -16 -60 -23 -9 -1167 -7 -1181 2 -6 4 -13 32 -15 62 -3 50 -5 55 -28 58 -14 2 -31 -3 -38 -10z"></path> <path d="M1829 602 c-36 -24 -35 -36 3 -42 l33 -5 3 -88 c3 -96 -5 -117 -44 -117 -26 0 -40 -15 -23 -26 17 -10 144 -13 160 -3 17 10 4 25 -26 31 -19 3 -20 12 -23 136 l-3 132 -27 -1 c-15 0 -39 -8 -53 -17z"></path> <path d="M2299 518 c-15 -28 -11 -184 5 -197 21 -18 30 3 27 70 -2 67 16 104 54 111 14 3 34 -1 45 -9 17 -12 20 -25 20 -94 0 -74 1 -79 21 -79 20 0 21 4 17 96 -4 118 -10 125 -111 122 -52 -2 -71 -7 -78 -20z"></path> <path d="M2164 517 c-3 -8 -4 -54 -2 -103 3 -81 5 -89 23 -89 19 0 20 8 23 103 3 97 2 102 -18 102 -11 0 -23 -6 -26 -13z"></path> <path d="M2570 342 c0 -27 10 -33 32 -21 15 8 17 13 7 25 -16 20 -39 17 -39 -4z"></path> </g> </svg> `
  , fork: ` <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="400.000000pt" height="100.000000pt" viewBox="0 0 900.000000 315.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,315.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M6155 2150 c-61 -4 -120 -12 -132 -18 -12 -7 -31 -12 -42 -12 -33 0 -150 -59 -216 -109 -33 -25 -98 -77 -145 -115 -131 -109 -188 -145 -285 -178 -58 -20 -75 -20 -550 -15 -269 3 -537 10 -595 16 -104 10 -334 27 -565 42 -194 11 -388 30 -420 39 -16 5 -73 11 -125 15 -52 3 -129 10 -170 16 -41 5 -120 14 -175 19 -55 6 -113 13 -130 16 -16 3 -79 9 -140 15 -60 5 -132 14 -158 19 -26 6 -83 10 -125 10 -42 1 -106 7 -142 15 -79 17 -545 21 -600 4 -19 -5 -75 -14 -125 -19 -138 -13 -288 -48 -354 -82 -80 -41 -140 -119 -171 -225 -12 -39 -11 -53 5 -128 13 -56 49 -120 95 -165 45 -46 121 -90 154 -90 9 0 27 -5 39 -12 12 -6 48 -15 82 -19 33 -4 89 -14 125 -20 88 -17 772 -17 890 0 47 7 139 16 205 21 66 5 136 13 155 19 19 6 71 11 115 11 44 0 96 4 115 10 19 5 91 14 160 20 69 7 132 13 140 14 26 5 139 15 340 31 378 30 457 35 650 45 107 5 259 14 336 20 219 16 909 13 942 -3 15 -8 45 -22 67 -33 47 -22 114 -70 170 -123 152 -141 326 -232 500 -259 124 -19 743 -22 1020 -4 412 27 654 44 725 53 41 5 123 14 181 19 59 5 119 14 133 20 15 5 51 10 81 10 65 0 85 7 85 30 0 23 -52 30 -249 30 -86 1 -203 5 -261 10 -58 6 -204 12 -325 15 -121 3 -258 10 -305 15 -47 5 -137 12 -200 15 -202 11 -323 34 -340 65 -28 53 112 76 535 90 171 5 357 12 415 15 58 2 238 9 400 13 251 8 301 12 330 27 25 13 30 19 19 25 -22 12 -412 31 -799 40 -195 5 -371 11 -390 15 -19 3 -93 10 -165 15 -149 11 -278 31 -318 50 -43 21 -34 59 18 78 94 34 251 43 910 52 647 9 743 14 748 45 2 11 -167 30 -348 40 -60 3 -186 11 -280 17 -93 6 -269 14 -390 18 -242 9 -492 31 -598 53 -104 21 -124 56 -49 85 34 14 187 35 267 37 33 1 112 5 175 9 63 4 364 11 669 16 349 6 558 13 564 19 15 15 -54 42 -133 52 -36 5 -81 13 -100 19 -19 5 -64 10 -100 10 -36 0 -87 7 -114 15 -27 8 -88 15 -136 15 -47 0 -111 5 -141 10 -30 6 -135 15 -234 21 -99 6 -211 13 -250 16 -292 19 -770 26 -970 13z"></path> <path d="M2618 643 c-31 -17 -48 -33 -48 -45 0 -16 5 -18 23 -12 52 17 52 17 55 -110 1 -66 -1 -123 -5 -127 -4 -4 -21 -10 -37 -13 -35 -6 -40 -11 -32 -31 5 -13 22 -15 103 -13 108 3 124 15 63 46 l-35 17 -5 155 c-6 177 -6 176 -82 133z"></path> <path d="M3002 648 c2 -15 10 -23 23 -23 13 0 21 8 23 23 3 18 -1 22 -23 22 -22 0 -26 -4 -23 -22z"></path> <path d="M837 654 c-4 -4 -7 -90 -7 -191 0 -199 1 -202 55 -189 23 6 25 11 25 65 0 41 5 65 16 75 14 14 91 16 698 16 517 0 685 -3 694 -12 7 -7 12 -37 12 -68 0 -63 11 -80 52 -80 37 0 39 12 36 215 l-3 170 -37 3 c-42 4 -46 -3 -50 -93 l-3 -50 -694 -3 c-490 -1 -698 1 -707 9 -7 6 -14 37 -16 72 -3 61 -4 62 -33 65 -17 2 -34 0 -38 -4z"></path> <path d="M3245 561 c-11 -5 -37 -7 -57 -4 l-38 6 0 -132 0 -131 25 0 c25 0 25 1 25 90 0 84 1 91 27 115 32 29 65 32 84 8 9 -10 16 -52 19 -109 3 -52 11 -99 17 -105 25 -25 33 3 33 109 0 87 -4 111 -18 130 -20 26 -83 38 -117 23z"></path> <path d="M3000 430 l0 -130 25 0 25 0 0 130 0 130 -25 0 -25 0 0 -130z"></path> <path d="M3470 326 c0 -29 22 -39 46 -22 24 18 11 46 -21 46 -20 0 -25 -5 -25 -24z"></path> </g> </svg> `
  , triangle: ` <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="80.000000pt" height="90.000000pt" viewBox="0 0 76.000000 89.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,89.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M416 783 c-13 -21 -99 -174 -190 -341 -136 -245 -165 -306 -155 -318 18 -21 514 -21 526 1 9 15 -114 658 -130 683 -13 20 -25 14 -51 -25z m74 -331 c27 -137 50 -257 52 -267 3 -15 -14 -17 -200 -18 -111 -1 -202 1 -202 4 0 4 51 98 114 210 62 113 128 233 146 267 18 35 35 61 37 58 3 -2 27 -117 53 -254z"></path> </g> </svg> `
  , square: `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="38.000000pt" height="38.000000pt" viewBox="0 0 237.000000 236.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,236.000000) scale(0.050000,-0.050000)" fill="#073763" stroke="none"> <path d="M0 2360 l0 -2360 2370 0 2370 0 0 2360 0 2360 -2370 0 -2370 0 0 -2360z m4700 0 l0 -2320 -2330 0 -2330 0 0 2320 0 2320 2330 0 2330 0 0 -2320z"></path> </g> </svg>`
  , diamond: ` <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="40.000000pt" height="60.000000pt" viewBox="0 0 207.000000 300.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none"> <path d="M1901 5604 c-159 -217 -434 -592 -612 -834 -995 -1355 -1270 -1736 -1265 -1749 40 -103 2110 -3013 2126 -2989 11 16 462 700 1003 1521 l983 1491 -126 193 c-638 971 -1809 2749 -1816 2756 -3 3 -135 -172 -293 -389z m579 -364 c160 -242 549 -833 865 -1312 316 -479 575 -876 575 -883 0 -7 -140 -224 -312 -484 -459 -693 -1435 -2173 -1459 -2213 -17 -28 -169 179 -878 1194 -471 676 -892 1275 -935 1333 -112 151 -112 149 9 310 175 233 1639 2233 1735 2370 48 69 93 125 99 125 6 0 142 -198 301 -440z"></path> <path d="M4081 4870 c-1 -33 -5 -35 -20 -10 -15 23 -19 20 -16 -14 2 -24 10 -39 17 -34 8 4 18 -3 23 -16 5 -17 11 -15 19 5 6 16 3 47 -5 69 -16 40 -16 40 -18 0z"></path> <path d="M4040 4603 c0 -23 11 -43 24 -43 19 0 19 -5 0 -24 -13 -13 -24 -38 -24 -55 0 -19 11 -11 27 19 19 37 21 58 5 78 -12 16 -19 32 -15 37 3 4 1 14 -5 20 -7 6 -12 -8 -12 -32z"></path> <path d="M4065 4415 c3 -14 -6 -23 -19 -20 -14 3 -20 -8 -13 -25 6 -17 19 -30 29 -30 10 0 18 -16 18 -35 1 -26 7 -22 27 15 18 36 20 60 4 85 -24 40 -53 47 -46 10z"></path> </g> </svg> `
}
const audios = importAll(require.context('@/assets', false, /\.(mp3)$/));

const test = [
  {
    forQuestion: "Jane has 5 rocks. Jack has 4 rocks.",
    question: "How many rocks are there altogether?",
    questionAudio: "",
    testType: "pre",
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
    justification: "Provides a simple addition problem for the 2nd grade standard"
  }
  , {
    forQuestion: "Silva has 4 beads. Kate has 5 beads.",
    question: "How many beads are there altogether?",
    questionAudio: "",
    testType: "post",
    inputs: [
      {
        isInput: true,
        name: "silva-beads",
        // value: 1,
        answerKey: 9,
      },
      {
        isInput: false,
        value: "beads"
      },
    ],
    standard: "2.0A.4",
    justification: "Provides a simple addition problem for the 2nd grade standard"
  }
  , {
    question: "Find the sum.",
    questionAudio: "",
    testType: "pre",
    inputs: [
      {
        isInput: false,
        value: "8 + 5 = "
      },
      {
        isInput: true,
        name: "7+5",
        // value: 1,
        answerKey: 12,
      },
    ],
    standard: "2.0A.4",
    justification: "Provides a simple addition problem for the 2nd grade standard. They should be familiar with this sentence structure"
  }
  , {
    question: "Find the sum.",
    questionAudio: "",
    testType: "post",
    inputs: [
      {
        isInput: false,
        value: "4 + 8 = "
      },
      {
        isInput: true,
        name: "4+8",
        // value: 1,
        answerKey: 12,
      },
    ],
    standard: "2.0A.4",
    justification: "Provides a simple addition problem for the 2nd grade standard. They should be familiar with this sentence structure"
  }
  , {
    forQuestion: "Zach puts his stickers in 4 rows. There are 2 stickers in each row.",
    question: "How many stickers does Zach have?",
    questionAudio: "",
    testType: "pre",
    inputs: [
      {
        isInput: true,
        name: "zach-stickers",
        // value: 1,
        answerKey: 8,
      },
      {
        isInput: false,
        value: "stickers"
      },
    ],
    standard: "2.0A.4",
    justification: "Uses numbers smaller than 5. Indicates understanding of how to solve a basic word problem using simple counting."
  }
  , {
    forQuestion: "Jay puts 3 oranges on each tray.",
    question: "How many oranges are on 5 trays?",
    questionAudio: "",
    testType: "post",
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
    justification: "Provides a more complex second-grade question. Only one answer can help us indicate whether the student can find the answer."
  }
  , {
    question: "Bill has 6 toy cars. Each car has 4 wheels.",
    questionAudio: "",
    testType: "pre",
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
    justification: "Provides a third grade level question. Separates the problem into different areas. Helps us understand what part of the problem may be confusing."
  }
  , {
    question: "Ross has 6 cookies. Each cookie has 4 chocolate chips.",
    questionAudio: "",
    testType: "post",
    inputs: [
      {
        isInput: false,
        value: "How many chocolate chips are on each cookie?"
      },
      {
        isInput: true,
        name: "ross-cookies-chocolate",
        // value: 1,
        answerKey: 4,
      },
      {
        isInput: false,
        value: "How many equal groups of chocolate chips are there?"
      },
      {
        isInput: true,
        name: "ross-cookies-groups",
        // value: 1,
        answerKey: 6,
      },
      {
        isInput: false,
        value: "How many chocolate chips are there in all?"
      },
      {
        isInput: true,
        name: "ross-cookies-all",
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
    justification: "Provides a third grade level question. Separates the problem into different areas. Helps us understand what part of the problem may be confusing."
  }
  , {
    forQuestion: "Fill in the the math sentences.",
    question: "3 groups of 5",
    questionAudio: "",
    testType: "pre",
    inputs: [
      {
        isInput: true,
        name: "add-sentence-1-1",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "+"
      },
      {
        isInput: true,
        name: "add-sentence-1-2",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "+"
      },
      {
        isInput: true,
        name: "add-sentence-1-3",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "="
      },
      {
        isInput: true,
        name: "add-sentence-1-4",
        // value: 1,
        answerKey: 15,
      },
      {
        isInput: true,
        name: "mult-sentence-1-1",
        // value: 1,
        answerKey: 3,
      },
      {
        isInput: false,
        value: "x"
      },
      {
        isInput: true,
        name: "mult-sentence-1-2",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "="
      },
      {
        isInput: true,
        name: "mult-sentence-1-3",
        // value: 1,
        answerKey: 15,
      },
    ],
    containerStyle: `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(7,auto);
    width: min-content;
    `,
    standard: "3.0A.1",
    justification: "Have the student build the math sentences for both multiplication and addition sentences."
  }
  , {
    forQuestion: "Fill in the the math sentences.",
    question: "4 groups of 5",
    questionAudio: "",
    testType: "post",
    inputs: [
      {
        isInput: true,
        name: "add-sentence-2-1",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "+"
      },
      {
        isInput: true,
        name: "add-sentence-2-2",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "+"
      },
      {
        isInput: true,
        name: "add-sentence-2-3",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "+"
      },
      {
        isInput: true,
        name: "add-sentence-2-4",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "="
      },
      {
        isInput: true,
        name: "add-sentence-2-4",
        // value: 1,
        answerKey: 20,
      },
      {
        isInput: true,
        name: "mult-sentence-2-1",
        // value: 1,
        answerKey: 4,
      },
      {
        isInput: false,
        value: "x"
      },
      {
        isInput: true,
        name: "mult-sentence-2-2",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "="
      },
      {
        isInput: true,
        name: "mult-sentence-2-3",
        // value: 1,
        answerKey: 20,
      },
    ],
    containerStyle: `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(9,auto);
    width: min-content;
    `,
    standard: "3.0A.1",
    justification: "Have the student build the math sentences for both multiplication and addition sentences."
  }
  , {
    forQuestion: "Ada has 3 vases. She puts 5 flowers in each vase.",
    question: "Write a multiplication sentence to show how many flowers Ada puts in the vases",
    questionAudio: "",
    testType: "pre",
    inputs: [
      {
        isInput: true,
        name: "ada-vases-1",
        // value: 1,
        answerKey: 3,
      },
      {
        isInput: false,
        value: "x"
      },
      {
        isInput: true,
        name: "ada-vases-2",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "="
      },
      {
        isInput: true,
        name: "ada-vases-3",
        // value: 1,
        answerKey: 15,
      },
      {
        isInput: false,
        value: "vases"
      },
    ],
    containerStyle: `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6,auto);
    width: min-content;
    `,
    standard: "3.0A.1",
    justification: "Have the student build a multiplication sentence."
  }
  , {
    forQuestion: "Calvin has 3 plates. He puts 5 grapes on each plate.",
    question: "Write a multiplication sentence to show how many grapes Calvin puts on the plates",
    questionAudio: "",
    testType: "post",
    inputs: [
      {
        isInput: true,
        name: "calvin-grapes-1",
        // value: 1,
        answerKey: 3,
      },
      {
        isInput: false,
        value: "x"
      },
      {
        isInput: true,
        name: "calvin-grapes-2",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "="
      },
      {
        isInput: true,
        name: "calvin-grapes-3",
        // value: 1,
        answerKey: 15,
      },
      {
        isInput: false,
        value: "grapes"
      },
    ],
    containerStyle: `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6,auto);
    width: min-content;
    `,
    standard: "3.0A.1",
    justification: "Have the student build a multiplication sentence."
  }
  , {
    forQuestion: "Kyle, Jackie, and Edith each have 6 pennies.",
    question: "Write a multiplication sentence to show how many pennies there are altogether",
    questionAudio: "",
    testType: "pre",
    inputs: [
      {
        isInput: true,
        name: "friends-pennies-1",
        // value: 1,
        answerKey: 3,
      },
      {
        isInput: false,
        value: "x"
      },
      {
        isInput: true,
        name: "friends-pennies-2",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "="
      },
      {
        isInput: true,
        name: "friends-pennies-3",
        // value: 1,
        answerKey: 15,
      },
      {
        isInput: false,
        value: "pennies"
      },
    ],
    containerStyle: `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6,auto);
    width: min-content;
    `,
    standard: "3.0A.1",
    justification: "Have the student build a multiplication sentence where the group number is not directly given."
  }
  , {
    forQuestion: "Hal, Kit, and Angie each have 6 nickles.",
    question: "Write a multiplication sentence to show how many nickles there are altogether",
    questionAudio: "",
    testType: "post",
    inputs: [
      {
        isInput: true,
        name: "friends-nickles-1",
        // value: 1,
        answerKey: 3,
      },
      {
        isInput: false,
        value: "x"
      },
      {
        isInput: true,
        name: "friends-nickles-2",
        // value: 1,
        answerKey: 5,
      },
      {
        isInput: false,
        value: "="
      },
      {
        isInput: true,
        name: "friends-nickles-3",
        // value: 1,
        answerKey: 15,
      },
      {
        isInput: false,
        value: "nickles"
      },
    ],
    containerStyle: `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6,auto);
    width: min-content;
    `,
    standard: "3.0A.1",
    justification: "Have the student build a multiplication sentence where the group number is not directly given."
  }
  , {
    forQuestion: "Round to the nearest ten.",
    question: "66",
    questionAudio: "",
    testType: "pre",
    inputs: [
      {
        isInput: true,
        name: "round-1",
        // value: 1,
        answerKey: 70,
      },
    ],
    standard: "3.MD.A.1",
    justification: "Provide a control question unrelated to addition or multiplication."
  }
  , {
    forQuestion: "Round to the nearest ten.",
    question: "77",
    questionAudio: "",
    testType: "post",
    inputs: [
      {
        isInput: true,
        name: "round-up-2",
        // value: 1,
        answerKey: 80,
      },
    ],
    standard: "3.MD.A.1",
    justification: "Provide a control question unrelated to addition or multiplication."
  }
  , {
    forQuestion: "Round to the nearest ten.",
    question: "54",
    questionAudio: "",
    testType: "pre",
    inputs: [
      {
        isInput: true,
        name: "round-down-1",
        // value: 1,
        answerKey: 50,
      },
    ],
    containerStyle: `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6,auto);
    width: min-content;
    `,
    standard: "3.MD.A.1",
    justification: "Provide a control question unrelated to addition or multiplication."
  }
  , {
    forQuestion: "Round to the nearest ten.",
    question: "43",
    questionAudio: "",
    testType: "post",
    inputs: [
      {
        isInput: true,
        name: "round-down-2",
        // value: 1,
        answerKey: 40,
      },
    ],
    containerStyle: `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6,auto);
    width: min-content;
    `,
    standard: "3.MD.A.1",
    justification: "Provide a control question unrelated to addition or multiplication."
  }
  , {
    question: "About how long is the pencil",
    questionAudio: "",
    testType: "pre",
    inputs: [
      {
        isInput: false,
        value: svgs.pencil
      },
      {
        isInput: true,
        name: "pencil-length",
        // value: 1,
        answerKey: 6,
      },
      {
        isInput: false,
        value: "inches"
      },
    ],
    standard: "2.MD.3",
    justification: "Provide a control question unrelated to addition or multiplication."
  }
  , {
    question: "About how long is the fork",
    questionAudio: "",
    testType: "post",
    inputs: [
      {
        isInput: false,
        value: svgs.fork
      },
      {
        isInput: true,
        name: "fork-length",
        // value: 1,
        answerKey: 6,
      },
      {
        isInput: false,
        value: "inches"
      },
    ],
    standard: "2.MD.3",
    justification: "Provide a control question unrelated to addition or multiplication."
  }
  , {
    question: "How many angles does a triangle have?",
    questionAudio: "",
    testType: "pre",
    inputs: [
      {
        isInput: false,
        value: svgs.triangle,
      },
      {
        isInput: true,
        name: "angle",
        // value: 1,
        answerKey: 3,
      },
      {
        isInput: false,
        value: "angles"
      },
    ],
    containerStyle: `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3,auto);
    width: min-content;
    `,
    standard: "3.MD.A.1",
    justification: "Provide a control question unrelated to addition or multiplication."
  }
  , {
    question: "How many angles does a diamond have?",
    questionAudio: "",
    testType: "post",
    inputs: [
      {
        isInput: false,
        value: svgs.diamond,
      },
      {
        isInput: true,
        name: "angle",
        // value: 1,
        answerKey: 3,
      },
      {
        isInput: false,
        value: "angles"
      },
    ],
    containerStyle: `
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3,auto);
    width: min-content;
    `,
    standard: "3.MD.A.1",
    justification: "Provide a control question unrelated to addition or multiplication."
  }
];

export default {
  test
} 
