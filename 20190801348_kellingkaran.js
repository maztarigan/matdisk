var baca = require('readline-sync');

var pi = 3.14
var r = parseInt(baca.question("Masukan Nilai r : "));

var keliling = 2 * pi * r;

console.log(keliling);