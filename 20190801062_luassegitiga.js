console.log("Program Menghitung Luas Segitiga")

var inputKeyboard = require("readline-sync");

var a = parseInt(inputKeyboard.question("Masukkan Alas :" )) ;
var t = parseInt(inputKeyboard.question("masukkan tinggi :" ));

var luas = a * t / 2

console.log("luas Segitiga = " +  luas );