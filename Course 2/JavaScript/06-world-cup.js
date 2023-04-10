function linebreaker() {
    document.write("<br>");
}

function write(phrase){
    document.write(phrase);
    linebreaker();
}

var yearWC = 1930;
var yearmax = parseInt(prompt("Input the limit year"));

while (yearWC < yearmax){
    write("World cup took place in " + yearWC);
    yearWC = yearWC + 4;
}

write("END");