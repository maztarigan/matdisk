var baca = require("readline-sync");

var p = parseInt(baca.question("Panjang :"));
var l = parseInt(baca.question("Luas :"));
var t = parseInt(baca.question("Tinggi :"));

var volume = p * l * t;

console.log(volume);