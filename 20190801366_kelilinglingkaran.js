var baca = require("readline-sync");

var pi = 3.14;
var r = parseInt(baca.question("masukan jari-jari"));

var keliling = 2 * pi * r;

console.log(keliling);
