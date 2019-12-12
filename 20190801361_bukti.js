var key = require('readline-sync')
var bintang = ""
var panjang = parseInt(key.question("Input Panjang : "));
var lebar = parseInt(key.question("Input Lebar : "));

console.log("======================================");

for(var a=0; lebar>a; a++){
    for(var a1=0; panjang>a1; a1++){
        bintang += "*"
    }
    console.log(bintang);
    bintang = ""
    }