console.log("Konversi Bilangan Decimal ke Biner, Octa, dan Hexa.\n");

var i = require('readline-sync');
var val = parseInt(i.question("Masukan Nilai Desimal : "));

var conv_bin = val.toString(2);
var conv_oct = val.toString(8);
var conv_hex = val.toString(16).toUpperCase();

console.log("Hasil Biner ->", conv_bin);
console.log("Hasil Octa ->", conv_oct);
console.log("Hasil Hexa ->", conv_hex);