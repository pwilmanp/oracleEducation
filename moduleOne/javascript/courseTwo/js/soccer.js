function write(text) {
    document.write(text);
    document.write("<br>");
}

var victories = parseInt(prompt("Enter number of victories team"));
var ties = parseInt(prompt("Enter total of even scores"));
totalPoints = (victories*3)+ties;
write("TEAM TOTAL POINTS = " + totalPoints);

if (totalPoints > 28){
    write("TEAM HAS IMPROVED FROM LAST YEAR");
}
if (totalPoints < 28){
    write("TEAM HASN'T IMPROVED FROM LAST YEAR");
}
if (totalPoints == 28){
     write("TEAM HAS MAINTAINED THE SAME LEVEL FROM LAST YEAR");
}