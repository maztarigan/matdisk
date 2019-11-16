console.log("*** Konversi Bilangan Desimal ke Biner, Octa, dan Hexa ***");

var input = require("readline-sync");

var desimal = parseInt(input.question("Masukkan Nilai Desimal : "))
var biner   = (desimal.toString(2));
var octa = (desimal.toString(8));
var hexa = (desimal.toString(16));

console.log ("desimal ke biner = ",biner);
console.log ("desimal ke octa = ",octa);
console.log ("desimal ke hexa =",hexa );
console.log(" SAMAN - 20190801408");


