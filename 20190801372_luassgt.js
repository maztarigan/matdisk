var bacakeyboard = require('readline-sync');

var t = parseInt(bacakeyboard.question("Masukan Nilai Tinggi   :"));
var a = parseInt(bacakeyboard.question("Masukan Nilai Alas : "));

var luas = 0.5 * a * t;

console.log(luas);
