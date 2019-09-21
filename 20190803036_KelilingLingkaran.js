var key = require('readline-sync');

var pi = 3.14;
var r = parseInt(key.question('Masukan Jari - Jari : '));
var keliling = 2 * pi * r;

console.log(keliling);