var key = require("readline-sync");

var desimal = parseInt(key.question('Masukkan Nilai Desimal : '));

var biner = (desimal.toString(2));

console.log(biner);