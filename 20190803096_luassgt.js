var bacakeyboard = require('readline-sync');

var a = parseInt(bacakeyboard.question("masukkan nilai alas: "));
var t = parseInt(bacakeyboard.question("masukkan nilai tinggi: "));
var luas = 1/2 * a * t;

console.log(luas);