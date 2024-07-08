let quizQuestions = [];

function addQuestion() {
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const option4 = document.getElementById('option4').value;
    const correctAnswer = document.getElementById('correct-answer').value;

    const newQuestion = {
        question: question,
        options: [option1, option2, option3, option4],
        correctAnswer: correctAnswer
    };

    quizQuestions.push(newQuestion);

    document.getElementById('quiz-form').reset();

    displayQuiz();
}

function displayQuiz() {
    const quizDisplay = document.getElementById('quiz-display');
    quizDisplay.innerHTML = '';

    quizQuestions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <h3>Question ${index + 1}: ${question.question}</h3>
            <ul>
                <li><label><input type="radio" name="question${index}" value="option1"> ${question.options[0]}</label></li>
                <li><label><input type="radio" name="question${index}" value="option2"> ${question.options[1]}</label></li>
                <li><label><input type="radio" name="question${index}" value="option3"> ${question.options[2]}</label></li>
                <li><label><input type="radio" name="question${index}" value="option4"> ${question.options[3]}</label></li>
            </ul>
        `;
        quizDisplay.appendChild(questionElement);
    });
}

function submitQuiz() {
    let score = 0;

    quizQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.correctAnswer) {
            score++;
        }
    });

    const quizFeedback = document.getElementById('quiz-feedback');
    quizFeedback.textContent = `You scored ${score} out of ${quizQuestions.length}!`;

    quizQuestions = [];
    displayQuiz();
}
