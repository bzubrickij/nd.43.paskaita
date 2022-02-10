// "use strict";

let question = document.getElementById("question");
let button = document.querySelectorAll("button");
let progress = document.getElementById("progress");
let questionNumber = 0;
let resultNumber = 0;
let progressBar = document.querySelector("hr");
progressBar.style.width = 20 + "%";
let questions = [
  {
    text: "Kam naudingos morkos?",
    choices: ["Niekam", "Hitleriui", "Kepenims", "Odai"],
    answer: "Odai",
  },
  {
    text: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui",
  },
  {
    text: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    answer: "Cukrini diabetą",
  },
  {
    text: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C",
  },
  {
    text: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi",
  },
];

// Užkrauna klausimą ir atsakymus
var populate = () => {
  if (questionNumber < questions.length) {
    question.innerText = questions[questionNumber].text;
    button.forEach((x, i) => {
      x.innerText = `${questions[questionNumber].choices[i]}`;
    });
  } else {
    // Užkrauna resultatus
    showResults();
  }
};
var width = 20;
// Rodo progresą
var showProgress = () => {
  questionNumber++;
  width += 20;
  progressBar.style.width = width + "%";
  progressBar.style.transition = "0.5s";
  progress.innerText = questionNumber + 1;
};

// Skaičiuoja teisingus atsakymus
var check = (guess) => {
  if (guess.innerText === questions[questionNumber].answer) resultNumber++;
};

// Result page
var showResults = () => {
  var quiz = document.getElementById("quiz");
  quiz.innerHTML = `<h1 class="anime">Result ${resultNumber} </h1>`;
};

// Priskiria funkciją mygtukams
button.forEach((x) => {
  x.addEventListener("click", function () {
    setTimeout(function () {
      // Rodo progresą
      showProgress();
      // Užkrauna klausimą ir atsakymus
      populate();
    }, 10);
    // Skaičiuoja teisingus atsakymus
    check(this);
  });
});

// Pirmas užkrovimas
populate();
