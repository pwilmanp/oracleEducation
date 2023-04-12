var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

brush.fillStyle = "grey";
brush.fillRect(0,0,600,400);

function drawAndMessage(eventp){
    var x = eventp.pageX - screen.offsetLeft;
    var y = eventp.pageY - screen.offsetTop;

    brush.fillStyle = "blue";
    brush.beginPath();
    brush.arc(x,y,10,0,2*3.14);
    brush.fill();
    alert("You clicked "+ x + "," + y);
}

screen.onclick = drawAndMessage; 