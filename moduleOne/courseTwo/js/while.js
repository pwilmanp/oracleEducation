function write(phrase){
    document.write("<br>"+phrase);
}

var counter=1

while (counter<=100){
    write(counter);
    if(counter==100){
        write("END");
    }
    counter++;
}