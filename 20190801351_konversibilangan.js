// DESIMAL KE BINER, OCTA, DAN HEXA

var inputkeyboard = require('readline-sync');

var desimal = parseInt(inputkeyboard.question("Nilai Desimal : "));

var biner = (desimal.toString(2));
var octa_1 = (desimal.toString(8));
var hexa_2 = (desimal.toString(16));

console.log("----------------------------------------------");
console.log("Hasil Konversi Desimal ke Biner adalah : "+biner+"");
console.log("Hasil konversi Desimal ke Octa adalah : "+octa_1+"");
console.log("Hasil Konversi Desimal ke Hexa adalah : "+hexa_2+"");


