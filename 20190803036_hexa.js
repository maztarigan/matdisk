var key = require("readline-sync");

var desimal = parseInt(key.question('Masukan Nilai Desimal : '));
var hexa = (desimal.toString(16));

console.log(hexa);
