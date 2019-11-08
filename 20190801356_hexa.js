var input = require('readline-sync')

var Desimal = parseInt(input.question('Masukkan nilai Desimal : '));
var Hex  = (Desimal.toString(16));

console.log("HEX = "+Hex)
