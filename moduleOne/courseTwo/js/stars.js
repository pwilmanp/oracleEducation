function linebreaker() {
    document.write("<br>");
}

function write(phrase){
    document.write(phrase);
    linebreaker();
}

for (var lines = 1; lines <= 3; lines++) {
    for (let columns = 0; columns <=10 ; columns++) {
        document.write("*");
    }
    linebreaker();
}