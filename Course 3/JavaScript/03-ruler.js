var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

brush.fillStyle = "black";
brush.beginPath();
brush.moveTo(50,50);
brush.lineTo(50,400);
brush.lineTo(400,400);
brush.fill();

brush.fillStyle = "White";
brush.beginPath();
brush.moveTo(100,350);
brush.lineTo(100,175);
brush.lineTo(275,350);
brush.fill();
