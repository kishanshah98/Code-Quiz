var goBackButton = document.querySelector(".go-back");
var clearHighscoreButton = document.querySelector(".clear-highscores");
var startButton = document.querySelector(".start-quiz");
var timerEl = document.querySelector(".timer");

var secondsLeft = 100;

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("Game has started");
    setTimer();
}


function setNextQuestion() {

}

function selectAnswer() {

}



function setTimer() {
    var timerInterval = setInterval(function () {
        startButton.disabled = true;
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            secondsLeft = 100
            clearInterval(timerInterval);
        }
    }, 1000);
}
