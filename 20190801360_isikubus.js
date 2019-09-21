console.log ("Hello Saturday!!!")
console.log ("Nama : Tata Oky Candra Habita")

var baca = require('readline-sync');

var c = parseInt(baca.question("Masukan sisi : "));
var d = parseInt(baca.question("Masukan sisi : "));
var f = parseInt(baca.question("Masukan sisi : "));

var volume = c * d * f;

console.log(volume);