var key = require("readline-sync");
var star = ""
var lebar = parseInt(key.question("Masukan Nilai Panjang : "));
var panjang = parseInt(key.question("Masukan Nilai Lebar : "));

for(var a = 0; lebar > a; a++){
    for(var a1 = 0; panjang > a1; a1++){
        star  +="*"
    }
    console.log(star);
    star = ""
}