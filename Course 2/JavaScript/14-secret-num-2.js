var input = document.querySelector("input");
input.focus();
var secrets = numbers(4);

function aleatory(){
    return Math.round(Math.random()*10);
}

function numbers(size){

    var secrets = [];
    var counter = 1;

    while(counter <= size){

        var randomnum=aleatory();
        var founded = false;

        if (randomnum != 0){
            for (let index = 0; index < secrets.length; index++) {
                if (randomnum==secrets[index]){
                    founded=true;
                }     
            }
            if (founded == false){
                secrets.push(randomnum);
                counter++;
            }  
        }
    }
    return secrets;
}

function verify(){

    var detected = false;

    for (let index = 0; index < secrets.length; index++) {
        if (parseInt(input.value) == secrets[index]){
            alert("Correct answer!");
            detected = true;
            break;
        }
    }
    
    if (detected == false){
        alert("Incorrect answer!");
    }
    input.value = "";
    input.focus();       
}

var button = document.querySelector("button");
button.onclick = verify;
document.write(secrets);