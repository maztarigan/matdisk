var key = require('readline-sync');

var pi = 3.14;
var r =parseInt(key.question("Masukkan diameter:"));
var keliling = 2*pi*r;

console.log(keliling);