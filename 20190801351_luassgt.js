var baca = require('readline-sync');
var b = 0.5;
var a = parseInt(baca.question("Masukkan ALas : "));
var t = parseInt(baca.question("Masukkan Tinggi : "));
var luas = b * a * t;
console.log(luas);