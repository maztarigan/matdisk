var key = require("readline-sync");
console.log("====================================================================");
console.log("*** Konversi Bilangan Desimal ke Biner, Octa, dan Hexa ***");
console.log("====================================================================\n");
var desimal = parseInt(key.question('Masukan Nilai Desimal = '));
var hexa = (desimal.toString(16)).toUpperCase();
var octa = (desimal.toString(8));
var biner = (desimal.toString(2));
console.log("");

console.log("Konversi ke Biner     = "+biner+"\n");
console.log("Konversi ke Octa      = "+octa+"\n");
console.log("Konversi ke Hexa      = "+hexa+"\n");
console.log("====================================================================");
console.log("@20190801360 - Tata Oky Candra")