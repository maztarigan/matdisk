var input = require('readline-sync')

var Desimal = parseInt(input.question("Masukkan nilai Desimal : "))
var Octa = (Desimal.toString(8));

console.log("OCTA = "+Octa);