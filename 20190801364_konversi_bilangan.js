console.log("Konversi Bilangan");

var input = require('readline-sync');

var desimal = parseInt(input.question("Masukkan Angka Desimal = "));

var biner = (desimal.toString(2));
var octa =(desimal.toString(8));
var hexa = (desimal.toString(16));

console.log("Desimal ke Biner =",biner);
console.log("Desimal ke Octa =",octa);
console.log("Desimal ke Hexa =",hexa);