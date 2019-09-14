console.log("Menghitung Luas Segitiga Sama Kaki")

var input = require("readline-sync")

var a = input.questionInt("Masukan Alas : ")
var t = input.questionInt("Masukan Tinggi : ")

var luas = 1/2 * a * t;

console.log(luas)