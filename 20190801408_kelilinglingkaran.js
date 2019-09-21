var baca = require('readline-sync');

var pi = 3.14;
var r = parseInt(baca.question("Masukan jari-jari : "));

var luas = 2 * pi * r;

console.log(luas);