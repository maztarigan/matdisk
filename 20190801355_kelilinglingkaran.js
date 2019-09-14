console.log("Menghitung Keliling Lingkaran")

var input = require("readline-sync")

var n = 3.14;
var r = input.questionInt("Masukan Jari-Jari Lingkaran : ")

var keliling = 2 * n * r;

console.log(keliling)