let questions = [
  {
    text: "What percentage of Panama’s electricity comes from the Canal Watershed?",
    options: ["45%", "67.2%", "82%"],
    correct: 1
  },
  {
    text: "What is the main reason for the drop in water levels in recent years?",
    options: ["Infrastructure problems", "Climate change and reduced rainfall", "Ship traffic"],
    correct: 1
  },
  {
    text: "What is the name of the lake where the Recycling Tank System will be focused?",
    options: ["Miraflores Lake", "Bayano Lake", "Gatun Lake"],
    correct: 2
  },
  {
    text: "Which of the following is a goal of the Recycling Tank System?",
    options: ["Increase ship size", "Replace hydroelectric dams", "Improve water reuse efficiency"],
    correct: 2
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const container = document.querySelector(".quiz-container");
  container.innerHTML = "";

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    const div = document.createElement("div");
    div.classList.add("question");

    const h3 = document.createElement("h3");
    h3.textContent = `${currentQuestion + 1}. ${q.text}`;
    div.appendChild(h3);

    const ul = document.createElement("ul");
    q.options.forEach((opt, i) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(btn, i === q.correct, q.options[q.correct]);
      li.appendChild(btn);
      ul.appendChild(li);
    });
    div.appendChild(ul);
    container.appendChild(div);
  } else {
    const result = document.createElement("h3");
    result.textContent = "🎉 Great job! You finished the quiz.";
    container.appendChild(result);
  }
}

function checkAnswer(button, isCorrect, correctAnswer) {
  const buttons = document.querySelectorAll(".question button");
  buttons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    button.style.backgroundColor = '#4CAF50';
    setTimeout(() => {
      currentQuestion++;
      loadQuestion();
    }, 1000);
  } else {
    button.style.backgroundColor = '#F05C4C';
    setTimeout(() => {
      alert(`Incorrect. The correct answer is: ${correctAnswer}`);
      currentQuestion++;
      loadQuestion();
    }, 800);
  }
}

document.addEventListener("DOMContentLoaded", loadQuestion);
