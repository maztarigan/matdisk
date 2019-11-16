//Desimal to Biner


var input = require("readline-sync");

var desimal = parseInt(input.question("Masukkan Nilai Desimal : "));
var octa    = parseInt(input.question("Masukkan Nilai Octa :"));
var hexa    = parseInt(input.question("Masukkan Nilai Hexadecimal :"))
var biner   = (desimal.toString(2));
var octa_1   = (octa.toString(8));
var hexa_2   = (hexa.toString(16));

console.log("Hasil Biner ke Decimal adalah : ["+biner+"]");
console.log("Hasil Biner ke Octa adalah : ["+octa_1+"]");
console.log("Hasil Biner ke Hexadecimal adalah : ["+hexa_2+"]");