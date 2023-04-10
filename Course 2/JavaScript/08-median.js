function linebreaker() {
    document.write("<br>");
}

function write(phrase){
    linebreaker();
    document.write(phrase);
    linebreaker();
}

var members = parseInt(prompt("Input the number of members in your family."));
var counter = 1;
var totalAges = 0;

while (counter <= members){
    age = parseInt(prompt("Input the age of your family member"));
    totalAges = totalAges + age;
    counter++;
}

median = totalAges / members;
write("Average age of the family is " + median);