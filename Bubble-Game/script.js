var clutter = "";

for (var i = 1; i <= 140; i++) {
    var num = Math.floor(Math.random() * 10);
      clutter += `<div class="bubbles">${num}</div>`
}
document.querySelector("#bubbles-sec").innerHTML = clutter;

function makeBubble() {

}
// Function Timer
var timer = 60;
function runTimer() {
    var timerInterval = setInterval(function () {
        if (timer >= 0) {
            timer--;
            document.querySelector("#timer-value").textContent = timer;
        }
        else {
            clearInterval(timerint);
        }
        
    }, 1000);
}
runTimer();
makeBubble();