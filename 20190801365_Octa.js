var input = require("readline-sync")

var Desimal = parseInt (input.question("Masukkan Nilai Desimal : "))
var Octa    = (Desimal.toString(8));

console.log("Hasil Akhir Octa : "+Octa)