const questions = [
    {
        question: "1. What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark Language", "None"],
        answer: 0
    },
    {
        question: "2. Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        answer: 2
    },
    {
        question: "3. Which is not a JavaScript Framework?",
        options: ["Python Script", "React", "Angular", "Vue"],
        answer: 0
    }
];

const quizContainer = document.getElementById("quiz");

questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${q.question}</p>` +
        q.options.map((opt, i) =>
            `<input type="radio" name="q${index}" value="${i}"> ${opt}<br>`
        ).join("");
    quizContainer.appendChild(div);
});

function submitQuiz() {
    let score = 0;

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });

    document.getElementById("result").innerText =
        `Your Score: ${score} / ${questions.length}`;
}
