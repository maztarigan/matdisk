console.log("isi kubus");

var inputkeyboard = require('readline-sync');

var s = parseInt(inputkeyboard.question("masukkan sisi"));

var v = s*s*s;
console.log("volume kubus= " + v);