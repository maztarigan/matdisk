console.log("Program Menghitung Luas Segitiga");
var inputkeyboard = require('readline-sync');

var a = parseInt(inputkeyboard.question("Masukkan Alas : "));
var t = parseInt(inputkeyboard.question("Masukkan Tinggi :"));

var luas = a * t / 2;

console.log("Luas Segitiga = " + luas);

