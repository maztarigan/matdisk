var key = require("readline-sync");

var desimal = parseInt(key.question('Masukan Nilai Desimal : '));
var desimal = (desimal, 10)
var biner = (desimal.toString(16));

console.log(biner);
