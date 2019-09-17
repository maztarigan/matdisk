console.log("Program Menghitung Luas Segitiga");
var inputkeyboard = require('readline-sync');

var a = parseInt(inputkeyboard.question("Masukkan Alas : "));
var c = parseInt(inputkeyboard.question("Masukkan Tinggi : "));

var luas = a * c /2

console.log("Luas Segitiga =" + luas);
