console.log("Konversi Bilangan");
var input = require("readline-sync")
var desimal = input.questionInt("Masukan Desimal : ")

console.log("Desimal to Biner = "+ desimal.toString(2));

console.log("Desimal to Octa = " + desimal.toString(8));

console.log("Desimal to Hexa = " + desimal.toString(16));
