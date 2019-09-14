var baca = require('readline-sync');

var a = parseInt(baca.question("Masukan alas : "));
var t = parseInt(baca.question("Masukan tinggi : "));

var luas = a * t / 2;

console.log(luas);