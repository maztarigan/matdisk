var keyboard = require('readline-sync');

var a = parseInt(keyboard.question("Masukkan Nilai Alas = "));
var t = parseInt (keyboard.question("Masukkan Nilai Tinggi = "));

var luas = a * t / 2

console.log("Luas segitiga yang alasnya " + a + " dan tingginya " + t +" = "+ luas);