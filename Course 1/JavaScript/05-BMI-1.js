function linebreaker() {
    document.write("<br>");
}
function write(phrase){
    document.write(phrase);
    linebreaker();
}
function calculateBMI(weight, height, name){
    var bmi= Math.round(weight/(height*height)); 
    write("Calculated BMI for " + name + " is " + bmi);
    return bmi;
}
ibmWilman=calculateBMI(74, 1.74, "Wilman");
ibmAndres=calculateBMI(89, 1.84, "Andres");
write("Wilman and Andres have an average BMI of " + ((ibmAndres+ibmWilman)/2) + "<br>");
ibmJulian=calculateBMI(71, 1.64, "Julian");
ibmCamilo=calculateBMI(69, 1.74, "Camilo");
write("Julian and Camilo have an average BMI of " + ((ibmJulian+ibmCamilo)/2) + "<br>");

var nameUser = prompt("Enter your name");
var weightUser = prompt( nameUser + "Input your Weight");
var heightUser = prompt( nameUser + "Input your Height");
var bmiResult = calculateBMI(weightUser, heightUser, nameUser);
   