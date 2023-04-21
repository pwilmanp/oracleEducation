var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");


brush.fillStyle = "green"
brush.fillRect(0,0,200,400);

brush.fillStyle = "white"
brush.fillRect(200,0,200,400);

brush.fillStyle = "red"
brush.fillRect(400,0,200,400);

brush.fillStyle = "purple";
brush.beginPath();
brush.moveTo(300,200);
brush.lineTo(200,400);
brush.lineTo(400,400);
brush.fill();

brush.fillStyle = "black";
brush.beginPath();
brush.arc(300,200,30,0,2*3.14)
brush.fill();
