function linebreaker() {
    document.write("<br>");
}

function write(phrase){
    document.write(phrase);
    linebreaker();
}

var randomNumber = Math.round(Math.random()*10);
var thrownNumber = parseInt(prompt("Choose a number bettwen 0 and 10"));
write("Random number was ="+randomNumber);

if (randomNumber == thrownNumber){
    write("The number you gave was "+thrownNumber+
    " ,you guessed the number right");
}
else{
    if (thrownNumber < randomNumber){
        write("The number you gave was "+thrownNumber+
        "You didn't guess, the number was higher");
    }
    else{
        write("The number you gave was "+thrownNumber+
        "Your guess was incorrect, the number was smaller");
    } 
} 