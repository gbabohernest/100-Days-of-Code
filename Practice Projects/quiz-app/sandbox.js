const quizQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },

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

const answerPlaceholders = document.querySelectorAll('label');
const answerInputs = document.querySelectorAll("input[name='quiz']");
const questionText = document.getElementById('question-text');
const questionNum = document.getElementById('question-no');
const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart-btn');
const quizResult = document.getElementById('quiz-result');

let currentQuestionIndex = 0;
let numOfQuestion = 1;
let score = 0;

/**
 * Function to display the quiz question.
 */
const getQuizQuestion = () => {
  const currentQuestionObj = quizQuestions[currentQuestionIndex];
  questionText.innerHTML = currentQuestionObj.question;
  questionNum.innerHTML = `Question ${numOfQuestion}/${quizQuestions.length}`;

  answerPlaceholders.forEach((label, index) => {
    label.innerHTML = currentQuestionObj.options[index];

    //store ans value
    answerInputs[index].value = currentQuestionObj.options[index];
  });

  //reset checked radio button
  answerInputs.forEach((input) => {
    input.checked = false;
  });
};

/**
 * function to check and move to the next question.
 */
const handleQuizSubmission = () => {
  let selectedAnswer;

  answerInputs.forEach((input) => {
    if (input.checked) {
      selectedAnswer = input.value;
    }
  });

  if (!selectedAnswer) {
    alert('Please select an answer');
    return;
  }

  // check if the answer is correct
  if (selectedAnswer === quizQuestions[currentQuestionIndex].answer) {
    score++;
  }
  currentQuestionIndex++;
  numOfQuestion++;

  // check if all questions are answered
  if (currentQuestionIndex >= quizQuestions.length) {
    // display score and restart button
    quizResult.innerHTML = `Your score: ${score}/${quizQuestions.length} `;
    questionNum.innerHTML = `Quiz Completed!!!`;

    restartBtn.style.display = 'block';

    // reset quiz
    currentQuestionIndex = 0;
    score = 0;
    numOfQuestion = 0;

    // disable the submit button
    submitBtn.style.display = 'none';
    return;
  }
  getQuizQuestion();
};

/**
 * Restarts the game
 */
const restartGame = () => {
  restartBtn.style.display = 'none';
  submitBtn.style.display = 'block';

  // clear the score
  quizResult.innerHTML = '';
  getQuizQuestion();
};

getQuizQuestion();

submitBtn.addEventListener('click', handleQuizSubmission);
restartBtn.addEventListener('click', restartGame);
