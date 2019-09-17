var keyboard=require('readline-sync');
var a = parseInt(keyboard.question("Masukan Alas : "));
var t = parseInt(keyboard.question("Masukan Tinggi : "));
var luas = a*t/2;

console.log("Luas Segitiga = "+luas);