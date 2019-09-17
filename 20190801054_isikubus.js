var inputkeyboard = require("readline-sync");

var s = parseInt(inputkeyboard.question("Masukkan Sisi  : "));

var volum = s * s * s

console.log("Isi Kubus = " + volum );