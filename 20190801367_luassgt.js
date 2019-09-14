var baca = require("readline-sync");

var a = parseInt(baca.question("alas :"));
var t = parseInt(baca.question("tinggi :"));

var luas = 0.5 * a * t;

console.log(luas);
