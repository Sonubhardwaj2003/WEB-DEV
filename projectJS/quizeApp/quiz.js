document.addEventListener('DOMContentLoaded',()=>{
     
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const questionText = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');
    const scoreText = document.getElementById('score');

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
            correctAnswer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            choices: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
            correctAnswer: "Shakespeare"
        },
        {
            question: "What is the largest ocean on Earth?",
            choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correctAnswer: "Pacific"
        },
        // Add more questions as needed
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    // Show the first question and start the quiz
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);

    function startQuiz() {
        startBtn.classList.add('hidden'); // Hide the start button
        questionContainer.classList.remove('hidden'); // Show the question container
        showQuestion();
    }

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        choicesList.innerHTML = ''; // Clear previous choices

        currentQuestion.choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () => checkAnswer(choice));
            choicesList.appendChild(li);
        });
    }

    function checkAnswer(selectedChoice) {
        const currentQuestion = questions[currentQuestionIndex];
        
        if (selectedChoice === currentQuestion.correctAnswer) {
            score++;
        }

        // Disable all choices after selection
        const choices = choicesList.querySelectorAll('li');
        choices.forEach(choice => {
            choice.style.pointerEvents = 'none'; // Disable clicking on other choices
            if (choice.textContent === currentQuestion.correctAnswer) {
                choice.style.backgroundColor = '#4CAF50'; // Green for correct
            } else if (choice.textContent === selectedChoice) {
                choice.style.backgroundColor = '#f44336'; // Red for wrong
            }
        });

        nextBtn.classList.remove('hidden'); // Show next button after answering
    }

    function nextQuestion() {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
            nextBtn.classList.add('hidden'); // Hide next button until the answer is selected
        } else {
            showResult();
        }
    }

    function showResult() {
        questionContainer.classList.add('hidden'); // Hide question container
        resultContainer.classList.remove('hidden'); // Show result container
        scoreText.textContent = `${score} / ${questions.length}`; // Display the score
    }

    function restartQuiz() {
        score = 0;
        currentQuestionIndex = 0;
        resultContainer.classList.add('hidden'); // Hide result container
        startBtn.classList.remove('hidden'); // Show start button again
    }

});