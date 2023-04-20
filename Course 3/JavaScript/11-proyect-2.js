var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');

brush.fillStyle = 'grey';
brush.fillRect(0, 0, 600, 400);

var canDraw = false;
var redX = 0;
var greenX = 50;
var blueX = 100;
var squareY = 0;
var squareSize = 50;
var currentColor = "blue";

function drawCircle(x, y, currentColor) {
    if (canDraw) {
        brush.fillStyle = currentColor;
        brush.beginPath();
        brush.arc(x, y, 5, 0, 2 * Math.PI);
        brush.fill();
    }
}


function drawSquare(x, y, size, color) {
    brush.fillStyle = color;
    brush.fillRect(x, y, size, size)
    brush.fill();
}

function drawColorPalette() {
    drawSquare(redX, squareY, squareSize, 'red');
    drawSquare(greenX, squareY, squareSize, 'green');
    drawSquare(blueX, squareY, squareSize, 'blue');
}

function enableDrawing() {
    canDraw = true;
}

function disableDrawing() {
    canDraw = false;
}

function canDrawInArea(xCoordinate, yCoordinate) {
    if ((xCoordinate >= 0 && xCoordinate < (3 * squareSize + 5)) &&
        (yCoordinate >= 0 && yCoordinate < (squareSize + 5))) {
        return false;
    } else {
        return true;
    }
}

function captureMouseMovement(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;

    if (canDrawInArea(x, y)) {
        drawCircle(x, y, currentColor);
    }
}

function selectColor(event) {

    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;

    if (y > squareY && y < (squareY + squareSize)) {
        if (x > redX && x < (redX + squareSize)) {
            currentColor = "red";
            console.log(currentColor);
        } else if (x > greenX && x < (greenX + squareSize)) {
            currentColor = "green";
        } else if (x > blueX && x < (blueX + squareSize)) {
            currentColor = "blue";
        }
    }
}

canvas.onmousemove = captureMouseMovement;
canvas.onmousedown = enableDrawing;
canvas.onmouseup = disableDrawing;
drawColorPalette();
canvas.onclick = selectColor;
