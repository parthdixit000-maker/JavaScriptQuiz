const quizQuestions = [
    { question: "How many continents in the world?", answer: "new delhi" },
    { question: "Red Planet?", answer: "mars" },
    { question: "Days in a week?", answer: "7" }
];

let score = 0;

quizQuestions.forEach(q => {
    let answer = prompt(q.question);

    if (answer && answer.toLowerCase().trim() === q.answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong! Correct answer: " + q.answer);
    }
});

alert(`Your score is ${score} out of ${quizQuestions.length}`);