const quizQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },

  // {
  //   question: 'What does HTML stands for?',
  //   a: 'HyperText Machine Language',
  //   b: 'Honestly Terminal Machine Language',
  //   c: 'Home Tool Markup Language',
  //   d: 'HyperText Markup Language',
  //   answer: 'd',
  // },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    answer: 'Mars',
  },
  {
    question: 'How many continents are there on Earth?',
    options: ['5', '6', '7', '8'],
    answer: '7',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  },
  {
    question: 'Which animal is known as the King of the Jungle?',
    options: ['Tiger', 'Lion', 'Elephant', 'Cheetah'],
    answer: 'Lion',
  },
  {
    question: 'What is the boiling point of water in Celsius?',
    options: ['90°C', '100°C', '120°C', '150°C'],
    answer: '100°C',
  },
  {
    question: 'How many sides does a triangle have?',
    options: ['2', '3', '4', '5'],
    answer: '3',
  },
  {
    question: 'What color is a banana?',
    options: ['Red', 'Green', 'Yellow', 'Blue'],
    answer: 'Yellow',
  },
  {
    question: 'Which is the largest ocean on Earth?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    answer: 'Pacific',
  },
  {
    question: 'What is the tallest mountain in the world?',
    options: ['Kilimanjaro', 'K2', 'Everest', 'Makalu'],
    answer: 'Everest',
  },
];

const question1 = document.getElementById('q1');
const question2 = document.getElementById('q2');
const question3 = document.getElementById('q3');
const question4 = document.getElementById('q4');

const answerPlaceholders = document.querySelectorAll('label');

const questionText = document.getElementById('question-text');
const questionNum = document.getElementById('question-no');

const submit = document.getElementById('submit');

let currentQuestionIndex = 0;
let questionNumber = 0;

const getQuizQuestion = () => {
  const currentQuestionObj = quizQuestions[currentQuestionIndex];
  questionText.innerHTML = currentQuestionObj.question;
  answerPlaceholders.forEach((label, index) => {
    label.innerHTML = currentQuestionObj.options[index];
  });
};

getQuizQuestion();
