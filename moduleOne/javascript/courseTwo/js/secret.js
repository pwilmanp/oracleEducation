var secret = Math.round(Math.random()*10);
var input = document.querySelector("input");
input.focus();

function verify(){
    if (parseInt(input.value) == secret){
        alert("Correct answer!");
    }
    else{ 
        alert("Incorrect answer!");
    }
    input.value = "";
    input.focus();
}

var button = document.querySelector("button");
button.onclick = verify;