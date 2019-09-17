var key = require('readline-sync');

var alas = parseInt(key.question('Masukan Nilai Alas : '));
var tinggi = parseInt(key.question('Masukan Nilai Tinggi : '));
var luas = 0.5 * alas * tinggi;

console.log(luas);