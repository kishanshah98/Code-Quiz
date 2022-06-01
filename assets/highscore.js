var highScoreListEl = document.querySelector("#high-scores-list");
var clearButton = document.querySelector(".clear-highscores");

function populateHighScoreList () {
    var data = JSON.parse(localStorage.getItem("scoresArray"));
    console.log(data);
    for (var i=0; i < data.length; i++) {
        var liEl = document.createElement("li");
        liEl.textContent = "inititals: " + data[i].initials + "  Score: " + data[i].highscore
        highScoreListEl.append(liEl);
    }
}

populateHighScoreList();

function clearScores() {
    localStorage.clear();
    populateHighScoreList();
}

clearButton.addEventListener("click", clearScores);