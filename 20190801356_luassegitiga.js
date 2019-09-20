var inputkeyboard = require('readline-sync');

var alas = parseInt(inputkeyboard.question("Masukan Alas :"));
var tinggi = parseInt(inputkeyboard.question("Masukan Tinggi :"));

var Luas = 0.5 * alas * tinggi;

console.log("Luas Segitiga : "+Luas);
