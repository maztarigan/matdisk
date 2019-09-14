var baca = require("readline-sync");

var a = baca.questionInt("Masukan Alas : ");
var t = baca.questionInt("Masukan Tinggi : ");

var luas = 1/2 * a * t;

console.log(luas);