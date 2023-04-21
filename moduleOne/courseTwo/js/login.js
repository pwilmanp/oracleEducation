var usercredential1 = "alura";
var usercredential2 = "alura321";
alert("ENTER YOUR CREDENTIALS ");
        
for (let attempt=1;  attempt<=3 ; attempt++) {

    var credential1 = prompt("Username required");
    var credential2 = prompt("Password required");

    if( credential1 == usercredential1 && credential2 == usercredential2 ) {
        alert("Welcome @" + credential1);
        document.write("Successful login!");
        break;
    }
    else{
        alert("Invalid credentials. Please try again. ");
        if (attempt==3){
            document.write("Failed login");
        }
    }
}