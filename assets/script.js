// Global variables created and assigned
var goBackButton = document.querySelector(".go-back");
var startButton = document.querySelector(".start-quiz");
var timerElement = document.querySelector(".timer");
var mainScreenElement = document.querySelector(".main-screen")
var scoreLinkElement = document.querySelector(".highscore-link");
var questionContainerElement = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerButtonsElement = document.querySelector("#answer-buttons");
var answerResponseElement = document.querySelector("#response");
var submitButton = document.querySelector("#submit-button");

var scoreCount = 0;
var qIndex = 0;

// List of questions asked in quiz
var questions = [
    {
        text: "Which operation sign calculates the remainder?",
        answerChoices: ["A: /", "B: *", "C: %", "D: $"],
        correct: "C: %",
    },
    {
        text: "Which of the following is a string?",
        answerChoices: ["A: 'candy'", "B: true", "C: 54", "D: 10.5"],
        correct: "A: 'candy'",
    },
    {
        text: "Which programming language is specifically used for styling a page?",
        answerChoices: ["A: Javascript", "B: CSS", "C: HTML", "D: Python"],
        correct: "B: CSS",
    },
    {
        text: "Which of the following respresents an 'And' symbol in If Statements?",
        answerChoices: ["A: ||", "B: |", "C: &", "D: &&"],
        correct: "D: &&",
    },
    {
        text: "Out of the following HTML tags, which of the following is used to create a link?",
        answerChoices: ["A: <p>", "B: <img>", "C: <br>", "D: <a>"],
        correct: "D: <a>",
    },
    {
        text: "Inside which HTML element do we put the JavaScript?",
        answerChoices: ["A: <script>", "B: < scripting>", "C: <js>", "D: <javascript>"],
        correct: "A: <script>",
    }, {
        text: "Which operator is used to assign a value to a variable?",
        answerChoices: ["A: *", "B: =", "C: -", "D: x"],
        correct: "B: =",
    }, {
        text: "Choose the correct HTML element for the largest heading.",
        answerChoices: ["A: <h1>", "B: <h3>", "C: <head>", "D: <largeh>"],
        correct: "A: <h1>"
    }, {
        text: "How can you make a bulleted list?",
        answerChoices: ["A: <dl>", "B: <ol>", "C: <list>", "D: <ul>"],
        correct: "D: <ul>",
    }, {
        text: "Which HTML element is used to specify a header for a document or section?",
        answerChoices: ["A: <head>", "B: <section>", "C: <header>", "D: <top>"],
        correct: "C: <header>",
    }
];

// Starts game
function startGame() {
    secondsLeft = 50;
    mainScreenElement.setAttribute("class", "hide");
    scoreLinkElement.setAttribute("class", "inactiveLink");
    questionContainerElement.removeAttribute("class", "hide");
    startTimer();
    renderNextQuestion();
}

// Creates and runs timer
function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerElement.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            timerElement.textContent = "Time: 0";
            secondsLeft = 50
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}
// Checks if answer is right or not and rotates through all the questions
function checkAnswer() {
    if (this.innerText === questions[qIndex].correct) {
        answerResponseElement.textContent = "Great job! That is the correct answer!";
        scoreCount += 1;
        qIndex++;
        console.log("Index number: " + qIndex);
        console.log("Score: " + scoreCount);
    } else {
        answerResponseElement.textContent = "Oops, that's the wrong answer";
        secondsLeft = secondsLeft - 10;
        qIndex++;
        console.log("Index number: " + qIndex);
        console.log("Score: " + scoreCount);
    }
    if (qIndex < questions.length) {
        renderNextQuestion();
        console.log("qIndex: " + qIndex);
        console.log("question length: " + questions.length);
    } else {
        gameOver();
        console.log("Game Over");
    }
}

// Displays game over page and hides questions
function gameOver() {
    questionContainerElement.setAttribute("class", "hide");

    var gameOverElement = document.querySelector(".game-over-screen");
    gameOverElement.removeAttribute("class", "hide");

    var finalScoreEl = document.querySelector("#final-score");
    finalScoreEl.textContent = scoreCount;

    scoreLinkElement.removeAttribute("class", "inactiveLink");
}


// Updates high score on the screen in the list and in local storage
function setHighScore() {
    var scoresArray = JSON.parse(localStorage.getItem('scoresArray')) || []
    var initialsInput = document.querySelector("#initials");

    var newScore = {
        highscore: scoreCount,
        initials: initialsInput.value.trim(),
    }

    scoresArray.push(newScore)

    localStorage.setItem("scoresArray", JSON.stringify(scoresArray));
    window.location.href = "./highscore.html";
}   

// Renders through all the questions
function renderNextQuestion() {
    console.log(questions[qIndex]);
    questionElement.textContent = questions[qIndex].text;
    var option1El = document.querySelector("#option1");
    var option2El = document.querySelector("#option2");
    var option3El = document.querySelector("#option3");
    var option4El = document.querySelector("#option4");
    option1El.textContent = questions[qIndex].answerChoices[0];
    option2El.textContent = questions[qIndex].answerChoices[1];
    option3El.textContent = questions[qIndex].answerChoices[2];
    option4El.textContent = questions[qIndex].answerChoices[3];
    option1El.addEventListener("click", checkAnswer);
    option2El.addEventListener("click", checkAnswer);
    option3El.addEventListener("click", checkAnswer);
    option4El.addEventListener("click", checkAnswer);
}

// Triggered when user presses the submit button on the game over page
submitButton.addEventListener("click", setHighScore);

// Triggered when user presses the start button
startButton.addEventListener("click", startGame);
