// Global variables
var highScoreListEl = document.querySelector("#high-scores-list");
var clearButton = document.querySelector(".clear-highscores");

// Gets the highscores from the local storage and adds them to the screen
function populateHighScoreList() {
    var data = JSON.parse(localStorage.getItem("scoresArray"));

    if (data) {
        data.sort(function (a, b) {
            return b.highscore - a.highscore;
        });
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var liEl = document.createElement("li");
            liEl.textContent = "Inititals: " + data[i].initials + "     Score: " + data[i].highscore;
            // liEl.setAttribute("class", "list-style-type: none");
            highScoreListEl.append(liEl);
        }
    }
}

populateHighScoreList();

// Clears the scores from local storage and the high scores list on the screen
function clearScores() {
    localStorage.clear();
    window.location.reload();
}

clearButton.addEventListener("click", clearScores);

