function linebreaker() {
    document.write("<br><br><br><hr><br><br>");
}
function write(phrase){
    document.write("<big>" + phrase + "<big>");
    linebreaker();
}
var year = 2025;
write("Juan is " + (year-2000) + " years old");
write("Pedro is " + (year-1995) + " years old");
year = 2030;
write("Carlos is " + (year-2005) + " years old");