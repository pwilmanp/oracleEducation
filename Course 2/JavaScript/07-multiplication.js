function linebreaker() {
    document.write("<br>");
}

function write(phrase){
    linebreaker();
    document.write(phrase);
    linebreaker();
}

var multi = 1;
write("WHILE");

while(multi <= 10){
    write(5 * multi);
    multi++;
}

write("FOR");

for (var multi = 1; multi <= 10; multi++) {
    write(7 * multi);
}