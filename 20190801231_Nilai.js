var inputkeyboard = require("readline-sync");

var nilai = parseInt(inputkeyboard.question("masukkan nilai"));

if ((nilai >=89) && (nilai <= 100)){
    console.log("nilia A");
}else if ((nilai >=69) && (nilai <=80)){
    console.log("nilai B");    
}else if ((nilai >=59) && (nilai <=70)){
    console.log("nilai C");
}else if ((nilai >=49) && (nilai <=60)){
    console.log("nilai D");
}else
{
    console.log("nilai E");
}