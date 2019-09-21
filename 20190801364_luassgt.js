var baca = require('readline-sync');

var a = parseInt(baca.question("Masukan Alas : "));
var t = parseInt(baca.question("Masukan Tinggi : "));

var luas = a * t / 2;

console.log(luas);