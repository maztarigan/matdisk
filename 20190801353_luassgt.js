console.log ("Hello Saturday!!!")
console.log ("Nama : Muhamad Irfan Aldiansyah")

var baca = require('readline-sync');

var a = parseInt(baca.question("Masukan Alas : "));
var t = parseInt(baca.question("Masukan Tinggi : "));

var luas = a * t / 2;

console.log(luas);