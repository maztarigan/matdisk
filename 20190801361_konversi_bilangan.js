var input = require("readline-sync");

console.log("========================================================");
console.log("Konversi Bilangan Dari Desimal Ke Biner,Octa,Hexadesimal");
console.log("========================================================");

var desimal = parseInt(input.question("Masukkan Nilai Desimal : "));

var biner = (desimal.toString(2));
var biner_1 = (desimal.toString(8));
var biner_2 = (desimal.toString(16));

console.log("Hasil Desimal ke Biner Adalah       : ["+biner+"]");
console.log("Hasil Desimal ke Octa Adalah        : ["+biner_1+"]" );
console.log("Hasil Desimal ke Hexadesimal Adalah : ["+biner_2+"]");

console.log("===================================");
console.log("By Dimas Fadli Saputra, 20190801361");
console.log("===================================");
