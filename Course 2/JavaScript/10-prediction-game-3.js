function linebreaker() {
    document.write("<br>");
}

function write(phrase){
    document.write(phrase);
    linebreaker();
}

var randomNumber = Math.round(Math.random()*10);
var attempt = 0;

while (attempt != 3 ) {

    attempt++;
    var thrownNumber = parseInt(prompt("Choose a number bettwen 0 and 10"));
    
    if (randomNumber == thrownNumber){
        write("The number you gave was "+thrownNumber+
        " ,you guessed it right on attempt  #"+attempt);
        break;
    }
    else{
        alert("Wrong number. Attemp #" +attempt);
        if(attempt==3){
            write("Random number was = "+randomNumber);
        }
    }
}