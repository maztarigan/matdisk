// DESIMAL KE BINER, OCTA, DAN HEXADESIMAL

var inputkeyboard = require('readline-sync')

var desimal = parseInt(inputkeyboard.question("Bilangan Desimal : "));

var biner  = (desimal.toString(2));
var octa = (desimal.toString(8));
var hexa = (desimal.toString(16));

console.log("====================")
console.log("Hasil Konversi Desimal ke Biner adalah : "+biner+"");
console.log("Hasil Konversi Desimal ke Octa adalah : "+octa+"");
console.log("Hasil Konversi Desimal ke Hexadesimal adalah : "+hexa+"");
console.log("====================")
