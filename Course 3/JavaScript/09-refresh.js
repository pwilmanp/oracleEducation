var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");
brush.fillStyle = "grey";
brush.fillRect(0,0,600,400);

function drawCircle(x,y,radio){
    brush.fillStyle = "blue";
    brush.beginPath();
    brush.arc(x,y,radio,0,2*Math.PI);
    brush.fill();
}

function clearScreen(){
    brush.clearRect(0,0,600,400);
}

var x = 0
var direction = 1;

function refreshScreen(){
    clearScreen();
    if (x > 600){
	direction = -1;
    }else if(x < 0){
	direction = 1;
    }
    drawCircle(x,20,10);
    x = x + direction;
}

setInterval(refreshScreen,10);
