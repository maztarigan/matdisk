var input = require('readline-sync');
var bil = parseInt(input.question("Masukkan Desimal = "));
var binner = bil.toString(2);

console.log("Binner dari desimal "+bil+" = "+binner)
