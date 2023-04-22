var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");
brush.fillStyle = "lightgray";
brush.fillRect = (0,0,600,400);

function drawCircle( x, y, radio, color){
    brush.fillStyle = color
    brush.beginPath();
    brush.arc(x, y, radio, 0, 2*3.14);
    brush.fill();
}

function drawFlower(x,y){
    drawCircle(x, y+20, 10, "blue");
    drawCircle(x, y, 10, "red");
    drawCircle(x, y-20, 10, "yellow");
    drawCircle(x-20, y, 10, "orange");
    drawCircle(x+20, y, 10, "black");
}

drawFlower(300,200);
