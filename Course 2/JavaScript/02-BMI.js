function linebreaker() {
    document.write("<br>");
}

function write(phrase){
    document.write(phrase);
    linebreaker();
}

function calculateBMI(weight, height, name){
    var bmi= weight/(height*height);
    write(name + ", your body mass index is " + bmi);
    if (bmi<18.5){
        write("Your BMI falls below the healthy range")
    }
    if (bmi>=18.5 && bmi<25){
        write("Your BMI is within the ideal range")
    }
    if (bmi>=25 && bmi<30){
        write("Your BMI indicates that you are overweight")
    }
    if (bmi>30){
        write("Your BMI indicates that you are obese")
    }
}

var nameUser = prompt("Enter your name ");
var weightUser = prompt( nameUser + ", input your Weight");
var heightUser = prompt( nameUser + ", input your Height");
var bmiResult = calculateBMI(weightUser, heightUser, nameUser);