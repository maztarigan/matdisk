var baca = require('readline-sync');

var pi = 3.14

var r = parseInt(baca.question("masukan jari jari : "));
var d = parseInt(baca.question("masukan diameter : "));

var keliling = pi * r * d;

console.log(keliling);