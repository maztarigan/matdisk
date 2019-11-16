var baca = require('readline-sync')

console.log("Konversi Bilangan Desimal Ke Biner, Octa, Hexa");
console.log("-------------------------------------------------");
var Desimal = parseInt(baca.question("Masukkan Nilai Desimal = "));
console.log("-------------------------------------------------");
var Biner = (Desimal.toString(2));
var Octa1 = (Desimal.toString(8));
var Hexa1 = (Desimal.toString(16));

console.log("Hasil Desimal ke Biner = ["+Biner+"]");
console.log("Hasil Desimal ke Octa = ["+Octa1+"]");
console.log("Hasil Desimal ke Hexa = ["+Hexa1+"]");
console.log("-------------------------------------------------");
console.log("20190801362 - Retyan Andriansyah")