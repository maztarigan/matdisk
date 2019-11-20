var key = require('readline-sync');
var input = parseInt(key.question("Masukkan Angka Desimal : "));
var Hexa = (input.toString(16));
console.log("Bilangan Binernya adalah ["+Hexa+"]");