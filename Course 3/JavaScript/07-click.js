var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

brush.fillStyle = "grey";
brush.fillRect(0,0,600,400);

function drawAndMessage(eventClick){
    var x = eventClick.pageX - screen.offsetLeft;
    var y = eventClick.pageY - screen.offsetTop;

    brush.fillStyle = "blue";
    brush.beginPath();
    brush.arc(x,y,10,0,2*3.14);
    brush.fill();
    alert("You clicked "+ x + "," + y);
}

screen.onclick = drawAndMessage; 
