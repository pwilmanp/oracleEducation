function linebreaker() {
    document.write("<br>");
}

function write(phrase){
    document.write(phrase);
    linebreaker();
}

var toughtNumber = Math.round(Math.random()*10);
var thrownNumber = parseInt(prompt("Choose a number bettwen 0 and 10"));
write(toughtNumber);

if (toughtNumber == thrownNumber){
    write("You guessed the number right");
}
else{
    write("You didn't guess the number");
} 