function drawSquare(x,y,color){
    var screen = document.querySelector("canvas");
    var brush = screen.getContext("2d");
    brush.fillStyle = color;
    brush.fillRect(x,y,50,50);
    brush.strokeStyle = "black";
    brush.strokeRect(x,y,50,50);
}

for (let x = 0; x < 600; x+=50) {
    drawSquare(x,0,"red");
    drawSquare(x,50,"yellow");
    drawSquare(x,100,"green");
}
