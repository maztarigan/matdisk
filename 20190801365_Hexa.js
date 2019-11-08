var input = require("readline-sync")

var Desimal = parseInt (input.question("Masukkan Nilai Desimal : "))
var Hexa    = (Desimal.toString(16));

console.log("Hasil Akhir Hexa : "+Hexa)