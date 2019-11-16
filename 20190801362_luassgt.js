var nilai = require('readline-sync');

var t = parseInt(nilai.question("Masukan Nilai Tinggi   :"));
var a = parseInt(nilai.question("Masukan Nilai Alas : "));

var luas = 0.5 * a * t;

console.log(luas);
