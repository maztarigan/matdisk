var input = require('readline-sync')

var Desimal = parseInt(input.question('Masukkan nilai Desimal : '));
var Bin  = (Desimal.toString(2));

console.log("BINNER = "+Bin)
