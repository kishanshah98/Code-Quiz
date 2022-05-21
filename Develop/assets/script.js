var goBackButton = document.querySelector(".go-back");
var clearHighscoreButton = document.querySelector(".clear-highscores");
var startQuizButton = document.querySelector(".start-quiz");
var timerEl = document.querySelector(".timer");

var secondsLeft = 100;


function setTimer() {
    var timerInterval = setInterval(function () {
        startQuizButton.disabled = true;
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            secondsLeft = 100
            clearInterval(timerInterval);
        }
    }, 1000);
}

startQuizButton.addEventListener("click", setTimer);
