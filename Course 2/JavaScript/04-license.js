function linebreaker() {
    document.write("<br>");
}
function write(phrase) {
    document.write(phrase);
    linebreaker();
}

var age = parseInt(prompt("What's your age?"));
var ansLicense = prompt("Do you have a driver's license? Answer with Y or N");
    
if ((age >= 18) && (ansLicense == "Y")){
    write("You are qualified to drive.")
}
else{
    document.write("You're not qualified to drive.")
}