var bacakeyboard = require('readline-sync');

var pi = 3.14;
var d = parseInt(bacakeyboard.question("masukan nilai diameter : "));
var r = parseInt(bacakeyboard.question("masukan nilai jari jari : "));
var keliling = pi * d * r

console.log(keliling);