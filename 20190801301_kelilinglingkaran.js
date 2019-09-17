var bacakeyboard = require('readline-sync');

var pi = 3.14;
var r = parseInt(bacakeyboard.question("masukkan diameter: "));
var keliling = 2*pi*r;

console.log(keliling);