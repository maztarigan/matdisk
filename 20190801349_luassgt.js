var baca = require("readline-sync");

var a = parseInt(baca.question(" Masukan Alas : "));
var t = parseInt(baca.question(" Masukan Tinggi : "));

var Luas = 0.5 * a * t;

console.log(Luas);
