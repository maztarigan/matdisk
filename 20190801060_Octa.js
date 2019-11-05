var key = require("readline-sync");

var desimal = parseInt(key.question('Masukan Nilai Desimal : '));
var octa = (desimal.toString(8));

console.log(octa);