var boxes = document.querySelectorAll('.box');
var scoreDisplay = document.querySelector('#score');
var first;
var second;
var matchCounter = 0;
var score = 0;
boxes.forEach(function (box) {
    var randomNum = Math.floor(Math.random() * 12);
    box.style.order = randomNum;
    box.addEventListener('click', function () {
        if (!first && !second) {
            first = box;
            box.classList.add('show');
        }
        else if (first && !second) {
            second = box;
            box.classList.add('show');
            if (first.innerHTML === second.innerHTML) {
                first.style.pointerEvents = 'none';
                second.style.pointerEvents = 'none';
                first = null;
                second = null;
                matchCounter++;
                score += 10;
                scoreDisplay.textContent = score;
                if (matchCounter >= 6)
                    setTimeout(function () { return alert("Game done! Your score is " + score + ". Refresh page to replay."); }, 2000);
            }
            else {
                first.classList.add('hide');
                second.classList.add('hide');
                setTimeout(function () {
                    first.classList.remove('show');
                    second.classList.remove('show');
                    first.classList.remove('hide');
                    second.classList.remove('hide');
                    first = null;
                    second = null;
                    score -= 2;
                    if (score < 0)
                        score = 0;
                    scoreDisplay.textContent = score;
                }, 2000);
            }
        }
    });
});
