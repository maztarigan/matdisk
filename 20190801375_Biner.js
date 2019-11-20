var key = require('readline-sync');
var input = parseInt(key.question("Masukkan Angka Desimal : "));
var Biner = (input.toString(2));
console.log("Bilangan Binernya adalah ["+Biner+"]");