const questions = [
    {
        question: "If you've invited people to your home, you should greet them as they're",
        options: ["eating", "arriving", "leaving"],
        correctAnswer: "arriving"
    },
    {
        question: "Greetings in business are usually formal, but greetings among family and friends are much more",
        options: ["impolite", "polite", "casual"],
        correctAnswer: "casual"
    },
    {
        question: "Which greeting is best for a formal business meeting?",
        options: ["Hi there", 
        "How's it goin'?", 
        "Nice to meet you"],
        correctAnswer: "Nice to meet you"
    },
    {
        question: "If you meet someone at night, you can greet them by saying?",
        options: ["Good night", "Good evening", "Good sleep"],
        correctAnswer: "Good evening"
    },
    {
        question: "Which is a greeting that friends might use when meeting for coffee?",
        options: ["Nice to meet you", "Good to see you", "Want a coffee?"],
        correctAnswer: "Good to see you"
    },
    {
        question: "Which would only be said if you haven't met the person for a long time?",
        options: ["Hi Lee. What's up?", "Hey Joe. How are things?", "Hi Annie. Long time no see."],
        correctAnswer: "Hi Annie. Long time no see."
    },
    {
        question: "Business people often greet one another with",
        options: ["a hug", "a high five", "a handshake"],
        correctAnswer: "a handshake"
    },
    {
        question: "What are you doing if you say 'I'd like you to meet our accountant Hugo.'?",
        options: ["introducing Hugo", "meeting Hugo", "greeting Hugo"],
        correctAnswer: "introducing Hugo"
    },
    {
    question: "Which can you say after being introduced to someone for the first time?",
    options: ["Nice to meet you", "Nice to greet you", "Nice to see you"],
    correctAnswer: "Nice to meet you"
    },
    {
        question: "'Hi, I'm Roberto. But you can call me Bob.' What's Roberto doing?",
        options: ["calling himself", "greeting himself", "introducing himself"],
        correctAnswer: "introducing himself"
        },
    // ... (lanjutkan dengan pertanyaan lainnya)
];

let userAnswers = [];
let resultsContainer;

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    resultsContainer = document.getElementById('results');

    let quizHTML = "";

    questions.forEach((question, index) => {
        quizHTML += `<div class="question">${index + 1}. ${question.question}</div>`;
        question.options.forEach((option, i) => {
            quizHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${option}" onclick="saveAnswer(${index}, '${option}')">
                    ${option}
                </label>
            `;
        });
    });

    quizContainer.innerHTML = quizHTML;
}

function saveAnswer(questionIndex, answer) {
    userAnswers[questionIndex] = answer;
}

function submitQuiz() {
    let score = 0;

    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        if (userAnswer && userAnswer === question.correctAnswer) {
            score++;
        }
    });

    displayResults(score);
}

function displayResults(score) {
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;

    resultsContainer.innerHTML = `<p>You scored ${score} out of ${totalQuestions}. (${percentage}%)</p>`;
}

// Load the quiz when the page loads
window.onload = loadQuiz;


