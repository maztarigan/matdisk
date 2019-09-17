var bacakeyboard = require('readline-sync');

var pi = 3.14;
var d = parseInt(bacakeyboard.question("Masukkan nilai diameter : "));
var keliling = pi * d ;

console.log(keliling);