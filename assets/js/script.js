let questions = [{
    "id": 1,
    "question": "Who organises the Elfstedentocht?",
    "a": "The province of Friesland",
    "b": "Dutch Skating Union",
    "c": "Koninklijke Vereniging De Friesche Elfsteden",
    "d": "The Dutch government",
    "answer": "c"
  },
  {
    "id": 2,
    "question": "In which Dutch province does the Elfstedentocht take place?",
    "a": "Friesland",
    "b": "North-Holland",
    "c": "Flevoland",
    "d": "Groningen",
    "answer": "a"
  },
  {
    "id": 3,
    "question": "What is the Frisian name for Elfstedentocht?",
    "a": "It sil heve",
    "b": "Alvestedetocht",
    "c": "Fryslan boppe",
    "d": "It giet oan",
    "answer": "b"
  },
  {
    "id": 4,
    "question": "How many cities are visited during the Elfstedentocht?",
    "a": "8",
    "b": "15",
    "c": "11",
    "d": "7",
    "answer": "c"
  },
  {
    "id": 5,
    "question": "What is the Elfstedentocht?",
    "a": "A swimming competition",
    "b": "A motorcycle tour",
    "c": "A cycling event",
    "d": "A skating event on natural ice",
    "answer": "d"
  },
  {
    "id": 6,
    "question": "How many days does the event last?",
    "a": "1",
    "b": "4",
    "c": "2",
    "d": "3",
    "answer": "a"
  },
  {
    "id": 7,
    "question": "When was the first Elfstedentocht held?",
    "a": "1940",
    "b": "1909",
    "c": "1933",
    "d": "1900",
    "answer": "b"
  },
  {
    "id": 8,
    "question": "When was the last Elfstedentocht to date held?",
    "a": "1986",
    "b": "2012",
    "c": "1997",
    "d": "1963",
    "answer": "c"
  },
  {
    "id": 9,
    "question": "How many Elfstedentochts have there been so far?",
    "a": "9",
    "b": "11",
    "c": "6",
    "d": "15",
    "answer": "d"
  },
  {
    "id": 10,
    "question": "Which was the first Elfstedentocht to be televised?",
    "a": "1963",
    "b": "1985",
    "c": "1997",
    "d": "1956",
    "answer": "a"
  },
  {
    "id": 11,
    "question": "Which city is the starting point?",
    "a": "Dokkum",
    "b": "Leeuwarden",
    "c": "Stavoren",
    "d": "Hindeloopen",
    "answer": "b"
  },
  {
    "id": 12,
    "question": "Which city is the finishing point?",
    "a": "Sneek",
    "b": "Franeker",
    "c": "Leeuwarden",
    "d": "Dokkum",
    "answer": "c"
  },
  {
    "id": 13,
    "question": "Which edition was the subject of a movie?",
    "a": "1956",
    "b": "1909",
    "c": "1940",
    "d": "1963",
    "answer": "d"
  },
  {
    "id": 14,
    "question": "What is the 1963 edition also known as?",
    "a": "The Hell of '63",
    "b": "The Great Race",
    "c": "The Ultimate Journey",
    "d": "The '63 Tour",
    "answer": "a"
  },
  {
    "id": 15,
    "question": "In which year did HRH Willem-Alexander take part?",
    "a": "1985",
    "b": "1997",
    "c": "1963",
    "d": "1986",
    "answer": "d"
  },
  {
    "id": 16,
    "question": "How many participants were in the first edition?",
    "a": "65",
    "b": "23",
    "c": "150",
    "d": "303",
    "answer": "b"
  },
  {
    "id": 17,
    "question": "How many participants were in the last edition?",
    "a": "9862",
    "b": "2735",
    "c": "16738",
    "d": "1900",
    "answer": "c"
  },
  {
    "id": 18,
    "question": "Who won the 1963 edition?",
    "a": "Piet Keijzer",
    "b": "Auke Adema",
    "c": "Evert van Benthem",
    "d": "Reinier Paping",
    "answer": "d"
  },
  {
    "id": 19,
    "question": "Which edition didn't have an official winner?",
    "a": "1956",
    "b": "1912",
    "c": "1933",
    "d": "1942",
    "answer": "a"
  },
  {
    "id": 20,
    "question": "When was the first official female competition?",
    "a": "1985",
    "b": "1942",
    "c": "1963",
    "d": "At the next edition",
    "answer": "d"
  },
  {
    "id": 21,
    "question": "When were women first allowed to compete?",
    "a": "1933",
    "b": "1985",
    "c": "1963",
    "d": "1997",
    "answer": "b"
  },
  {
    "id": 22,
    "question": "How thick does the ice have to be?",
    "a": "5cm",
    "b": "20cm",
    "c": "15cm",
    "d": "10cm",
    "answer": "c"
  },
  {
    "id": 23,
    "question": "Which city is not one of the eleven?",
    "a": "Dokkum",
    "b": "Sneek",
    "c": "Bolsward",
    "d": "Heerenveen",
    "answer": "d"
  },
  {
    "id": 24,
    "question": "How long is the Elfstedentocht roughly?",
    "a": "200km",
    "b": "150km",
    "c": "50km",
    "d": "100km",
    "answer": "a"
  },
  {
    "id": 25,
    "question": "How often is the event held in one year?",
    "a": "As often as possible",
    "b": "Once",
    "c": "Twice",
    "d": "Maximum three times",
    "answer": "b"
  },
];

const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionCounterText = document.getElementById("counter");
const scoreText = document.getElementById("score");

let questionCounter;
let score;
const MAX_QUESTIONS = 3;

let acceptingAnswers;

startGame = () => {
  questionCounter = 0;
  score = 0;
  acceptingAnswers = true;
  console.log(questions);

  availableQuestions = getRandomQuestions(questions, MAX_QUESTIONS);
  console.log(availableQuestions);
  getNewQuestion();
};

const getRandomQuestions = (arr, n) => {
  let len = arr.length;
  if (n > len) {
    throw new RangeError(
      "getRandomQuestions: more elements taken than available"
    );
  };

  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return (selected = shuffled.slice(0, n));
};

const getNewQuestion = () => {
  if (availableQuestions.length === 0) {
    alert("End of game");
    return;
  };

  questionCounter++;
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

  currentQuestion = availableQuestions[0];
  question.innerText = currentQuestion.question;

  answers.forEach((answer) => {
    answer.innerText = currentQuestion[answer.dataset["answer"]];
  });

  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      if (!acceptingAnswers) {
        console.log("not accepting answers");
        return;
      }
      acceptingAnswers = false;
      const clickedAnswer = e.target;
      const answerLetter = clickedAnswer.dataset["answer"];

      let classToApply = "incorrect";

      if (answerLetter === currentQuestion.answer) {
        score++;
        scoreText.innerText = score;
        classToApply = "correct";
      }

      clickedAnswer.parentElement.classList.add(classToApply);

      setTimeout(() => {
        clickedAnswer.parentElement.classList.remove(classToApply);
        getNewQuestion();
        acceptingAnswers = true;
      }, 1000);
    });
  });
  availableQuestions.shift();
};

startGame();