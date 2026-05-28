// Quiz sobre Gojo Agro Moderno

const quizData = [
    {
        question: "O que é agricultura sustentável?",
        answers: ["Produzir sem impactar o meio ambiente", "Usar pesticidas sem limites", "Cortar todas as árvores", "Ignorar recursos hídricos"],
        correct: 0
    },
    {
        question: "Qual tecnologia é usada no agro moderno?",
        answers: ["Drones e sensores", "Carros antigos", "Fax machines", "Moinhos de vento do século XIX"],
        correct: 0
    },
    {
        question: "Qual é o objetivo do Gojo Agro Moderno?",
        answers: ["Promover sustentabilidade e inovação", "Aumentar poluição", "Ignorar ciência", "Não produzir alimentos"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";
    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => selectAnswer(index));
        const li = document.createElement("li");
        li.appendChild(button);
        answersEl.appendChild(li);
    });
}

function selectAnswer(index) {
    const correct = quizData[currentQuestion].correct;
    if(index === correct) {
        score++;
    }
    nextBtn.style.display = "inline-block";
    // Desativar botões
    document.querySelectorAll("#answers button").forEach(btn => btn.disabled = true);
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
});

function showResult() {
    quizContainer = document.getElementById("quiz-container");
    quizContainer.style.display = "none";
    resultEl.classList