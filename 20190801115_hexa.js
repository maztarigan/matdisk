var input = require('readline-sync');
var bil = parseInt(input.question("Masukkan Desimal = "));
var hexa = bil.toString(16).toUpperCase();

console.log("Hexa dari desimal "+bil+" = "+hexa)
