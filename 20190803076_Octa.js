var key = require("readline-sync");

var desimal = parseInt(key.question('Masukkan Nilai Desimal : '));

var okta = (desimal.toString(8));

console.log(okta);