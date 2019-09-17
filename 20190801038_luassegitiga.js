console.log("luas segitiga");
var bacakeyboard = require('readline-sync');

var a = parseInt(bacakeyboard.question("masukkan alas: "));
var t = parseInt(bacakeyboard.question("masukkan tinggi: "));

var luas = 1/2 * a * t;

console.log("luas segitiga =" + luas);