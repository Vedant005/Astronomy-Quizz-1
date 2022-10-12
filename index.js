let readlineSync = require("readline-sync");

let score = 0;



function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("-----------")
  console.log("Here,I am going to test your knowledge of Astronomy.")
  console.log("-----------")
}


let questions = [
  {
    question: "How many planets are there in our solar system?",
    answer: "8"
  },
  {
    question: "Which is the biggest planet in size?  ",
    answer: "Jupiter"
  },
  {
    question: "When did the big bang happen? ",
    answer: "13 billion years ago"
  },
  {
    question: "what is the region where gravity is immense called?",
    answer: "black hole"
  },
  {
    question: " What is the point of no return on black hole called?",
    answer: "event horizon"
  }
];

function play(question, answer) {
  let userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right! ");
    score = score + 1;
    console.log("Your score is ", score);
  }
  else {
    console.log("You are wrong! ");
    score = score - 1;
    console.log("your score is ", score);
  }
};
function game() {
  for (let i = 0; i < questions.length; i++) {

    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {

  highScores.map(score => console.log(score.name, " : ", score.score))
}




let highScores = [
  {
    name: "vedant",
    score: 5,
  },

  {
    name: "ankush",
    score: 3,
  },
]
welcome();
game();
showScores();