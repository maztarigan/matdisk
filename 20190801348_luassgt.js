var baca = require('readline-sync');

var t = parseInt(baca.question("Masukan Nilai Tinggi   :"));
var a = parseInt(baca.question("Masukan Nilai Alas : "));

var luas = 0.5 * a * t;

console.log(luas);
