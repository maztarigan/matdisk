var bacakeyboard = require('readline-sync')

var a=parseInt(bacakeyboard.question("Masukan Alas : "));
var t=parseInt(bacakeyboard.question("Masukan Tinggi : "));
var luas=a*t/2;

console.log("Luas Segitiga = "+luas);