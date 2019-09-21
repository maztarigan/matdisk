var baca = require("readline-sync");

var pi = 3.14;
var r = parseInt(baca.question(" Masukan Jari-Jari : "));

var Keliling = 2 * pi * r;

console.log(Keliling);