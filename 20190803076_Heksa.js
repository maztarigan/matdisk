var key = require("readline-sync");

var desimal = parseInt(key.question('Masukkan Nilai Desimal : '));

var heksa = (desimal.toString(16));

console.log(heksa);