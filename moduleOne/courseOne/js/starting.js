alert("Hello, is this really a good pop-up?");
function linebreaker() {
    document.write("<br><br>");
}
function write(phrase){
    document.write(phrase);
    linebreaker();
}
var year = 2023;
var median = (19+23)/2;
write("Wilman's age is " + (year-2004));
write("Juan's age is " + (year-2000));
write("Average age is ="+ Math.round(median));