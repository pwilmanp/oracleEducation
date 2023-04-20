function linebreaker() {
    document.write("<br>");
}
function write(phrase){
    document.write(phrase);
    linebreaker();
}
var myage = 19;
var brotherage = 28;
write("My age = " + myage);
write("His age = " + brotherage);
write("Our age difference is " + (brotherage-myage) + " years" );
