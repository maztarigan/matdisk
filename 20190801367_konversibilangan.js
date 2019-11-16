var baca = require ("readline-sync");

var x = parseInt(baca.question("Masukan Desimal = "));

var biner = x.toString(2);
var octa = x.toString(8);
var hexa = x.toString(16).toUpperCase()

console.log ("Hasil Biner dari "+x+" = "+biner+" ");
console.log ("Hasil Octa dari "+x+" = "+octa+" ");
console.log ("Hasil Hexa dari "+x+" = "+hexa+" ");