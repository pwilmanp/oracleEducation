var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");
brush.fillStyle = "grey";
brush.fillRect(0, 0, 600, 400);
var radio = 10;
var xRandom;
var yRandom;

function drawCircle(x, y, radio, color) {
    brush.fillStyle = color;
    brush.beginPath();
    brush.arc(x, y, radio, 0, 2 * Math.PI);
    brush.fill();
}

function clearScreen() {
    brush.clearRect(0, 0, 600, 400);
}

function designObjective(x, y) {
    drawCircle(x, y, radio + 20, "red");
    drawCircle(x, y, radio + 10, "white");
    drawCircle(x, y, radio, "red");
}

function randomPosition(max) {
    return Math.floor(Math.random() * max);
}

function refreshScreen() {
    clearScreen();
    xRandom = randomPosition(600);
    yRandom = randomPosition(400);
    designObjective(xRandom, yRandom);
}

setInterval(refreshScreen, 1000);

function shoot(eventS) {
    var x = eventS.pageX - screen.offsetLeft;
    var y = eventS.pageY - screen.offsetTop;
    if ((x > xRandom - radio) &&
        (x < xRandom + radio) &&
        (y > yRandom - radio) &&
        (y < yRandom + radio)) {
        alert("Nice shot");
    }
}
screen.onclick = shoot;
