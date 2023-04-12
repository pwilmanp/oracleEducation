var screen = document.querySelector("canvas");
var brush = screen.getContext("2d");

brush.fillStyle = "green";
brush.fillRect(0,0,350,400);

brush.fillStyle = "black";
brush.fillRect(50, 47, 90, 90);
brush.fillRect(205, 47, 90, 90);

brush.fillStyle = "black";
brush.fillRect(137, 130, 70, 100);

brush.fillStyle = "black";
brush.fillRect(97, 200, 40, 100);

brush.fillStyle = "black";
brush.fillRect(207, 200, 40, 100)