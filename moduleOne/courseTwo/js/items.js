var ingredients = [];
var input = document.querySelector("#enter");
var button = document.querySelector("#click");
button.onclick = addIng;
var counter = 0;

function addIng() {
    if (counter < 5) {
        var newIng = input.value;
        if (ingredients.includes(newIng)) {
            alert("This ingredient has already been added");
        } 
        else {
            ingredients.push(newIng);
            counter++;
            input.value = "";
        }
    }
    if (counter == 5){
        show();
    }
}

function show() {
    document.write("<h1>INGREDIENTS</h1>"+ingredients);
}

