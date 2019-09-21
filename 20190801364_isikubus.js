var baca = require('readline-sync');

var a = parseInt(baca.question("Masukan sisi : "));
var b = parseInt(baca.question("Masukan sisi : "));
var c = parseInt(baca.question("Masukan sisi : "));

var volume = a * b * c;

console.log(volume);