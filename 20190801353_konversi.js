var input = require("readline-sync");

var Desimal = parseInt(input.question("Masukan Nilai Desimal : "));

var Biner = (Desimal.toString (2));
var Octa_1 = (Desimal.toString (8));
var Hexa_1 = (Desimal.toString (16));

console.log("Hasil Desimal ke Biner adalah : ["+Biner+"]");
console.log("Hasil Desimal ke Octa adalah : ["+Octa_1+"]");
console.log("Hasil Desimal ke Hexadecimal adalah : ["+Hexa_1+"]");
