var baca = require('readline-sync');

var a = parseInt(baca.question("masukan alas : "));
var t = parseInt(baca.question("masukan tinggi : "));

var luas = 0.5 * a * t;

console.log(luas);