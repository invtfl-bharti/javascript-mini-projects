// generate bubbles


let clutter = "";
let newhit = 0;

// Generate initial bubbles
function makeBubble() {
    clutter = "";
    for (let i = 1; i <= 140; i++) {
        let num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubbles">${num}</div>`;
    }
    document.querySelector("#bubbles-sec").innerHTML = clutter;
}

// Function Timer
let timer = 60;
function runTimer() {
    let timerInterval = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer-value").textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector("#bubbles-sec").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

let score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#score-value").textContent = score;
}

function newHit() {
    newhit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = newhit;
}

document.querySelector("#bubbles-sec").addEventListener("click", function (dets) {
    let clickedNum = Number(dets.target.textContent);
    if (clickedNum == newhit) {
        increaseScore();
        makeBubble();
        newHit();
    }
});



// Initial function calls
makeBubble();
newHit();
runTimer();
