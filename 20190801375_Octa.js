var key = require('readline-sync');
var input = parseInt(key.question("Masukkan Angka Desimal : "));
var Octa = (input.toString(8));
console.log("Bilangan Octanya adalah ["+Octa+"]");