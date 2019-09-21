var baca = require("readline-sync");

var n = 3.14;
var r = baca.questionInt("Masukan Jari-Jari Lingkaran : ");

var keliling = 2 * n * r;

console.log(keliling);