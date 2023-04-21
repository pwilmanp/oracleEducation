var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");
brush.fillStyle = "grey";
brush.fillRect(0,0,600,400);
var colors = ["blue", "red", "purple"];
var currentColor = 0; // starts with blue

function drawCircle(event){
var x = event.pageX - screen.offsetLeft;
var y = event.pageY - screen.offsetTop;
brush.fillStyle = colors[currentColor];
brush.beginPath();
brush.arc(x,y,10,0,2*3.14);
brush.fill();
console.log(x + "," + y);
}

screen.onclick = drawCircle;

function changeColor() {
currentColor++;
if(currentColor >= colors.length) {
currentColor = 0;
}
return false;
}

screen.oncontextmenu = changeColor;
