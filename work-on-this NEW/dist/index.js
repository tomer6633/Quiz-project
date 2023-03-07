var scoreDisplay = document.querySelector("#score");
var boxes = document.querySelectorAll(".box");
var winner = document.querySelector("#winnerMas");
// const winner = document.getElementById("#winnerMas") as HTMLElement;
//timer and push
var intervalId;
var time = 0;
var lastStopTime = 0;
var startButton = document.querySelector(".start");
var stopButton = document.querySelector(".stop");
var resumeButton = document.querySelector(".resume");
var timeDisplay = document.querySelector(".time");
scoreDisplay.textContent = "score:";
startButton.addEventListener("click", startGame);
function startGame() {
    hasGameStarted = true;
    if (!intervalId) {
        intervalId = setInterval(function () {
            time += 1;
            timeDisplay.textContent = time.toString();
        }, 1000);
    }
}
stopButton.addEventListener("click", function () {
    lastStopTime = time;
    clearInterval(intervalId);
    intervalId = undefined;
});
resumeButton.addEventListener("click", function () {
    clearInterval(intervalId);
    intervalId = undefined;
    time = 0;
    timeDisplay.textContent = "00:00";
    window.location.reload();
});
//start game//
function beginGame(uid) {
    localStorage.setItem("uid", uid.toString());
}
function hendleLevel(ev) {
    try {
        ev.preventDefault();
        var level = ev.target.elements.levels.value;
        showRelevntLevels(level);
    }
    catch (error) {
        console.error(error);
    }
}
// let level=prompt("choose a level");
function showRelevntLevels(level) {
    try {
        if (level == "level1") {
            var boxes_1 = document.querySelectorAll(".level1");
            document.querySelectorAll(".level2,.level3").forEach(function (node) {
                var item = node;
                item.style.display = "none";
            });
            var uid = getUIDFromStorage();
            if (uid)
                playGame(boxes_1, 3, uid);
        }
        if (level == "level2") {
            var boxes_2 = document.querySelectorAll(".level1,.level2");
            document.querySelectorAll(".level3").forEach(function (node) {
                var item = node;
                item.style.display = "none";
            });
            var uid = getUIDFromStorage();
            if (uid)
                playGame(boxes_2, 6, uid);
        }
        if (level == "level3") {
            var boxes_3 = document.querySelectorAll(".level1,.level2,.level3");
            var uid = getUIDFromStorage();
            if (uid)
                playGame(boxes_3, 10, uid);
        }
    }
    catch (error) {
        console.error(error);
    }
}
var hasGameStarted = false;
var first;
var second;
var matchCounter = 0;
var score = 0;
function playGame(boxes, numOfPairs, uid) {
    try {
        boxes.forEach(function (box) {
            // מסדר את הbox במסך בסדר אקראי לפי מספר
            var randomNum = Math.floor(Math.random() * 12);
            box.style.order = randomNum;
            box.addEventListener("click", function Game() {
                if (!hasGameStarted) {
                    startGame();
                    hasGameStarted = true;
                }
                if (!first && !second) {
                    first = box;
                    box.classList.add("show");
                }
                else if (first && !second) {
                    second = box;
                    box.classList.add("show");
                    if (first.innerHTML === second.innerHTML) {
                        // first.style.pointerEvents = 'none';
                        // second.style.pointerEvents = 'none';
                        first = null;
                        second = null;
                        matchCounter++;
                        score += 10;
                        scoreDisplay.textContent = "score:" + score;
                        if (matchCounter === numOfPairs) {
                            setTimeout(function () {
                                winner.style.display = "block";
                                winner.innerHTML = "<div></div><h1><span>Congratulations!<br><div id=\"yourScore\">Your score is " + score + "</div></span>\n                <br></h1><a href=\"scoreBoard.html\" id=\"scoreBtn\">Score Board</a><div/>\n            ";
                            }, 2000);
                            // update score to Players
                            debugger;
                            var players = getPlayersFromStorage();
                            for (var i = 0; i <= players.length - 1; i++) {
                                if (players[i].uid === uid) {
                                    players[i].score = score;
                                    localStorage.setItem("players", JSON.stringify(players));
                                }
                            }
                        }
                    }
                    else {
                        first.classList.add("hide");
                        second.classList.add("hide");
                        setTimeout(function () {
                            first.classList.remove("show");
                            second.classList.remove("show");
                            first.classList.remove("hide");
                            second.classList.remove("hide");
                            first = null;
                            second = null;
                            score -= 2;
                            if (score < 0)
                                score = 0;
                            scoreDisplay.textContent = "score:" + score;
                        }, 2000);
                    }
                }
            });
        });
    }
    catch (error) {
        console.error(error);
    }
}
