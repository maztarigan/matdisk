var bacakeyboard = require('readline-sync');

var s=parseInt(bacakeyboard.question("Masukan Sisi = "));
var volume=s*s*s;

console.log("Volume Kubus = "+volume);