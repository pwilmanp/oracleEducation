function drawRectangle(x, y, base, height, color){
    var canvas = document.querySelector("canvas");
    var brush = canvas.getContext("2d");
    brush.fillStyle=color;
    brush.fillRect(x, y, base, height);
    brush.strokeStyle="black";
    brush.strokeRect(x, y, base, height);
}

function writeText(x, y, text) {
    var canvas = document.querySelector("canvas");
    var brush = canvas.getContext("2d");

    brush.font="15px Georgia";
    brush.fillStyle="black";
    brush.fillText(text, x, y);    
}

function drawBar(x, y, series, colors, text) {

    writeText(x, y - 10, text);

    var totalHeight = 0;
    for (var i = 0; i < series.length; i++) {
        var height = series[i];
        drawRectangle(x, y + totalHeight, 50, height, colors[i]);
        totalHeight = totalHeight + height;
    }
}

var colors = ["blue","green","yellow", "red","gray"];
var series2009 = [6,47,41,3,3];
var series2019 = [81,9,3,3,4];

drawBar(50, 50, series2009, colors, "2009");
drawBar(150, 50, series2019, colors, "2019");
