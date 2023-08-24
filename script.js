const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;

const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false },
      { text: "Berlin", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false }
    ]
  }, {
    question: "What is the nationality of cr7?",
    answers: [
      { text: "brazil", correct: false },
      { text: "portugal", correct: true },
      { text: "france", correct: false },
      { text: "argentine", correct: false }
    ]
  },
  {
    question: "what is the capital of Germany?",
    answers: [
      { text: "Hamburg", correct: false },
      { text: "Berlin", correct: true },
      { text: "Munich", correct: false },
      { text: "Francfort", correct: false }
    ]
  },
  {
    question: "What is the nationality of messi?",
    answers: [
      { text: "japan", correct: false },
      { text: "france", correct: true },
      { text: "italy", correct: false },
      { text: " Argentine", correct: true }
    ]
  },
];

function startQuiz() {
  currentQuestionIndex = 0;
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = '';
  
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (answer.correct) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    alert("Quiz completed!");
    // You can choose to show a final score or do something else here
  }
}

startQuiz();